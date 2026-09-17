// <mesh-gradient> — static mesh gradient WebGL background (adapted from Paper Shaders, Apache-2.0).
const VERT = `attribute vec2 a_position;void main(){gl_Position=vec4(a_position,0.0,1.0);}`;
const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec3 u_colors[8];
uniform vec4 u_scene;uniform vec4 u_shape;uniform vec4 u_surface;uniform vec4 u_finish;uniform vec4 u_transform;
#define u_resolution u_scene.xy
#define u_colorCount u_scene.w
#define u_scale u_shape.x
#define u_intensity u_shape.y
#define u_paramA u_shape.z
#define u_contrast u_surface.y
#define u_grain u_finish.w
#define u_seed u_transform.x
float grainHash(vec2 p){vec3 p3=fract(vec3(p.xyx)*0.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}
vec2 hash22(vec2 p){float n=sin(dot(p,vec2(41.0,289.0)));return fract(vec2(15731.743,7892.321)*n);}
vec3 shade(vec2 p){vec3 color=u_colors[0]*0.2;float weight=0.2;
for(int i=0;i<8;i++){if(float(i)>=u_colorCount)break;float fi=float(i);
vec2 center=(hash22(vec2(fi,u_seed))-0.5)*(0.7+u_intensity*1.4);
float influence=exp(-dot(p-center,p-center)*mix(13.0,2.0,u_paramA));
color+=u_colors[i]*influence;weight+=influence;}
return color/weight;}
void main(){vec2 p=(gl_FragCoord.xy-0.5*u_resolution.xy)/min(u_resolution.x,u_resolution.y);
p*=u_scale;vec3 col=shade(p);
if(abs(u_contrast-1.0)>0.0001)col=(col-0.5)*u_contrast+0.5;
if(u_grain>0.0001)col+=(grainHash(gl_FragCoord.xy+vec2(u_seed*17.0,u_seed*31.0))-0.5)*u_grain;
gl_FragColor=vec4(clamp(col,0.0,1.0),1.0);}`;

const hex = (h: string): number[] => {
  h = h.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
};

class MeshGradient extends HTMLElement {
  private _ro?: ResizeObserver;
  private _t?: number;

  connectedCallback() {
    this.style.display = 'block';
    if (this.hasAttribute('fill')) {
      this.style.cssText = 'display:block;position:absolute;inset:0;width:100%;height:100%;pointer-events:none';
    }
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'display:block;width:100%;height:100%';
    this.appendChild(canvas);
    const gl = canvas.getContext('webgl', { antialias: false });
    if (!gl) { this.style.background = this.getAttribute('fallback') || '#0D0D0D'; return; }
    const compile = (type: number, src: string) => { const sh = gl.createShader(type)!; gl.shaderSource(sh, src); gl.compileShader(sh); return sh; };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const u = (n: string) => gl.getUniformLocation(prog, n);
    const colorAttr = this.getAttribute('colors') || '#081C15,#2D6A4F,#95D5B2,#FFF3B0';
    const colors = colorAttr.split(',').map((c) => hex(c.trim()));
    while (colors.length < 8) colors.push(colors[colors.length - 1]);
    gl.uniform3fv(u('u_colors'), new Float32Array(colors.flat()));
    gl.uniform4f(u('u_shape'), +(this.getAttribute('scale') || 1.26), 0.35, 0.28, 0);
    gl.uniform4f(u('u_surface'), 1.824, 1.005, 0, 1);
    gl.uniform4f(u('u_finish'), 0, 0, 0, +(this.getAttribute('grain') || 0.042));
    gl.uniform4f(u('u_transform'), +(this.getAttribute('seed') || 1), 0, 0, 0);
    const scene = u('u_scene');
    const colorCount = Math.min(8, colorAttr.split(',').length);
    const draw = () => {
      const r = this.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let w = Math.max(1, Math.round(r.width * dpr));
      let h = Math.max(1, Math.round(r.height * dpr));
      // keep within a safe texture budget on very tall sections; CSS stretches the canvas to fill
      const budget = 3_500_000;
      const scale = Math.min(1, Math.sqrt(budget / (w * h)));
      w = Math.max(1, Math.round(w * scale));
      h = Math.max(1, Math.round(h * scale));
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; gl.viewport(0, 0, w, h); }
      gl.uniform4f(scene, w, h, 0, colorCount);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    draw();
    this._ro = new ResizeObserver(draw);
    this._ro.observe(this);
    this._t = window.setTimeout(draw, 300);
  }

  disconnectedCallback() {
    this._ro?.disconnect();
    if (this._t) clearTimeout(this._t);
  }
}

if (!customElements.get('mesh-gradient')) customElements.define('mesh-gradient', MeshGradient);

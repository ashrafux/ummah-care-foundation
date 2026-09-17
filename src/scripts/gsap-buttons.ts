// Primary-button GSAP micro-interactions ("lift" style). Binds to every element with the
// `btn-fx` class; the host for a <span> pill is its enclosing link.
import { gsap } from 'gsap';

type Style = 'lift' | 'magnetic' | 'pulse';
const cfg: { enabled: boolean; style: Style; intensity: number } = { enabled: true, style: 'lift', intensity: 1 };
const bound = new WeakSet<HTMLElement>();
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function attach(btn: HTMLElement) {
  const host = (btn.tagName === 'SPAN' ? btn.closest<HTMLElement>('a[href]') : btn) || btn;
  const icon = btn.querySelector('svg');
  const diag = !!icon && /M7 17L17 7/.test(icon.innerHTML);
  gsap.set(btn, { transformOrigin: '50% 50%', willChange: 'transform' });
  const k = () => cfg.intensity;
  let pulseTl: gsap.core.Timeline | null = null;

  host.addEventListener('mouseenter', () => {
    if (!cfg.enabled) return;
    if (cfg.style === 'lift') {
      gsap.to(btn, { y: -3 * k(), scale: 1 + 0.03 * k(), duration: 0.35, ease: 'power3.out' });
    } else if (cfg.style === 'pulse') {
      pulseTl = gsap.timeline({ repeat: -1, yoyo: true }).to(btn, { scale: 1 + 0.04 * k(), duration: 0.55, ease: 'sine.inOut' });
    }
    if (icon) gsap.to(icon, { x: (diag ? 3 : 5) * k(), y: diag ? -3 * k() : 0, duration: 0.35, ease: 'power3.out' });
  });
  host.addEventListener('mousemove', (e: MouseEvent) => {
    if (!cfg.enabled || cfg.style !== 'magnetic') return;
    const r = host.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    gsap.to(btn, { x: dx * 14 * k(), y: dy * 10 * k(), scale: 1 + 0.02 * k(), duration: 0.3, ease: 'power2.out' });
  });
  host.addEventListener('mouseleave', () => {
    if (pulseTl) { pulseTl.kill(); pulseTl = null; }
    gsap.to(btn, { x: 0, y: 0, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.55)' });
    if (icon) gsap.to(icon, { x: 0, y: 0, duration: 0.4, ease: 'power3.out' });
  });
  host.addEventListener('mousedown', () => { if (cfg.enabled) gsap.to(btn, { scale: 1 - 0.03 * k(), duration: 0.12, ease: 'power2.out' }); });
  host.addEventListener('mouseup', () => { if (cfg.enabled) gsap.to(btn, { scale: 1 + 0.03 * k(), duration: 0.25, ease: 'power2.out' }); });
  bound.add(btn);
}

function bind() {
  document.querySelectorAll<HTMLElement>('.btn-fx').forEach((b) => { if (!bound.has(b)) attach(b); });
}

export function configure(next: Partial<typeof cfg>) {
  Object.assign(cfg, next);
}

if (!reduceMotion) {
  bind();
  let t: number | undefined;
  new MutationObserver(() => { clearTimeout(t); t = window.setTimeout(bind, 120); }).observe(document.documentElement, { childList: true, subtree: true });
}

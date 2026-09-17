// Testimonials: endless auto-scrolling track, drag to scrub, custom cursor.
const sec = document.querySelector<HTMLElement>('[data-testimonials]');

if (sec) {
  const track = sec.querySelector<HTMLElement>('[data-track]')!;
  const area = sec.querySelector<HTMLElement>('[data-area]')!;
  const cursor = sec.querySelector<HTMLElement>('[data-cursor]')!;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let x = 0;
  let drag: { sx: number; x0: number } | null = null;
  let hover = false;

  const step = () => {
    const half = track.scrollWidth / 2;
    if (!drag && !reduceMotion) x += 0.25;
    if (half > 0) { if (x >= half) x -= half; if (x < 0) x += half; }
    track.style.transform = `translate3d(${-x}px,0,0)`;
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);

  const place = (e: MouseEvent) => {
    const r = sec.getBoundingClientRect();
    cursor.style.left = `${e.clientX - r.left}px`;
    cursor.style.top = `${e.clientY - r.top}px`;
  };
  const show = (on: boolean) => {
    cursor.style.opacity = on ? '1' : '0';
    cursor.style.transform = `translate(-50%,-50%) scale(${on ? (drag ? 0.85 : 1) : 0.6})`;
  };

  area.addEventListener('mouseenter', (e) => { hover = true; place(e); show(true); });
  area.addEventListener('mouseleave', () => { hover = false; show(false); });
  area.addEventListener('mousemove', place);
  area.addEventListener('pointerdown', (e) => {
    drag = { sx: e.clientX, x0: x };
    show(true);
    area.setPointerCapture?.(e.pointerId);
  });
  area.addEventListener('pointermove', (e) => {
    if (!drag) return;
    x = drag.x0 - (e.clientX - drag.sx);
    place(e);
  });
  const up = () => { drag = null; show(hover); };
  area.addEventListener('pointerup', up);
  area.addEventListener('pointercancel', up);
}

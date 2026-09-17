// Cause page: expanding goal cards + scroll-driven word highlight in the closing section.
document.querySelectorAll<HTMLElement>('[data-goals]').forEach((goals) => {
  const items = [...goals.querySelectorAll<HTMLElement>('[data-goal]')];
  const activate = (i: number) => items.forEach((g, j) => g.classList.toggle('is-active', i === j));
  items.forEach((g, i) => {
    g.addEventListener('mouseenter', () => activate(i));
    g.addEventListener('click', () => activate(i));
    g.addEventListener('focus', () => activate(i));
    g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(i); } });
  });
});

const sec = document.querySelector<HTMLElement>('[data-cause-scroll]');
if (sec) {
  const words = [...sec.querySelectorAll<HTMLElement>('[data-word]')];
  const cta = sec.querySelector<HTMLElement>('[data-cta]');
  let lit = -1;
  let ctaOn: boolean | null = null;
  const onScroll = () => {
    const r = sec.getBoundingClientRect();
    const range = sec.offsetHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / Math.max(1, range)));
    const n = words.length;
    const l = Math.floor((p / 0.85) * n);
    if (l !== lit) { lit = l; words.forEach((w, i) => w.classList.toggle('is-lit', i < l)); }
    const on = p > 0.88;
    if (on !== ctaOn) { ctaOn = on; cta?.classList.toggle('is-on', on); }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
}

// Site-wide reveal system: staggered fade-up on load for the first screen, then per-element
// fade-up as headings / paragraphs / buttons / cards scroll into view. State lives in the
// [data-rv] attribute; the transitions themselves are in global.css.
declare global { interface Window { __ucfRevealInit?: boolean } }

const SEEN = new WeakSet<Element>();
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function targetsIn(root: Element): HTMLElement[] {
  const out: HTMLElement[] = [];
  const push = (el: Element) => {
    if (SEEN.has(el) || el.closest('[data-no-reveal]')) return;
    // never prime something that already sits inside a primed (or about-to-be-primed) ancestor
    if (el.parentElement?.closest('[data-rv]')) return;
    out.push(el as HTMLElement);
  };
  root.querySelectorAll('h1,h2,h3,h4,p,form,ul,ol,table,blockquote,summary').forEach((el) => { if (!el.closest('header,footer,nav')) push(el); });
  root.querySelectorAll('a,button,span,div,img,iframe').forEach((el) => {
    if (el.closest('header, footer, nav')) return;
    const cs = getComputedStyle(el);
    if (cs.position === 'sticky' || cs.position === 'fixed' || cs.position === 'absolute') return;
    const tag = el.tagName;
    if (tag === 'IMG' || tag === 'IFRAME') { if (el.getBoundingClientRect().height > 60 && !el.closest('a[href]')) push(el); return; }
    const text = (el.textContent || '').trim();
    const isButton = tag === 'BUTTON' || (tag === 'A' && (cs.display === 'inline-flex' || cs.display === 'flex') && !el.querySelector('img'));
    const isCard = (tag === 'DIV' || tag === 'A') && parseFloat(cs.borderRadius) >= 12 && (cs.backgroundColor !== 'rgba(0, 0, 0, 0)' || cs.boxShadow !== 'none') && el.getBoundingClientRect().height > 80 && !!el.querySelector('h1,h2,h3,h4,p,img');
    const isPill = tag === 'SPAN' && parseFloat(cs.borderRadius) >= 12 && cs.display === 'inline-flex' && text.length > 0 && text.length < 48;
    if (isButton || isCard || isPill) push(el);
  });
  const set = new Set<Element>(out);
  return out.filter((el) => {
    let p = el.parentElement;
    while (p && p !== root) { if (set.has(p)) return false; p = p.parentElement; }
    return true;
  });
}

let io: IntersectionObserver | null = null;

function prime(els: HTMLElement[]) {
  els.forEach((el) => {
    SEEN.add(el);
    // a newly detected card owns the reveal of anything primed inside it earlier
    el.querySelectorAll('[data-rv]').forEach((d) => { d.removeAttribute('data-rv'); io?.unobserve(d); });
    el.setAttribute('data-rv', 'pending');
    io?.observe(el);
  });
}

function reveal(els: HTMLElement[], base = 0) {
  const list = els.filter((el) => el.getAttribute('data-rv') === 'pending');
  list.forEach((el, i) => {
    setTimeout(() => {
      el.setAttribute('data-rv', 'in');
      setTimeout(() => { if (el.getAttribute('data-rv') === 'in') el.setAttribute('data-rv', 'done'); }, 1000);
    }, (base + i * 0.09) * 1000);
  });
}

function inView(el: Element, ratio = 0.1) {
  const r = el.getBoundingClientRect();
  if (!r.height && !r.width) return false;
  const vh = window.innerHeight || 800;
  return r.top < vh * (1 - ratio) && r.bottom > 0;
}

function offScreen(el: Element) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || 800;
  return r.bottom < -40 || r.top > vh + 40;
}

const groups: { sec: Element; els: HTMLElement[] }[] = [];

function scan() {
  const sections = [...document.querySelectorAll('section')].filter((s) => !s.closest('header, footer, nav, [data-no-reveal]'));
  sections.forEach((sec) => {
    const els = targetsIn(sec);
    if (!els.length) return;
    prime(els);
    groups.push({ sec, els });
  });
  tick();
}

function tick() {
  groups.forEach(({ els }) => {
    const visible = els.filter((el) => el.getAttribute('data-rv') === 'pending' && inView(el, 0.08));
    if (visible.length) reveal(visible, 0);
    // re-arm anything that has fully left the viewport so it animates again on the next pass
    els.forEach((el) => {
      const s = el.getAttribute('data-rv');
      if ((s === 'done' || s === 'in') && offScreen(el)) {
        el.setAttribute('data-rv', 'out');
        requestAnimationFrame(() => { if (el.getAttribute('data-rv') === 'out') el.setAttribute('data-rv', 'pending'); });
      }
    });
  });
}

function start() {
  io = new IntersectionObserver(() => tick(), { rootMargin: '40px 0px', threshold: [0, 0.08] });
  scan();
  const hero = document.querySelector('main section');
  if (hero) {
    const heroEls = [...hero.querySelectorAll<HTMLElement>('[data-rv="pending"]')];
    if (heroEls.length) reveal(heroEls, 0.15);
  }
  let busy = false;
  const onScroll = () => { if (busy) return; busy = true; setTimeout(() => { busy = false; tick(); }, 40); };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  setInterval(tick, 200);
  let t: number | undefined;
  new MutationObserver(() => { clearTimeout(t); t = window.setTimeout(scan, 150); }).observe(document.body, { childList: true, subtree: true });
}

if (!reduceMotion && !window.__ucfRevealInit) {
  window.__ucfRevealInit = true;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(start, 60));
  else setTimeout(start, 60);
}

export {};

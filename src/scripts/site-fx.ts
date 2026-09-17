// Shared interaction helpers: viewport watchers, animated counters ([data-count]) and the
// gallery lightbox ([data-lightbox] img).
interface Watcher { el: HTMLElement; ratio: number; fn: (el: HTMLElement) => void; reset?: (el: HTMLElement) => void; fired: boolean }

const watchers: Watcher[] = [];
let ticking = false;

function inView(el: Element, ratio: number) {
  const r = el.getBoundingClientRect();
  if (r.height === 0 && r.width === 0) return false;
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const need = Math.min(r.height * (ratio || 0.1), vh * 0.5);
  return r.top < vh - need && r.bottom > need;
}

function offScreen(el: Element) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || 800;
  return r.bottom < -40 || r.top > vh + 40;
}

function pump() {
  ticking = false;
  for (let i = watchers.length - 1; i >= 0; i--) {
    const w = watchers[i];
    if (!w.fired && inView(w.el, w.ratio)) {
      w.fired = true;
      w.fn(w.el);
      if (!w.reset) watchers.splice(i, 1);
    } else if (w.fired && w.reset && offScreen(w.el)) {
      w.fired = false;
      w.reset(w.el);
    }
  }
}

function schedule() {
  if (ticking) return;
  ticking = true;
  setTimeout(pump, 16);
}

function watch(el: HTMLElement, ratio: number, fn: Watcher['fn'], reset?: Watcher['reset']) {
  watchers.push({ el, ratio, fn, reset, fired: false });
  schedule();
}

window.addEventListener('scroll', schedule, { passive: true });
window.addEventListener('resize', schedule, { passive: true });
setInterval(() => { if (watchers.length) pump(); }, 250);

const timers = new WeakMap<HTMLElement, number>();

export function initCounters(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    if (el.dataset.countBound) return;
    el.dataset.countBound = '1';
    watch(el, 0.4, (t) => {
      const target = parseInt(t.dataset.count || '0', 10) || 0;
      const dur = 1600;
      const start = Date.now();
      const timer = window.setInterval(() => {
        const p = Math.min(1, (Date.now() - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        t.textContent = Math.round(target * eased).toLocaleString('en-US');
        if (p >= 1) clearInterval(timer);
      }, 40);
      timers.set(t, timer);
    }, (t) => {
      const timer = timers.get(t);
      if (timer) clearInterval(timer);
      t.textContent = '0';
    });
  });
}

const ICON_CLOSE = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>';
const ICON_PREV = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
const ICON_NEXT = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';

export function initLightbox(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-lightbox]').forEach((group) => {
    const imgs = [...group.querySelectorAll<HTMLImageElement>('img')].filter((i) => !i.closest('header, nav'));
    if (!imgs.length) return;
    let idx = 0;
    let list: string[] = [];
    let overlay: HTMLDivElement | null = null;
    let view: HTMLImageElement | null = null;

    // Only ever page through images that are actually on screen, so a filtered
    // gallery does not jump to something the visitor cannot see.
    const onScreen = () => imgs.filter((i) => i.offsetParent !== null);
    const show = (i: number) => {
      if (!list.length) return;
      idx = (i + list.length) % list.length;
      if (view) view.src = list[idx];
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') show(idx + 1);
      if (e.key === 'ArrowLeft') show(idx - 1);
    };
    function close() {
      if (!overlay) return;
      const o = overlay;
      overlay = null;
      o.classList.remove('is-on');
      setTimeout(() => o.remove(), 220);
      document.removeEventListener('keydown', onKey);
    }
    const button = (cls: string, html: string, label: string, onClick: (e: MouseEvent) => void) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `lb__btn ${cls}`;
      b.setAttribute('aria-label', label);
      b.innerHTML = html;
      b.addEventListener('click', (ev) => { ev.stopPropagation(); onClick(ev); });
      return b;
    };
    function open(from: HTMLImageElement) {
      const visible = onScreen();
      list = visible.map((i) => i.currentSrc || i.src);
      const startAt = Math.max(0, visible.indexOf(from));
      overlay = document.createElement('div');
      overlay.className = 'lb';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      view = document.createElement('img');
      view.alt = '';
      overlay.appendChild(view);
      overlay.appendChild(button('lb__close', ICON_CLOSE, 'Close', close));
      overlay.appendChild(button('lb__prev', ICON_PREV, 'Previous image', () => show(idx - 1)));
      overlay.appendChild(button('lb__next', ICON_NEXT, 'Next image', () => show(idx + 1)));
      overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
      document.body.appendChild(overlay);
      show(startAt);
      requestAnimationFrame(() => overlay && overlay.classList.add('is-on'));
      document.addEventListener('keydown', onKey);
    }

    imgs.forEach((img) => {
      if (img.dataset.lbBound) return;
      img.dataset.lbBound = '1';
      img.addEventListener('click', () => open(img));
    });
  });
}

initCounters();
initLightbox();
schedule();

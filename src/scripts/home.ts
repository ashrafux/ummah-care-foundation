// Home page: Area-of-Activity sticky heading fade, scroll-linked gallery, volunteer photo fan,
// optional donation box.
const head = document.querySelector<HTMLElement>('[data-aoa-head]');
const body = document.querySelector<HTMLElement>('[data-aoa-body]');
const gallery = document.querySelector<HTMLElement>('[data-gallery-track]');
const fan = document.querySelector<HTMLElement>('[data-fan]');

function aoaTick() {
  if (!head || !body) return;
  const r = body.getBoundingClientRect();
  const vh = window.innerHeight;
  // 0 when the first card is still below ~78% of the viewport, 1 when it has risen to ~28%
  const cardTop = r.top + vh * 0.8;
  const p = Math.min(1, Math.max(0, (vh * 0.9 - cardTop) / (vh * 0.5)));
  head.style.opacity = String(1 - p);
  head.style.transform = `translateY(${-p * 40}px)`;
}

let galX = 0;
function galUpdate() {
  if (!gallery) return;
  const sec = gallery.closest('section');
  if (!sec) return;
  const r = sec.getBoundingClientRect();
  const vh = window.innerHeight || 800;
  const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
  const overflow = Math.max(0, gallery.scrollWidth - window.innerWidth);
  const x = -overflow * p;
  if (Math.abs(x - galX) > 0.5) {
    galX = x;
    gallery.style.transform = `translate3d(${Math.round(x)}px,0,0)`;
  }
}

let raf = 0;
const onScroll = () => {
  if (raf) return;
  raf = requestAnimationFrame(() => { raf = 0; aoaTick(); galUpdate(); });
};
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
if (gallery) new ResizeObserver(galUpdate).observe(gallery);
aoaTick();
galUpdate();

if (fan) {
  new IntersectionObserver((entries) => entries.forEach((e) => fan.classList.toggle('is-in', e.isIntersecting)), { threshold: 0.35 }).observe(fan);
}

// ---- Optional donation box (rendered when SHOW_DONATION_BOX is true in index.astro) ----
const dn = document.querySelector<HTMLFormElement>('[data-donation-form]');
if (dn) {
  const box = dn.closest<HTMLElement>('[data-donation-box]')!;
  const done = box.querySelector<HTMLElement>('[data-donation-done]')!;
  const fund = dn.querySelector<HTMLSelectElement>('#dn-fund')!;
  const contact = dn.querySelector<HTMLInputElement>('#dn-contact')!;
  const amount = dn.querySelector<HTMLInputElement>('#dn-amount')!;
  const err = (name: string) => dn.querySelector<HTMLElement>(`[data-error="${name}"]`)!;
  const setErr = (name: string, msg: string) => { const el = err(name); el.textContent = msg; el.hidden = !msg; };

  [fund, contact, amount].forEach((f) => f.addEventListener('input', () => setErr(f.id.replace('dn-', ''), '')));

  dn.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    if (!fund.value) { setErr('fund', 'Please select a fund.'); ok = false; }
    const c = contact.value.trim();
    const mobile = /^(\+?88)?01[3-9]\d{8}$/.test(c.replace(/[\s-]/g, ''));
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c);
    if (!c) { setErr('contact', 'Enter your mobile number or email.'); ok = false; }
    else if (!mobile && !email) { setErr('contact', 'Enter a valid BD mobile (01XXXXXXXXX) or email.'); ok = false; }
    const amt = Number(amount.value.replace(/[,\s৳]/g, ''));
    if (!amount.value.trim()) { setErr('amount', 'Enter a donation amount.'); ok = false; }
    else if (!isFinite(amt) || amt < 10) { setErr('amount', 'Minimum donation is ৳10.'); ok = false; }
    if (!ok) return;
    box.querySelector<HTMLElement>('[data-sum-fund]')!.textContent = fund.value || 'General Fund';
    box.querySelector<HTMLElement>('[data-sum-amount]')!.textContent = '৳' + (isFinite(amt) && amt > 0 ? amt.toLocaleString('en-US') : amount.value);
    box.querySelector<HTMLElement>('[data-sum-contact]')!.textContent = c;
    dn.parentElement!.hidden = true;
    done.hidden = false;
  });

  box.querySelector<HTMLButtonElement>('[data-donation-reset]')?.addEventListener('click', () => {
    dn.reset();
    ['fund', 'contact', 'amount'].forEach((n) => setErr(n, ''));
    done.hidden = true;
    dn.parentElement!.hidden = false;
  });
}

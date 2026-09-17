// Header: mega menu (hover on desktop via CSS, click/keyboard toggle here), mobile burger.
const header = document.querySelector<HTMLElement>('[data-site-header]');

if (header) {
  const burger = header.querySelector<HTMLButtonElement>('[data-burger]');
  const mega = header.querySelector<HTMLElement>('[data-mega]');
  const megaToggle = header.querySelector<HTMLElement>('[data-mega-toggle]');
  const mobCauses = header.querySelector<HTMLButtonElement>('[data-mobile-causes]');
  const mobSub = header.querySelector<HTMLElement>('[data-mobile-sub]');

  const setMega = (open: boolean) => {
    mega?.classList.toggle('is-open', open);
    megaToggle?.setAttribute('aria-expanded', String(open));
  };
  const setMobile = (open: boolean) => {
    header.classList.toggle('is-open', open);
    burger?.setAttribute('aria-expanded', String(open));
  };

  burger?.addEventListener('click', () => setMobile(!header.classList.contains('is-open')));

  mobCauses?.addEventListener('click', () => {
    const open = !!mobSub?.classList.toggle('is-open');
    mobCauses.setAttribute('aria-expanded', String(open));
  });

  megaToggle?.addEventListener('click', (e) => {
    e.preventDefault();
    setMega(!mega?.classList.contains('is-open'));
  });
  mega?.addEventListener('mouseleave', () => setMega(false));
  mega?.addEventListener('focusout', (e) => {
    if (!mega.contains(e.relatedTarget as Node | null)) setMega(false);
  });

  document.addEventListener('click', (e) => {
    const t = e.target as Node;
    if (mega && !mega.contains(t)) setMega(false);
    if (header.classList.contains('is-open') && !header.contains(t)) setMobile(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { setMega(false); setMobile(false); }
  });
  window.addEventListener('resize', () => { if (window.innerWidth >= 1140) setMobile(false); }, { passive: true });
}

// Gallery scroll spy. Every photo is on the page; the sidebar is a table of
// contents that highlights whichever cause section the reader is currently in.
// Jumping is handled by plain anchor links, so it stays keyboard accessible and
// honours the site's reduced-motion setting.
const root = document.querySelector<HTMLElement>('[data-gallery]');

if (root) {
  const links = [...root.querySelectorAll<HTMLAnchorElement>('[data-spy]')];
  const sections = [...root.querySelectorAll<HTMLElement>('[data-gal-section]')];
  const rail = root.querySelector<HTMLElement>('.gal__cats');

  // A section counts as current once its top has risen past this line.
  const SPY_LINE = 140;
  let current = '';
  // After a click, hold the chosen link lit until the smooth scroll has settled.
  let holdUntil = 0;

  const setActive = (key: string) => {
    if (key === current) return;
    current = key;
    links.forEach((a) => {
      const on = a.dataset.spy === key;
      a.classList.toggle('is-on', on);
      if (on) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
      // Keep the active pill in view on the narrow horizontal rail.
      if (on && rail && rail.scrollWidth > rail.clientWidth) {
        const r = a.getBoundingClientRect();
        const rr = rail.getBoundingClientRect();
        if (r.left < rr.left || r.right > rr.right) {
          rail.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' });
        }
      }
    });
  };

  const spy = () => {
    if (Date.now() < holdUntil) return;
    // Above the first section the first cause stays lit, so the rail is never blank.
    let key = sections.length ? sections[0].id : '';
    for (const section of sections) {
      if (section.getBoundingClientRect().top - SPY_LINE <= 0) key = section.id;
    }
    setActive(key);
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; spy(); });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  links.forEach((a) => {
    a.addEventListener('click', () => {
      setActive(a.dataset.spy || '');
      holdUntil = Date.now() + 700;
    });
  });

  // Old ?c=<cause> links used to filter; send them to the matching section.
  const wanted = new URL(window.location.href).searchParams.get('c');
  if (wanted && !window.location.hash) {
    const target = document.getElementById(wanted);
    if (target) {
      target.scrollIntoView();
      setActive(wanted);
    }
  }

  spy();
}

export {};

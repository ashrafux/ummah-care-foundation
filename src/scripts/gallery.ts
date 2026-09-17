// Gallery filtering. Purely client side: every photo ships in the page and the
// filter only toggles `hidden`, so switching categories is instant and the
// browser keeps the images it has already decoded.
const root = document.querySelector<HTMLElement>('[data-gallery]');

if (root) {
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-filter]')];
  const items = [...root.querySelectorAll<HTMLElement>('[data-cause]')];
  const empty = root.querySelector<HTMLElement>('[data-gallery-empty]');
  const heading = root.querySelector<HTMLElement>('[data-gallery-count]');

  const apply = (key: string, pushUrl = true) => {
    let shown = 0;
    items.forEach((item) => {
      const on = key === 'all' || item.dataset.cause === key;
      item.hidden = !on;
      if (on) shown += 1;
    });

    buttons.forEach((b) => {
      const on = b.dataset.filter === key;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });

    if (empty) empty.hidden = shown > 0;
    if (heading) heading.textContent = shown === 1 ? '1 photo' : `${shown} photos`;

    // Keep the choice in the URL so a filtered view can be linked to or reloaded.
    if (pushUrl) {
      const url = new URL(window.location.href);
      if (key === 'all') url.searchParams.delete('c');
      else url.searchParams.set('c', key);
      window.history.replaceState(null, '', url);
    }
  };

  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter || 'all')));

  const wanted = new URL(window.location.href).searchParams.get('c');
  if (wanted && buttons.some((b) => b.dataset.filter === wanted)) apply(wanted, false);
  else apply('all', false);
}

export {};

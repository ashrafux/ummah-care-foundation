// Fund picker for the home donation box: a button that opens a listbox of funds.
// The chosen value lives in the hidden #dn-fund input, so home.ts validates and
// resets it exactly as it did the old <select>.
//
// Keyboard: Enter / Space / ArrowDown open the list; ArrowUp / ArrowDown, Home and
// End move; a letter jumps to the next fund starting with it; Enter / Space choose;
// Escape and Tab close. Clicking outside closes it too.

const root = document.querySelector<HTMLElement>('[data-fund-picker]');

if (root) {
  const input = root.querySelector<HTMLInputElement>('#dn-fund')!;
  const btn = root.querySelector<HTMLButtonElement>('[data-fund-btn]')!;
  const list = root.querySelector<HTMLUListElement>('[data-fund-list]')!;
  const valueEl = root.querySelector<HTMLElement>('[data-fund-value]')!;
  const icoEl = root.querySelector<HTMLElement>('[data-fund-ico]')!;
  const opts = [...list.querySelectorAll<HTMLLIElement>('[role="option"]')];
  const placeholder = valueEl.textContent ?? '';
  let active = -1;

  const isOpen = () => !list.hidden;

  const setActive = (i: number) => {
    active = Math.max(0, Math.min(opts.length - 1, i));
    opts.forEach((o, n) => o.classList.toggle('is-active', n === active));
    list.setAttribute('aria-activedescendant', opts[active].id);
    opts[active].scrollIntoView({ block: 'nearest' });
  };

  const open = () => {
    if (isOpen()) return;
    list.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    const chosen = opts.findIndex((o) => o.getAttribute('aria-selected') === 'true');
    setActive(chosen >= 0 ? chosen : 0);
    list.focus({ preventScroll: true });
  };

  const close = (refocus = true) => {
    if (!isOpen()) return;
    list.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    opts.forEach((o) => o.classList.remove('is-active'));
    list.removeAttribute('aria-activedescendant');
    if (refocus) btn.focus({ preventScroll: true });
  };

  // Reflects a value on the button, the options and the hidden input.
  const show = (name: string) => {
    opts.forEach((o) => o.setAttribute('aria-selected', String(o.dataset.value === name)));
    const opt = opts.find((o) => o.dataset.value === name);
    valueEl.textContent = opt ? name : placeholder;
    valueEl.classList.toggle('is-empty', !opt);
    icoEl.innerHTML = opt ? opt.querySelector('.dn__optIco')!.innerHTML : '';
    icoEl.hidden = !opt;
  };

  const choose = (i: number) => {
    const name = opts[i].dataset.value!;
    input.value = name;
    show(name);
    // home.ts clears the fund error on input
    input.dispatchEvent(new Event('input', { bubbles: true }));
    close();
  };

  btn.addEventListener('click', () => (isOpen() ? close() : open()));

  btn.addEventListener('keydown', (e) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault();
      open();
    }
  });

  list.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); setActive(active + 1); break;
      case 'ArrowUp': e.preventDefault(); setActive(active - 1); break;
      case 'Home': e.preventDefault(); setActive(0); break;
      case 'End': e.preventDefault(); setActive(opts.length - 1); break;
      case 'Enter':
      case ' ': e.preventDefault(); choose(active); break;
      case 'Escape': e.preventDefault(); close(); break;
      case 'Tab': close(false); break;
      default:
        if (e.key.length === 1 && /\S/.test(e.key)) {
          const k = e.key.toLowerCase();
          const order = [...opts.slice(active + 1), ...opts.slice(0, active + 1)];
          const hit = order.find((o) => o.dataset.value!.toLowerCase().startsWith(k));
          if (hit) setActive(opts.indexOf(hit));
        }
    }
  });

  opts.forEach((o, i) => {
    // The pointer owns the highlight while it is over the list, so only one row is ever lit.
    const follow = () => { if (active !== i) setActive(i); };
    o.addEventListener('mouseenter', follow);
    o.addEventListener('mousemove', follow);
    // mousedown keeps focus on the list so the click lands before any blur handling
    o.addEventListener('mousedown', (e) => e.preventDefault());
    o.addEventListener('click', () => choose(i));
  });

  document.addEventListener('pointerdown', (e) => {
    if (isOpen() && !root.contains(e.target as Node)) close(false);
  });

  // "Make another donation" calls form.reset(). A hidden input's value is also its
  // default, so reset() would keep the old fund — clear it ourselves.
  input.form?.addEventListener('reset', () => {
    input.value = '';
    show('');
    close(false);
  });
}

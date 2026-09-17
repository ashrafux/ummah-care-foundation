// Prototype form behaviour: submit swaps the form for its "sent" notice; chip groups toggle;
// FAQ accordion keeps a single item open. Wire real submissions in the submit handler.
document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sent = document.querySelector<HTMLElement>(`[data-form-sent="${form.dataset.form}"]`);
    form.hidden = true;
    if (sent) { sent.hidden = false; sent.focus?.(); }
  });
});

document.querySelectorAll<HTMLElement>('[data-toggle-group]').forEach((group) => {
  const multi = group.dataset.toggleGroup === 'multi';
  const buttons = [...group.querySelectorAll<HTMLButtonElement>('button')];
  buttons.forEach((b) => {
    b.setAttribute('aria-pressed', String(b.classList.contains('is-on')));
    b.addEventListener('click', () => {
      if (multi) b.classList.toggle('is-on');
      else { buttons.forEach((x) => x.classList.remove('is-on')); b.classList.add('is-on'); }
      buttons.forEach((x) => x.setAttribute('aria-pressed', String(x.classList.contains('is-on'))));
    });
  });
});

document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((acc) => {
  const items = [...acc.querySelectorAll<HTMLElement>('[data-acc-item]')];
  const sync = () => items.forEach((i) => {
    const open = i.classList.contains('is-open');
    i.querySelector('button')?.setAttribute('aria-expanded', String(open));
    const panel = i.querySelector<HTMLElement>('[data-acc-panel]');
    if (panel) panel.hidden = !open;
  });
  items.forEach((item) => {
    item.querySelector('button')?.addEventListener('click', () => {
      const wasOpen = item.classList.contains('is-open');
      items.forEach((i) => i.classList.remove('is-open'));
      if (!wasOpen) item.classList.add('is-open');
      sync();
    });
  });
  sync();
});

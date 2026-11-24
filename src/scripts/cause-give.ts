// Cause page donate box: one or more gifts or any amount (Imam Support: a monthly
// sponsorship or a one-off gift), Sadaqa or Zakat, and the total on the button.
// Nothing is charged yet, same as the Donate page.
import { getUser, addGift } from './account';

const taka = (n: number) => '৳' + n.toLocaleString('en-US');
const num = (s: string) => Number(s.replace(/[^\d]/g, '')) || 0;

document.querySelectorAll<HTMLElement>('.gb').forEach((box) => {
  const form = box.querySelector<HTMLFormElement>('[data-gb]')!;
  const tabs = [...box.querySelectorAll<HTMLButtonElement>('[data-gb-tab]')];
  const panels = [...box.querySelectorAll<HTMLElement>('[data-gb-panel]')];
  const gifts = [...box.querySelectorAll<HTMLInputElement>('[data-gb-gift]')];
  const row = (g: HTMLInputElement) => g.closest<HTMLElement>('.gift')!;
  const amount = box.querySelector<HTMLInputElement>('[data-gb-amount]')!;
  const presets = [...box.querySelectorAll<HTMLButtonElement>('[data-gb-preset]')];
  const btn = box.querySelector<HTMLElement>('[data-gb-btn]')!;
  const name = box.querySelector<HTMLInputElement>('[data-gb-name]')!;
  const next = box.querySelector<HTMLButtonElement>('[data-gb-next]')!;
  const nextLabel = box.querySelector<HTMLElement>('[data-gb-next-label]')!;
  const cards = [...document.querySelectorAll<HTMLElement>(`[data-gb-for="${box.id}"]`)];
  // Imam Support: who is sponsored, how much a month and for how many months.
  const sps = [...box.querySelectorAll<HTMLInputElement>('[data-sp]')];
  const spCards = [...document.querySelectorAll<HTMLElement>(`[data-sp-for="${box.id}"]`)];
  const spPlan = box.querySelector<HTMLElement>('[data-sp-plan]');
  const spAmounts = box.querySelector<HTMLElement>('[data-sp-amounts]');
  const spMonths = [...box.querySelectorAll<HTMLButtonElement>('[data-sp-months] button')];
  let monthly = 0;
  let months = 1;
  const sponsee = () => sps.find((x) => x.checked);
  // The box opens on whichever tab the markup marks as current.
  let mode = tabs.find((t) => t.classList.contains('is-on'))?.dataset.gbTab ?? 'gift';
  const err = (k: string, show: boolean) => { const e = box.querySelector<HTMLElement>(`[data-gb-err="${k}"]`); if (e) e.hidden = !show; };

  const total = () => {
    if (mode === 'amount') return num(amount.value);
    if (mode === 'sponsor') return sponsee() ? monthly * months : 0;
    return gifts.filter((g) => g.checked).reduce((sum, g) => sum + Number(g.dataset.price), 0);
  };
  const render = () => {
    gifts.forEach((g) => row(g).classList.toggle('is-on', g.checked));
    cards.forEach((c) => {
      const on = mode === 'gift' && !!gifts[Number(c.dataset.gbPick)]?.checked;
      c.classList.toggle('is-on', on);
      c.setAttribute('aria-pressed', String(on));
    });
    spCards.forEach((c) => {
      const on = mode === 'sponsor' && !!sps[Number(c.dataset.spPick)]?.checked;
      c.classList.toggle('is-on', on);
      c.setAttribute('aria-pressed', String(on));
    });
    if (spPlan) {
      const s = sponsee();
      spPlan.hidden = !s;
      box.querySelector<HTMLElement>('[data-sp-empty]')!.hidden = !!s;
      spAmounts!.querySelectorAll<HTMLElement>('button').forEach((b) => b.classList.toggle('is-on', Number(b.dataset.v) === monthly));
      spMonths.forEach((b) => b.classList.toggle('is-on', Number(b.dataset.m) === months));
      box.querySelector<HTMLElement>('[data-sp-line]')!.textContent = `${taka(monthly)} a month × ${months} ${months === 1 ? 'month' : 'months'}`;
      box.querySelector<HTMLElement>('[data-sp-total]')!.textContent = taka(monthly * months);
    }
    const t = total();
    if (t >= 100) err('amount', false);
    btn.textContent = t > 0 ? `Donate ${taka(t)}` : 'Donate';
    nextLabel.textContent = t > 0 ? `Continue · ${taka(t)}` : 'Continue';
  };

  // Continue opens the donor's details below the gift, in the same box.
  const step = () => {
    form.classList.add('is-two');
    name.focus({ preventScroll: true });
    window.setTimeout(() => name.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  };
  // One message for both cases: nothing chosen, or an amount under ৳100.
  const lowMsg = () => {
    const e = box.querySelector<HTMLElement>('[data-gb-err="amount"]');
    if (!e) return;
    if (mode === 'gift' && !gifts.some((g) => g.checked)) e.textContent = 'Please choose at least one gift.';
    else if (mode === 'sponsor' && !sponsee()) e.textContent = 'Please choose someone to sponsor.';
    else e.textContent = 'Please give at least ৳100.';
  };
  next.addEventListener('click', () => {
    const low = total() < 100;
    lowMsg();
    err('amount', low);
    if (!low) step();
  });

  const more = box.querySelector<HTMLButtonElement>('[data-gb-more]')!;
  more.addEventListener('click', () => {
    const f = box.querySelector<HTMLElement>('[data-gb-behalf]')!;
    f.hidden = false;
    more.hidden = true;
    f.querySelector('input')?.focus();
  });

  const setMode = (m: string) => {
    mode = m;
    tabs.forEach((t) => { const on = t.dataset.gbTab === m; t.classList.toggle('is-on', on); t.setAttribute('aria-selected', String(on)); });
    panels.forEach((p) => { p.hidden = p.dataset.gbPanel !== m; });
    render();
  };
  tabs.forEach((t) => t.addEventListener('click', () => setMode(t.dataset.gbTab!)));

  gifts.forEach((g) => g.addEventListener('change', render));

  presets.forEach((p) => p.addEventListener('click', () => {
    amount.value = Number(p.dataset.gbPreset).toLocaleString('en-US');
    presets.forEach((x) => x.classList.toggle('is-on', x === p));
    render();
  }));
  amount.addEventListener('input', () => {
    const v = num(amount.value);
    amount.value = v ? v.toLocaleString('en-US') : '';
    presets.forEach((x) => x.classList.toggle('is-on', Number(x.dataset.gbPreset) === v));
    render();
  });

  const types = [...box.querySelectorAll<HTMLButtonElement>('[data-gb-type] button')];
  types.forEach((b) => b.addEventListener('click', () => { types.forEach((x) => x.classList.toggle('is-on', x === b)); render(); }));

  // "Ways to give" cards elsewhere on the page add or remove a gift in this box.
  // Scrolls to the box only when it is off screen (it stays in view beside the cards on wide screens).
  cards.forEach((card) => card.addEventListener('click', () => {
    const g = gifts[Number(card.dataset.gbPick)];
    if (!g) return;
    // In "Any amount" mode a card switches back to gifts and adds itself rather than toggling off.
    g.checked = mode === 'amount' ? true : !g.checked;
    setMode('gift');
    const r = box.getBoundingClientRect();
    if (r.top > window.innerHeight * .6 || r.bottom < 120) box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  // Choosing who to sponsor offers that person's monthly amounts, starting with the smallest.
  const pickSponsee = (s: HTMLInputElement) => {
    s.checked = true;
    const opts = (s.dataset.options ?? '').split(',').map(Number).filter(Boolean);
    const last = opts.length - 1;
    spAmounts!.innerHTML = '';
    opts.forEach((v, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'pill';
      b.dataset.v = String(v);
      // For a person, the last option covers everything still needed.
      b.textContent = i === last && s.dataset.name !== 'Sponsor the whole program' && opts.length > 1 ? `${taka(v)} (all)` : taka(v);
      b.addEventListener('click', () => { monthly = v; render(); });
      spAmounts!.append(b);
    });
    monthly = opts[0] ?? 0;
    setMode('sponsor');
  };
  sps.forEach((s) => s.addEventListener('change', () => pickSponsee(s)));
  spMonths.forEach((b) => b.addEventListener('click', () => { months = Number(b.dataset.m); render(); }));
  spCards.forEach((card) => card.addEventListener('click', () => {
    const s = sps[Number(card.dataset.spPick)];
    if (!s) return;
    pickSponsee(s);
    const r = box.getBoundingClientRect();
    if (r.top > window.innerHeight * .6 || r.bottom < 120) box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  // Signed-in donors (My Account preview) get their details filled in.
  const me = getUser();
  const contactIn = box.querySelector<HTMLInputElement>('input[autocomplete="email"]');
  if (me) { name.value = me.name; if (contactIn) contactIn.value = me.contact; }

  // What this gift was, for the donor's account history.
  const describe = () => {
    if (mode === 'sponsor') return `Sponsored ${sponsee()?.dataset.name ?? ''} · ${months} ${months === 1 ? 'month' : 'months'}`;
    if (mode === 'amount') return 'Gift of any amount';
    return gifts.filter((g) => g.checked).map((g) => g.dataset.name).join(', ');
  };

  name.addEventListener('input', () => err('name', false));
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Enter on step 1 moves on rather than submitting.
    if (!form.classList.contains('is-two')) { next.click(); return; }
    const noName = !name.value.trim();
    const low = total() < 100;
    lowMsg();
    err('name', noName);
    err('amount', low);
    if (low) return;
    if (noName) { name.focus(); return; }
    addGift({
      cause: box.dataset.cause ?? '',
      what: describe(),
      amount: total(),
      type: box.querySelector<HTMLElement>('[data-gb-type] .is-on')?.dataset.v ?? 'Sadaqa',
      date: new Date().toISOString(),
      monthly: mode === 'sponsor'
    });
    form.hidden = true;
    const sent = box.querySelector<HTMLElement>('[data-gb-sent]');
    if (sent) { sent.hidden = false; sent.focus({ preventScroll: true }); }
  });

  render();
});

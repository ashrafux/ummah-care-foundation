// Hero headline typewriter. Every character is already in the DOM and laid out,
// hidden with `visibility`, so revealing them one by one costs no reflow and the
// line breaks never jump. The caret is absolutely positioned, so it adds no width.
const el = document.querySelector<HTMLElement>('[data-typewriter]');

if (el) {
  const chars = [...el.querySelectorAll<HTMLElement>('.tw-ch')];
  const caret = el.querySelector<HTMLElement>('.tw-caret');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const showAll = () => {
    el.classList.add('tw-done');
    caret?.remove();
  };

  if (reduceMotion || !chars.length || !caret) {
    showAll();
  } else {
    let i = 0;
    let timer: number | undefined;
    // If anything stalls, never leave the headline invisible.
    const failsafe = window.setTimeout(showAll, 8000);

    const place = (target: HTMLElement, atStart = false) => {
      const host = el.getBoundingClientRect();
      const r = target.getBoundingClientRect();
      caret.style.left = `${(atStart ? r.left : r.right) - host.left}px`;
      caret.style.top = `${r.top - host.top}px`;
      caret.style.height = `${r.height}px`;
    };

    // Pause a little longer where a human would: after punctuation, between words.
    const delayFor = (index: number) => {
      const ch = chars[index].textContent || '';
      if (/[.!?]/.test(ch)) return 420;
      if (/[,;:]/.test(ch)) return 220;
      const next = chars[index + 1];
      const newWord = next && next.parentElement !== chars[index].parentElement;
      return (newWord ? 96 : 30) + Math.random() * 30;
    };

    const finish = () => {
      clearTimeout(failsafe);
      el.classList.add('tw-done');
      caret.classList.add('tw-blink');
      // Let it blink a couple of times, then retire the caret.
      window.setTimeout(() => caret.classList.remove('tw-on', 'tw-blink'), 2400);
    };

    const step = () => {
      if (i >= chars.length) return finish();
      const current = chars[i];
      current.classList.add('tw-in');
      place(current);
      const wait = delayFor(i);
      i += 1;
      timer = window.setTimeout(step, wait);
    };

    // Keep the caret glued to the last typed character if the line boxes move.
    window.addEventListener('resize', () => {
      const last = chars[Math.min(i, chars.length) - 1];
      if (last && !el.classList.contains('tw-done')) place(last);
    }, { passive: true });

    try {
      place(chars[0], true);
      caret.classList.add('tw-on');
      timer = window.setTimeout(step, 320);
    } catch {
      clearTimeout(timer);
      showAll();
    }
  }
}

export {};

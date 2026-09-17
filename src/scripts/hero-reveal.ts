// Hero headline reveal. The words ship in the markup already split, so this only
// has to stagger a class; the motion itself lives in CSS. Nothing is measured and
// nothing is rebuilt, so the layout is identical on every frame.
//
// Swap the effect by changing `data-hero-reveal` on the headline: "blur", "rise"
// or "scale".
const el = document.querySelector<HTMLElement>('[data-hero-reveal]');

if (el) {
  const words = [...el.querySelectorAll<HTMLElement>('.hw')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STEP_MS = 70;
  const LEAD_MS = 180;

  const showAll = () => words.forEach((w) => w.classList.add('is-in'));

  if (reduceMotion || !words.length) {
    showAll();
  } else {
    words.forEach((w, i) => { w.style.transitionDelay = `${LEAD_MS + i * STEP_MS}ms`; });
    // Two frames so the browser has the start state before the transition begins.
    requestAnimationFrame(() => requestAnimationFrame(showAll));
    // Never leave the headline invisible if a frame callback is dropped.
    window.setTimeout(showAll, 4000);
    // Drop the stagger once it has played, so nothing lingers on later repaints.
    window.setTimeout(() => {
      words.forEach((w) => { w.style.transitionDelay = ''; w.style.willChange = ''; });
    }, LEAD_MS + words.length * STEP_MS + 1200);
  }
}

export {};

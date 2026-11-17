// Decides once per page load whether the intro loader plays:
// first visit in this browser session, and only if the user hasn't asked for reduced motion.
const shouldPlay = () => {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    if (sessionStorage.getItem("intro-seen")) return false;
    sessionStorage.setItem("intro-seen", "1");
  } catch {
    /* storage blocked: still play once */
  }
  return window.location.pathname === "/";
};

export const introPlays = shouldPlay();

/** Seconds that on-load animations wait so they start as the loader leaves. */
export const INTRO_DELAY = introPlays ? 1.45 : 0;

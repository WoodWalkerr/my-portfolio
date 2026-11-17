import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "../../lib/lenis";
import { introPlays } from "../../lib/intro";

/** Inertia-based smooth scrolling for mouse/trackpad. Touch keeps native scrolling. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: { offset: -88 },
    });
    if (introPlays) lenis.stop(); // the intro loader starts it again
    setLenis(lenis);
    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);
  return null;
}

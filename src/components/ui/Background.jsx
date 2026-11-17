import { useEffect, useRef } from "react";

/**
 * Fixed decorative backdrop: drifting aurora blobs, a faded grid, and a soft
 * glow that follows the cursor. Everything is GPU-friendly (transform/opacity
 * only, radial gradients instead of filter: blur) so scrolling stays smooth.
 */
export default function Background() {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || !finePointer || reduce) return;

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
          el.style.opacity = "1";
          frame = 0;
        });
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora blobs */}
      <div className="absolute -left-[20vw] -top-[25vh] h-[70vh] w-[70vw] animate-drift1 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.22),transparent)] dark:bg-[radial-gradient(closest-side,rgba(34,211,238,0.16),transparent)]" />
      <div className="absolute -right-[15vw] top-[10vh] h-[70vh] w-[60vw] animate-drift2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.18),transparent)] dark:bg-[radial-gradient(closest-side,rgba(139,92,246,0.16),transparent)]" />
      <div className="absolute bottom-[-30vh] left-[20vw] h-[70vh] w-[60vw] animate-drift3 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent)] dark:bg-[radial-gradient(closest-side,rgba(59,130,246,0.12),transparent)]" />

      {/* Grid */}
      <div className="mask-radial absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:56px_56px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)]" />

      {/* Film grain */}
      <div className="grain absolute inset-0 opacity-[0.07] dark:opacity-[0.05]" />

      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-700 [background:radial-gradient(closest-side,rgba(56,189,248,0.10),transparent)] dark:[background:radial-gradient(closest-side,rgba(56,189,248,0.09),transparent)]"
      />
    </div>
  );
}

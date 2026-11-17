import { useEffect, useRef } from "react";

/**
 * Custom cursor: a precise dot plus a trailing ring that grows over
 * interactive elements. Elements with data-cursor="Text" show that label.
 * Only on devices with a real mouse; native cursor is kept for text fields.
 */
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor");

    let mx = -100, my = -100, rx = -100, ry = -100, raf = 0, visible = false;

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      if (!visible) {
        visible = true;
        rx = mx;
        ry = my;
        root.dataset.cursorState = root.dataset.cursorState || "on";
      }
    };

    const onOver = (e) => {
      const target = e.target.closest?.("[data-cursor], a, button, [role='tab'], label");
      const text = target?.getAttribute("data-cursor");
      if (text) {
        root.dataset.cursorState = "label";
        label.current.textContent = text;
      } else if (target) {
        root.dataset.cursorState = "hover";
      } else {
        root.dataset.cursorState = "on";
      }
    };

    const onDown = () => root.classList.add("cursor-down");
    const onUp = () => root.classList.remove("cursor-down");
    const onLeave = () => {
      visible = false;
      root.dataset.cursorState = "";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("custom-cursor", "cursor-down");
      delete root.dataset.cursorState;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden="true" className="cursor-layer pointer-events-none fixed inset-0 z-[90]">
      <div ref={ring} className="cursor-ring">
        <span ref={label} className="cursor-label" />
      </div>
      <div ref={dot} className="cursor-dot" />
    </div>
  );
}

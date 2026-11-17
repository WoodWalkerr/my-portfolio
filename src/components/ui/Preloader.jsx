import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, m } from "framer-motion";
import { introPlays } from "../../lib/intro";
import { getLenis } from "../../lib/lenis";
import { EASE } from "./Reveal";

/** Quick 0→100 counter + curtain wipe. Plays once per session (see lib/intro.js). */
export default function Preloader() {
  const [show, setShow] = useState(introPlays);
  const countRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    if (!introPlays) return;
    document.documentElement.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => {
        if (countRef.current) countRef.current.textContent = String(Math.round(v)).padStart(3, "0");
        if (barRef.current) barRef.current.style.transform = `scaleX(${v / 100})`;
      },
      onComplete: () => setShow(false),
    });
    return () => controls.stop();
  }, []);

  const release = () => {
    document.documentElement.style.overflow = "";
    getLenis()?.start();
  };

  return (
    <AnimatePresence onExitComplete={release}>
      {show && (
        <m.div
          key="preloader"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          style={{ clipPath: "inset(0 0 0% 0)" }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink-950 p-6 text-white sm:p-10"
          aria-hidden="true"
        >
          <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400">
            <m.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: EASE }}>
              Melven Bagolaque
            </m.span>
            <m.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ease: EASE }}>
              Portfolio ©{new Date().getFullYear()}
            </m.span>
          </div>

          <div>
            <div className="mb-6 h-px w-full bg-white/10">
              <div ref={barRef} className="h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
            </div>
            <div className="flex items-end justify-between">
              <p className="max-w-[12ch] font-display text-2xl font-semibold leading-tight text-slate-300 sm:text-4xl">
                Designing &amp; building for the web
              </p>
              <span
                ref={countRef}
                className="font-mono text-[22vw] font-medium leading-[0.8] tracking-tighter sm:text-[14vw]"
              >
                000
              </span>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

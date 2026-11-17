import { useRef } from "react";
import {
  m,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/**
 * Giant scrolling text band. Drifts on its own, speeds up and reverses with
 * the page's scroll velocity, and skews slightly while you scroll fast.
 */
export default function VelocityMarquee({ items, baseVelocity = -2, outline = false, className = "" }) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const skewX = useTransform(velocity, [-2500, 2500], [10, -10]);
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = dir.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * f;
    baseX.set(baseX.get() + move);
  });

  const row = (
    <span className="flex shrink-0 items-center">
      {items.map((t) => (
        <span key={t} className="flex items-center">
          <span className="px-6 sm:px-10">{t}</span>
          <span className="text-gradient text-[0.5em]">✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className={`relative overflow-hidden py-6 ${className}`} aria-hidden="true">
      <m.div
        style={{ x, skewX }}
        className={`flex w-max whitespace-nowrap text-[clamp(3rem,10vw,8.5rem)] font-display font-extrabold uppercase leading-none tracking-tighter ${
          outline
            ? "text-transparent [-webkit-text-stroke:1.5px_rgba(100,116,139,0.55)]"
            : "text-slate-900 dark:text-white"
        }`}
      >
        {row}
        {row}
        {row}
        {row}
      </m.div>
    </div>
  );
}

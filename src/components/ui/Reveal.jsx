import { m } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

/** Fades + slides its children in the first time they scroll into view. */
export default function Reveal({ children, delay = 0, y = 28, x = 0, className, as = "div", ...rest }) {
  const Comp = m[as];
  return (
    <Comp
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Parent/child variants for staggered lists. */
export const staggerParent = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

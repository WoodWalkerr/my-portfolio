import { Fragment } from "react";
import { m } from "framer-motion";
import Reveal, { EASE } from "./Reveal";

/** Title words slide up out of a mask, one after another. */
function MaskedWords({ text, className = "", startIndex = 0 }) {
  return text.split(" ").map((word, i) => (
    <Fragment key={`${word}-${i}`}>
    {i > 0 && " "}
    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <m.span
        className={`inline-block ${className}`}
        variants={{
          hidden: { y: "110%", rotate: 4 },
          show: { y: 0, rotate: 0, transition: { duration: 0.85, ease: EASE, delay: (startIndex + i) * 0.07 } },
        }}
      >
        {word}
      </m.span>
    </span>
    </Fragment>
  ));
}

export default function SectionHeading({ index, eyebrow, title, highlight, children, align = "left" }) {
  const center = align === "center";
  const titleWords = title.split(" ").length;
  return (
    <div className={`mb-14 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p
          className={`mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300 ${
            center ? "justify-center" : ""
          }`}
        >
          {index && <span className="text-slate-400 dark:text-slate-500">{index}</span>}
          <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
          {eyebrow}
        </p>
      </Reveal>
      <m.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-tight text-slate-900 dark:text-white"
      >
        <MaskedWords text={title} />
        {highlight && (
          <>
            {" "}
            <MaskedWords text={highlight} className="text-gradient accent" startIndex={titleWords} />
          </>
        )}
      </m.h2>
      {children && (
        <Reveal delay={0.25}>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">{children}</p>
        </Reveal>
      )}
    </div>
  );
}

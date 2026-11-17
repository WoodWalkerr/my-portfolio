import Reveal from "./Reveal";

export default function SectionHeading({ index, eyebrow, title, highlight, children, align = "left" }) {
  const center = align === "center";
  return (
    <div className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p
          className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300 ${
            center ? "justify-center" : ""
          }`}
        >
          {index && <span className="text-slate-400 dark:text-slate-500">{index}</span>}
          <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {children && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">{children}</p>
        </Reveal>
      )}
    </div>
  );
}

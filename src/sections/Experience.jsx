import { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { experiences } from "../data/experience";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading index="07" eyebrow="Career" title="Where I've" highlight="worked" />

        <ol ref={ref} className="relative ml-3 md:ml-6">
          {/* Track + line that draws itself as you scroll */}
          <span aria-hidden="true" className="absolute left-0 top-2 h-full w-px bg-slate-200 dark:bg-white/10" />
          <m.span
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute left-0 top-2 h-full w-px origin-top bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500"
          />

          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${exp.title}`} className="relative pb-12 pl-10 last:pb-0 md:pl-14">
              <Reveal x={-10} y={0} className="absolute -left-[7px] top-1.5">
                <span className="relative flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-cyan-400 bg-[#f6f7fb] dark:bg-ink-950">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>
              </Reveal>
              <Reveal delay={0.05 * i}>
                <div className="card spotlight group p-6 transition-colors duration-300 hover:border-cyan-400/40 md:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">{exp.title}</h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-300">
                      {exp.company}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{exp.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

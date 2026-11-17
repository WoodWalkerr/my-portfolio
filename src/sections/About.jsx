import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../components/ui/Reveal";
import Socials from "../components/ui/Socials";
import Magnetic from "../components/ui/Magnetic";
import { FiDownload } from "../components/ui/icons";
import profile from "../assets/media/profile.webp";

const traits = ["Curious learner", "Problem solver", "Teacher at heart", "Jack of all trades"];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="section">
      <div className="container-x grid items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
        {/* Portrait with spinning gradient ring + parallax */}
        <m.div style={{ y }} className="relative mx-auto w-full max-w-[340px]">
          <Reveal y={40}>
            <div className="relative aspect-square">
              <div className="absolute -inset-[3px] animate-spin-slow rounded-[2rem] bg-[conic-gradient(from_0deg,#22d3ee,#3b82f6,#8b5cf6,#22d3ee)] opacity-90" />
              <div className="absolute inset-0 overflow-hidden rounded-[1.9rem] bg-slate-200 dark:bg-ink-800">
                <img
                  src={profile}
                  alt="Portrait of Melven Bagolaque"
                  width="640"
                  height="680"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 animate-float rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-ink-800">
                <p className="text-xs text-slate-500 dark:text-slate-400">Working with</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">clients worldwide 🌏</p>
              </div>
            </div>
          </Reveal>
        </m.div>

        <div>
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
              <span className="text-slate-400 dark:text-slate-500">02</span>
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
              About me
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Hi, I&apos;m <span className="text-gradient">Melven Bagolaque</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I&apos;m a highly enthusiastic person who loves taking on new challenges and pushing my limits. I
              enjoy learning new skills and sharing my knowledge with others. I believe that being a jack of all
              trades and master of none is always better than being a master of one.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {traits.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition-colors hover:border-cyan-400/60 dark:border-white/10 dark:text-slate-300"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.32} className="mt-10 flex flex-wrap items-center gap-5">
            <Magnetic>
              <a href="/MELVEN-BAGOLAQUE-RESUME.pdf" target="_blank" rel="noreferrer" className="btn-primary">
                View my CV <FiDownload />
              </a>
            </Magnetic>
            <Socials />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

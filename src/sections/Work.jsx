import { useRef } from "react";
import { Link } from "react-router-dom";
import { m, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import Magnetic from "../components/ui/Magnetic";
import { FaGithub, FiArrowUpRight, FiGlobe } from "../components/ui/icons";
import { projects } from "../data/featuredProjects";
import { projects as all } from "../data/projects";

/**
 * One project in the sticky stack. Each card pins near the top of the screen
 * and shrinks/dims a little as the next card slides over it.
 */
function StackCard({ project, i, total, progress }) {
  const { title, description, image, techStack, link } = project;
  const isRepo = link?.includes("github.com");
  const targetScale = 1 - (total - 1 - i) * 0.05;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const dim = useTransform(progress, [i / total, 1], [0, i === total - 1 ? 0 : 0.35]);
  const imgScale = useTransform(progress, [i / total, (i + 1) / total], [1.12, 1]);

  return (
    <div className="sticky" style={{ top: `calc(6.5rem + ${i * 26}px)` }}>
      <m.a
        href={link}
        target="_blank"
        rel="noreferrer"
        data-cursor="View"
        style={{ scale }}
        className="group relative block origin-top overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-ink-900 dark:shadow-black/50"
      >
        <div className="grid md:grid-cols-[1.35fr_1fr]">
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-ink-800 md:aspect-auto md:min-h-[440px]">
            <m.img
              src={image}
              alt={`${title} screenshot`}
              width="1000"
              height="625"
              loading="lazy"
              decoding="async"
              style={{ scale: imgScale }}
              className="absolute inset-0 h-full w-full object-cover object-top transition-[filter] duration-700 group-hover:brightness-110"
            />
          </div>

          <div className="flex flex-col p-7 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-slate-400">
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {isRepo ? <FaGithub size={13} /> : <FiGlobe size={13} />}
                {isRepo ? "Source code" : "Live site"}
              </span>
            </div>
            <h3 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {title}
            </h3>
            <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px]">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {techStack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-semibold text-slate-900 dark:text-white">
              <span className="relative">
                {isRepo ? "View on GitHub" : "Visit website"}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-violet-500 transition-transform duration-500 group-hover:scale-x-100" />
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-900 text-white transition-transform duration-500 group-hover:rotate-45 dark:bg-white dark:text-ink-950">
                <FiArrowUpRight size={15} />
              </span>
            </span>
          </div>
        </div>
        {/* darken as later cards cover this one */}
        <m.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-ink-950" />
      </m.a>
    </div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="work" className="section">
      <div className="container-x">
        <SectionHeading index="01" eyebrow="Selected work" title="Featured" highlight="projects">
          A mix of client websites and full-stack apps — from WordPress e-commerce to React and Node.js
          products.
        </SectionHeading>

        <div ref={ref} className="flex flex-col gap-[14vh]">
          {projects.map((p, i) => (
            <StackCard key={p.title} project={p} i={i} total={projects.length} progress={scrollYProgress} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Magnetic>
            <Link to="/projects" className="btn-primary" data-cursor="Explore">
              View all {all.length} projects <FiArrowUpRight />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

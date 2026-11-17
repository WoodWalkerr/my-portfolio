import { m } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import SpotlightCard from "../components/ui/SpotlightCard";
import ScrollText from "../components/ui/ScrollText";
import CountUp from "../components/ui/CountUp";
import Socials from "../components/ui/Socials";
import { fadeUp, staggerParent } from "../components/ui/Reveal";
import { FiArrowUpRight } from "../components/ui/icons";
import profile from "../assets/media/profile.webp";
import { projects } from "../data/projects";
import { certificateData } from "../data/certificates";
import { testimonials } from "../data/testimonials";
import { experiences } from "../data/experience";
import { skills } from "../data/skills";

const bio =
  "I'm a highly enthusiastic person who loves taking on new challenges and pushing my limits. I enjoy learning new skills and sharing my knowledge with others. I believe that being a jack of all trades and master of none is always better than being a master of one.";

const toolbox = ["React", "Node JS", "Tailwind CSS", "WordPress", "PostgreSQL", "Figma", "JavaScript", "Python"];
const invertInDark = new Set(["Expressjs", "Github", "AWS"]);

const Tile = ({ className = "", children, ...rest }) => (
  <m.div variants={fadeUp} className={className} {...rest}>
    <SpotlightCard className="h-full p-6 sm:p-7">{children}</SpotlightCard>
  </m.div>
);

export default function About() {
  const current = experiences[0];
  const tools = toolbox.map((name) => skills.find((s) => s.skill === name)).filter(Boolean);

  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading index="02" eyebrow="About me" title="A little bit" highlight="about me" />

        <ScrollText
          text={bio}
          className="mb-16 max-w-5xl font-display text-[clamp(1.5rem,3.2vw,2.6rem)] font-semibold leading-[1.25] tracking-tight text-slate-900 dark:text-white"
        />

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerParent(0.08)}
          className="grid auto-rows-[minmax(0,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Portrait */}
          <m.div variants={fadeUp} className="sm:row-span-2">
            <div className="group relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
              <img
                src={profile}
                alt="Portrait of Melven Bagolaque"
                width="640"
                height="680"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent p-5 pt-20">
                <p className="text-lg font-semibold text-white">Melven Bagolaque</p>
                <p className="text-sm text-slate-300">Full-stack developer &amp; designer</p>
              </div>
            </div>
          </m.div>

          {/* Currently */}
          <Tile className="lg:col-span-2">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Currently
            </p>
            <p className="mt-5 font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {current.title} <span className="text-slate-400">@</span>{" "}
              <span className="text-gradient">{current.company}</span>
            </p>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {current.description}
            </p>
          </Tile>

          {/* Projects count */}
          <Tile>
            <p className="font-display text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              <CountUp to={projects.length} suffix="+" />
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Projects delivered for clients &amp; teams</p>
          </Tile>

          {/* Toolbox */}
          <Tile className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Daily toolbox
            </p>
            <ul className="mt-5 grid grid-cols-4 gap-3 sm:grid-cols-8 lg:grid-cols-8">
              {tools.map((t) => (
                <li
                  key={t.skill}
                  title={t.skill}
                  className="grid aspect-square place-items-center rounded-xl border border-slate-200 bg-slate-50 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                >
                  <img
                    src={t.img}
                    alt={t.skill}
                    width="26"
                    height="26"
                    loading="lazy"
                    className={`h-6 w-6 object-contain ${invertInDark.has(t.skill) ? "dark:invert" : ""}`}
                  />
                </li>
              ))}
            </ul>
          </Tile>

          {/* Certificates + clients */}
          <Tile>
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  <CountUp to={certificateData.length} />
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Certificates &amp; awards</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  <CountUp to={testimonials.length} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Happy clients</p>
              </div>
            </div>
          </Tile>

          {/* CV call to action */}
          <m.a
            variants={fadeUp}
            href="/MELVEN-BAGOLAQUE-RESUME.pdf"
            target="_blank"
            rel="noreferrer"
            data-cursor="Open"
            className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 p-6 text-white sm:col-span-2 lg:col-span-3 sm:p-7"
          >
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl transition-transform duration-700 group-hover:scale-150" />
            <p className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">Résumé</p>
            <div className="relative flex items-end justify-between gap-6">
              <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">View my CV</p>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-ink-950 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
                <FiArrowUpRight size={22} />
              </span>
            </div>
          </m.a>

          <Tile className="lg:col-span-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Find me on
            </p>
            <Socials className="mt-5" />
          </Tile>
        </m.div>
      </div>
    </section>
  );
}

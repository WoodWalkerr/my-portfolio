import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { skills } from "../data/skills";

// Monochrome logos that need inverting on a dark background
const invertInDark = new Set(["Expressjs", "Github", "AWS"]);

function Pill({ skill }) {
  return (
    <li className="card group flex shrink-0 items-center gap-3 rounded-2xl px-5 py-3.5 transition-colors duration-300 hover:border-cyan-400/50">
      <img
        src={skill.img}
        alt=""
        width="28"
        height="28"
        loading="lazy"
        decoding="async"
        className={`h-7 w-7 object-contain transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6 ${
          invertInDark.has(skill.skill) ? "dark:invert" : ""
        }`}
      />
      <span className="whitespace-nowrap text-sm font-medium text-slate-800 dark:text-slate-200">{skill.skill}</span>
    </li>
  );
}

function Row({ items, reverse }) {
  // Content is duplicated so the -50% translate loops seamlessly
  return (
    <div className="mask-fade-x group/row flex overflow-hidden py-2">
      <ul
        className={`flex w-max gap-4 pr-4 group-hover/row:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...items, ...items].map((s, i) => (
          <Pill key={`${s.skill}-${i}`} skill={s} />
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const half = Math.ceil(skills.length / 2);
  return (
    <section id="expertise" className="section overflow-hidden">
      <div className="container-x">
        <SectionHeading index="04" eyebrow="Tech stack" title="Tools I" highlight="work with" align="center">
          Technology stacks I&apos;m currently working with.
        </SectionHeading>
      </div>
      <Reveal className="space-y-4">
        <Row items={skills.slice(0, half)} />
        <Row items={skills.slice(half)} reverse />
      </Reveal>
      <p className="sr-only">{skills.map((s) => s.skill).join(", ")}</p>
    </section>
  );
}

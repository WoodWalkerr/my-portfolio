import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Magnetic from "../components/ui/Magnetic";
import Socials from "../components/ui/Socials";
import { EASE } from "../components/ui/Reveal";
import { FiArrowDown, FiArrowUpRight } from "../components/ui/icons";
import { projects } from "../data/projects";
import { certificateData } from "../data/certificates";
import { testimonials } from "../data/testimonials";
import CountUp from "../components/ui/CountUp";
import { INTRO_DELAY as D } from "../lib/intro";

const roles = ["Full-Stack Developer", "WordPress Specialist", "Web Designer", "Video Editor"];

const code = {
  js: {
    label: "person.js",
    lines: [
      ["k", "class "], ["t", "Person"], ["p", " {"], "\n",
      ["p", "  "], ["f", "constructor"], ["p", "(name, dateOfBirth = "], ["n", "1998"], ["p", ") {"], "\n",
      ["p", "    "], ["k", "this"], ["p", ".name = "], ["s", '"Melven Bagolaque"'], "\n",
      ["p", "    "], ["k", "this"], ["p", ".age = "], ["k", "new "], ["t", "Date"], ["p", "().getFullYear() - dateOfBirth"], "\n",
      ["p", "  }"], "\n",
      ["p", "}"],
    ],
  },
  py: {
    label: "person.py",
    lines: [
      ["k", "class "], ["t", "Person"], ["p", ":"], "\n",
      ["p", "  "], ["k", "def "], ["f", "__init__"], ["p", "(self, name, dateOfBirth="], ["n", "1998"], ["p", "):"], "\n",
      ["p", "    self.name = "], ["s", '"Melven Bagolaque"'], "\n",
      ["p", "    self.age = datetime.now().year - dateOfBirth"],
    ],
  },
};

const tokenClass = {
  k: "text-violet-500 dark:text-violet-400",
  t: "text-cyan-600 dark:text-cyan-300",
  f: "text-blue-600 dark:text-blue-400",
  s: "text-emerald-600 dark:text-emerald-400",
  n: "text-amber-600 dark:text-amber-300",
  p: "text-slate-700 dark:text-slate-300",
};

/** Cycles through words with a type / delete effect. */
function useTypewriter(words, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((n) => n + 1);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? erase : type
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, type, erase, hold]);

  return text;
}

const headline = ["Let's", "create", "something"];

export default function Hero() {
  const [lang, setLang] = useState("js");
  const role = useTypewriter(roles);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  // Group tokens into lines for numbered rendering
  const lines = code[lang].lines.reduce(
    (acc, tok) => {
      if (tok === "\n") acc.push([]);
      else acc[acc.length - 1].push(tok);
      return acc;
    },
    [[]]
  );

  const stats = [
    { value: projects.length, suffix: "+", label: "Projects shipped" },
    { value: certificateData.length, suffix: "", label: "Certificates" },
    { value: testimonials.length, suffix: "+", label: "Happy clients" },
  ];

  return (
    <section id="home" ref={sectionRef} className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32">
      <m.div
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]"
      >
        <div>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: D, ease: EASE }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance work
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: D + 0.1, ease: EASE }}
            className="mb-3 text-lg font-light text-slate-600 dark:text-slate-400"
          >
            Hi, I&apos;m <span className="font-semibold text-slate-900 dark:text-white">Melven Bagolaque</span> 👋
          </m.p>

          <h1 className="text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[1.02] tracking-tight text-slate-900 dark:text-white">
            {headline.map((word, i) => (
              <span key={word} className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom">
                <m.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: D + 0.2 + i * 0.1, ease: EASE }}
                >
                  {word}
                </m.span>
              </span>
            ))}
            <span className="inline-block overflow-hidden pb-2 align-bottom">
              <m.span
                className="text-gradient accent inline-block pr-[0.12em]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: D + 0.5, ease: EASE }}
              >
                amazing.
              </m.span>
            </span>
          </h1>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: D + 0.9, duration: 0.6 }}
            className="mt-6 h-8 font-mono text-base text-slate-600 dark:text-slate-300 sm:text-lg"
            aria-label={roles.join(", ")}
          >
            <span className="text-cyan-500">&gt;</span> {role}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-blink bg-cyan-500" />
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: D + 1, duration: 0.7, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link to="/projects" className="btn-primary">
                View my projects <FiArrowUpRight />
              </Link>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-ghost">
                Let&apos;s talk
              </a>
            </Magnetic>
            <Socials className="sm:ml-2" />
          </m.div>

          <m.dl
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: D + 1.15 } } }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-slate-200 pt-8 dark:border-white/10"
          >
            {stats.map((s) => (
              <m.div
                key={s.label}
                className="flex flex-col"
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              >
                <dt className="text-xs text-slate-500 dark:text-slate-400">{s.label}</dt>
                <dd className="order-first font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
              </m.div>
            ))}
          </m.dl>
        </div>

        {/* Code window */}
        <m.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: D + 0.5, ease: EASE }}
          className="relative hidden sm:block"
        >
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2">
            <div className="h-full w-full animate-[spin-slow_18s_linear_infinite] rounded-full bg-[conic-gradient(from_90deg,rgba(34,211,238,0.35),rgba(59,130,246,0.1),rgba(139,92,246,0.35),rgba(236,72,153,0.15),rgba(34,211,238,0.35))] opacity-70 blur-3xl dark:opacity-60" />
          </div>
          <div className="animate-float">
            <div className="card overflow-hidden !bg-white/90 shadow-2xl shadow-blue-900/10 dark:!bg-ink-900/90 dark:shadow-black/40">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-white/10">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex gap-1 rounded-full bg-slate-100 p-1 dark:bg-white/5" role="tablist">
                  {[
                    ["js", "JavaScript"],
                    ["py", "Python"],
                  ].map(([key, name]) => (
                    <button
                      key={key}
                      role="tab"
                      aria-selected={lang === key}
                      onClick={() => setLang(key)}
                      className={`relative rounded-full px-3 py-1 font-mono text-[11px] font-medium transition-colors ${
                        lang === key ? "text-slate-900 dark:text-white" : "text-slate-500"
                      }`}
                    >
                      {lang === key && (
                        <m.span
                          layoutId="code-tab"
                          className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm dark:bg-white/10"
                        />
                      )}
                      {name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="min-h-[220px] overflow-x-auto p-5 font-mono text-[13px] leading-7">
                <AnimatePresence mode="wait">
                  <m.pre
                    key={lang}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    variants={{ show: { transition: { staggerChildren: 0.07 } } }}
                  >
                    {lines.map((line, li) => (
                      <m.code
                        key={li}
                        className="block whitespace-pre"
                        variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                      >
                        <span className="mr-5 inline-block w-4 select-none text-right text-slate-400 dark:text-slate-600">
                          {li + 1}
                        </span>
                        {line.map(([k, v], ti) => (
                          <span key={ti} className={tokenClass[k]}>
                            {v}
                          </span>
                        ))}
                      </m.code>
                    ))}
                  </m.pre>
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 px-4 py-2 font-mono text-[11px] text-slate-500 dark:border-white/10">
                <span>{code[lang].label}</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> compiled successfully
                </span>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -left-8 bottom-10 animate-float [animation-delay:-2s]">
            <div className="card flex items-center gap-2 px-3 py-2 text-xs font-medium shadow-xl !bg-white dark:!bg-ink-800">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg" alt="" width="18" height="18" />
              React + Tailwind
            </div>
          </div>
          <div className="absolute -right-4 -top-6 animate-float [animation-delay:-4s]">
            <div className="card flex items-center gap-2 px-3 py-2 text-xs font-medium shadow-xl !bg-white dark:!bg-ink-800">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/wordpress/wordpress-plain.svg" alt="" width="18" height="18" className="dark:invert" />
              WordPress
            </div>
          </div>
        </m.div>
      </m.div>

      {/* Rotating circular badge */}
      <m.a
        href="#work"
        aria-label="Scroll to my work"
        data-cursor="Scroll"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: D + 1.3, duration: 0.8, ease: EASE }}
        className="group absolute bottom-8 right-6 hidden h-28 w-28 place-items-center md:grid lg:right-12"
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin-slow_14s_linear_infinite]">
          <defs>
            <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text className="fill-slate-500 font-mono text-[9.5px] uppercase tracking-[0.32em] dark:fill-slate-400">
            <textPath href="#badge-circle">Available for work • Scroll down •</textPath>
          </text>
        </svg>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-lg shadow-blue-500/30 transition-transform duration-500 group-hover:scale-110">
          <FiArrowDown />
        </span>
      </m.a>
    </section>
  );
}

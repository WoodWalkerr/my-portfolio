import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { links } from "../data/navbar";
import ThemeToggle from "./ui/ThemeToggle";
import Socials from "./ui/Socials";
import { FiMenu, FiX } from "./ui/icons";

/** Tracks which section is currently in the middle of the viewport. */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const ids = links.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <m.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${
          scrolled
            ? "border-slate-200/80 bg-white/75 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-ink-900/70 dark:shadow-black/30"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#home" className="group flex items-center gap-2 pl-2 text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm text-white transition-transform duration-500 group-hover:rotate-[360deg]">
            M
          </span>
          <span>
            MELVEN<span className="text-cyan-500">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === id
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {active === id && (
                  <m.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-slate-900/[0.06] dark:bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </m.nav>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, clipPath: "circle(0% at 92% 4%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 92% 4%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 -z-10 flex flex-col justify-between bg-[#f6f7fb] px-8 pb-10 pt-28 dark:bg-ink-950 md:hidden"
          >
            <m.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
              className="space-y-2"
            >
              {links.map(({ id, label }, i) => (
                <m.li
                  key={id}
                  variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
                  >
                    <span className="font-mono text-xs text-cyan-500">0{i + 1}</span>
                    {label}
                  </a>
                </m.li>
              ))}
            </m.ul>
            <Socials />
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}

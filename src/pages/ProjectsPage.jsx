import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, m } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ThemeToggle from "../components/ui/ThemeToggle";
import Footer from "../components/Footer";
import { EASE } from "../components/ui/Reveal";
import { FiArrowLeft } from "../components/ui/icons";
import { projects } from "../data/projects";

const CMS = ["WordPress", "Wix", "Squarespace", "Namesco", "Elementor"];
const filters = [
  { key: "all", label: "All", test: () => true },
  { key: "apps", label: "Web apps", test: (p) => !p.techStack.some((t) => CMS.includes(t)) },
  { key: "cms", label: "Client websites", test: (p) => p.techStack.some((t) => CMS.includes(t)) },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const shown = useMemo(() => projects.filter(filters.find((f) => f.key === filter).test), [filter]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Projects — Melven Bagolaque";
    return () => {
      document.title = "Melven Bagolaque — Full-Stack Developer & Web Designer";
    };
  }, []);

  return (
    <>
      <header className="container-x flex items-center justify-between pt-6">
        <Link to="/" className="btn-ghost !px-4 !py-2">
          <FiArrowLeft /> Back home
        </Link>
        <ThemeToggle />
      </header>

      <main className="container-x pb-24 pt-16">
        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300"
        >
          Portfolio · {projects.length} projects
        </m.p>
        <h1 className="overflow-hidden text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl">
          <m.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            All <span className="text-gradient">projects</span>
          </m.span>
        </h1>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.key
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {filter === f.key && (
                <m.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {f.label}
            </button>
          ))}
        </div>

        <m.div layout className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <m.div
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.05, ease: EASE }}
              >
                <ProjectCard project={p} priority={i < 2} />
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </main>
      <Footer />
    </>
  );
}

import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FiArrowUpRight, FiGlobe } from "./ui/icons";

/** Project card with a subtle 3D tilt that follows the cursor. */
export default function ProjectCard({ project, priority = false }) {
  const { title, description, image, techStack, link } = project;
  const isRepo = link?.includes("github.com");

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-5, 5]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <m.a
      href={link}
      target="_blank"
      rel="noreferrer"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="card spotlight group flex h-full flex-col p-3 transition-colors duration-300 hover:border-cyan-400/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-200 dark:bg-ink-800">
        <img
          src={image}
          alt={`${title} screenshot`}
          width="1000"
          height="625"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute right-3 top-3 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white text-ink-950 opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <FiArrowUpRight size={18} />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">{title}</h3>
          <span className="mt-1 flex shrink-0 items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {isRepo ? <FaGithub size={13} /> : <FiGlobe size={13} />}
            {isRepo ? "Source" : "Live"}
          </span>
        </div>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {techStack.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </m.a>
  );
}

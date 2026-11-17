import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import { fadeUp, staggerParent } from "../components/ui/Reveal";
import { FiAward, FiMaximize2, FiX } from "../components/ui/icons";
import { certificateData } from "../data/certificates";

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="certificates" className="section">
      <div className="container-x">
        <SectionHeading index="05" eyebrow="Recognition" title="Certificates &" highlight="awards" />

        <m.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerParent(0.08)}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certificateData.map((c) => (
            <m.li key={c.id} variants={fadeUp}>
              <button
                type="button"
                onClick={() => setSelected(c)}
                className="card spotlight group block h-full w-full p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 dark:bg-ink-800">
                  <img
                    src={c.image}
                    alt={c.title}
                    width="1400"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-ink-950/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <FiMaximize2 size={22} />
                  </span>
                </div>
                <div className="flex gap-3 p-3 pt-4">
                  <FiAward className="mt-1 shrink-0 text-cyan-500" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{c.description}</p>
                  </div>
                </div>
              </button>
            </m.li>
          ))}
        </m.ul>
      </div>

      <AnimatePresence>
        {selected && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink-950/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <m.div
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl dark:bg-ink-900"
            >
              <img src={selected.image} alt={selected.title} className="max-h-[70vh] w-full object-contain" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{selected.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{selected.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                autoFocus
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink-950/70 text-white transition hover:bg-ink-950"
              >
                <FiX />
              </button>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}

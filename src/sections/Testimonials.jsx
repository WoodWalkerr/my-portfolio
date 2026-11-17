import { m } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import SpotlightCard from "../components/ui/SpotlightCard";
import { fadeUp, staggerParent } from "../components/ui/Reveal";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-x">
        <SectionHeading index="06" eyebrow="Testimonials" title="What clients" highlight="say" align="center" />

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerParent(0.12)}
          className="grid gap-6 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <m.figure key={t.name} variants={fadeUp} className="h-full">
              <SpotlightCard className="flex h-full flex-col p-7 transition-transform duration-500 hover:-translate-y-1">
                <span aria-hidden="true" className="text-gradient font-serif text-6xl leading-none">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                  {t.quote.trim()}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-slate-200 pt-5 dark:border-white/10">
                  <img
                    src={t.image}
                    alt=""
                    width="48"
                    height="48"
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-cyan-400/50 ring-offset-2 ring-offset-white dark:ring-offset-ink-900"
                  />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.position}</p>
                  </div>
                </figcaption>
              </SpotlightCard>
            </m.figure>
          ))}
        </m.div>
      </div>
    </section>
  );
}

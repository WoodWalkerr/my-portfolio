import { m } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import SpotlightCard from "../components/ui/SpotlightCard";
import LazyVideo from "../components/ui/LazyVideo";
import { fadeUp, staggerParent } from "../components/ui/Reveal";
import { FaCode, FaDatabase, FaPaintRoller, FaPhotoVideo } from "../components/ui/icons";

import feWebm from "../assets/media/frontend.webm";
import feMp4 from "../assets/media/frontend.mp4";
import fePoster from "../assets/media/frontend-poster.webp";
import beWebm from "../assets/media/backend.webm";
import beMp4 from "../assets/media/backend.mp4";
import bePoster from "../assets/media/backend-poster.webp";
import dbWebm from "../assets/media/database.webm";
import dbMp4 from "../assets/media/database.mp4";
import dbPoster from "../assets/media/database-poster.webp";
import veWebm from "../assets/media/videoediting.webm";
import veMp4 from "../assets/media/videoediting.mp4";
import vePoster from "../assets/media/videoediting-poster.webp";

const services = [
  {
    icon: FaPaintRoller,
    title: "Web Design",
    text: "Modern, responsive websites built with HTML, CSS, JavaScript and especially React and Tailwind CSS.",
    video: { webm: feWebm, mp4: feMp4, poster: fePoster },
    tags: ["React", "Tailwind", "WordPress"],
  },
  {
    icon: FaCode,
    title: "Back-end Programming",
    text: "Dynamic web apps and REST APIs powered by Node.js and Express.",
    video: { webm: beWebm, mp4: beMp4, poster: bePoster },
    tags: ["Node.js", "Express", "APIs"],
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    text: "Reliable data models and database management using PostgreSQL and MongoDB.",
    video: { webm: dbWebm, mp4: dbMp4, poster: dbPoster },
    tags: ["PostgreSQL", "MongoDB"],
  },
  {
    icon: FaPhotoVideo,
    title: "Graphic Design & Video",
    text: "Eye-catching graphics and edited videos for brands and social media.",
    video: { webm: veWebm, mp4: veMp4, poster: vePoster },
    tags: ["Canva", "Figma", "Editing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <SectionHeading index="03" eyebrow="Services" title="What I" highlight="do">
          End-to-end help, from the first sketch to a live, fast website.
        </SectionHeading>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerParent(0.1)}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map(({ icon: Icon, title, text, video, tags }, i) => (
            <m.div key={title} variants={fadeUp}>
              <SpotlightCard className="group h-full p-3 transition-colors duration-300 hover:border-cyan-400/40">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-200 dark:bg-ink-800">
                  <LazyVideo
                    {...video}
                    label={`${title} animation`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink-950/70 px-2.5 py-1 font-mono text-[10px] text-white">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-4 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-600 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 dark:text-cyan-300">
                      <Icon size={16} />
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">{title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { m } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Magnetic from "../components/ui/Magnetic";
import { fadeUp, staggerParent } from "../components/ui/Reveal";
import { FiArrowUpRight } from "../components/ui/icons";
import { projects } from "../data/featuredProjects";
import { projects as all } from "../data/projects";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading index="01" eyebrow="Selected work" title="Featured" highlight="projects">
            A mix of client websites and full-stack apps — from WordPress e-commerce to React and Node.js
            products.
          </SectionHeading>
        </div>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerParent(0.12)}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((p) => (
            <m.div key={p.title} variants={fadeUp}>
              <ProjectCard project={p} />
            </m.div>
          ))}
        </m.div>

        <div className="mt-12 flex justify-center">
          <Magnetic>
            <Link to="/projects" className="btn-ghost">
              View all {all.length} projects <FiArrowUpRight />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

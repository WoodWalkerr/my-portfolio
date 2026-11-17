import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import Work from "../sections/Work";
import About from "../sections/About";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import Certificates from "../sections/Certificates";
import Testimonials from "../sections/Testimonials";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import VelocityMarquee from "../components/ui/VelocityMarquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VelocityMarquee items={["Web Design", "Development", "WordPress", "E-commerce", "Video Editing"]} />
        <Work />
        <About />
        <Services />
        <Skills />
        <Certificates />
        <Testimonials />
        <Experience />
        <VelocityMarquee items={["Let's work together", "Say hello"]} baseVelocity={2} outline className="mt-8" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

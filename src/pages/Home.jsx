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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Services />
        <Skills />
        <Certificates />
        <Testimonials />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

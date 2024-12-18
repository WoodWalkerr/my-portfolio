import Splash from "../components/Splash";
import Projects from "../components/FeaturedProjects";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import Contact from "../components/Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ThemeProvider } from "../themeTemp/themeContext";
import Certificates from "../components/Certificates";
import Testimonials from "../components/Testimonials";

function Dashboard() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black transition-all">
        <Navbar />
        <Splash />
        <Projects />
        <About />
        <Certificates />
        <Services />
        <Skills />
        <Testimonials />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Dashboard;

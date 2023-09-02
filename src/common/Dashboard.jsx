import Splash from "../components/Splash";
import Projects from "../components/FeaturedProjects";
import About from "../components/About";
import AboutSkills from "../components/Services";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import Contact from "../components/Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ThemeProvider } from "../themeTemp/themeContext";

function Dashboard() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black transition-all">
        <Navbar />
        <Splash />
        <Projects />
        <About />
        <AboutSkills />
        <Skills />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Dashboard;

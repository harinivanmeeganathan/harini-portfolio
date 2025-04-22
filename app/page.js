// app/page.js

import Navbar from "../components/Navbar";
import HomeHero from "../components/Homepage";
import About from "../components/About";
import Projects from "../components/Projects"; 
import Contact from "../components/Contact";   
import BackToTop from "../components/BackToTop";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import Certifications from "../components/Certifications";
import Gallery from "../components/Gallery";


export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />

      <section id="home" className="pt-14">
        <HomeHero />
      </section>

      <section id="about" className="pt-18">
        <About />
      </section>

      <section id="education" className="pt-18">
        <Education />
      </section>

      <section id="experience" className="pt-18">
        <WorkExperience />
      </section>

      <section id="projects" className="pt-18">
        <Projects />
      </section>

      <section id="certifications" className="pt-18">
        <Certifications />
      </section>

      <section id="gallery" className="pt-18">
        <Gallery />
      </section>

      <section id="contact" className="pt-18">
        <Contact />
      </section>

      <BackToTop />
    </main>
  );
}

import { useReveal } from '@/hooks/useReveal';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import SkillsMarquee from '@/components/SkillsMarquee';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-ink-950">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <SkillsMarquee />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

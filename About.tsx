import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import CyberJourney from './sections/CyberJourney';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CyberJourney />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

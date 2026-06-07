import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import gsap from 'gsap';

const phrases = [
  'CS Student',
  'Full Stack Developer',
  'AI & ML Enthusiast',
  'Cyber Security Learner',
  'Open Source Contributor',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wait, setWait] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (wait > 0) {
      const timer = setTimeout(() => setWait((w) => w - 1), 80);
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      const timer = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentPhrase.length) {
          setIsDeleting(true);
          setWait(20);
        }
      }, 80);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((pi) => (pi + 1) % phrases.length);
          setWait(5);
        }
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [displayText, phraseIndex, isDeleting, wait]);

  // GSAP entrance animation
  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )
        .fromTo(
          '.hero-name',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-role-wrap',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-location',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.2'
        );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center justify-center text-center pt-16"
      style={{ maxWidth: '100%' }}
    >
      <div ref={contentRef} className="max-w-[800px] mx-auto px-6">
        <div className="hero-badge opacity-0 inline-block font-['JetBrains_Mono'] text-xs tracking-[2px] text-[#00d084] border border-[rgba(0,208,132,0.3)] px-4 py-1.5 rounded-full mb-8 bg-[rgba(0,208,132,0.05)]">
          AVAILABLE FOR INTERNSHIPS & PROJECTS
        </div>

        <h1
          className="hero-name opacity-0 font-['Space_Grotesk'] font-extrabold leading-[1.05] tracking-[-2px] mb-6"
          style={{
            fontSize: 'clamp(3rem, 9vw, 6rem)',
            background: 'linear-gradient(135deg, #fff 0%, #00e5e0 50%, #00d084 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          BABLU
          <br />
          CHAUDHARY
        </h1>

        <p className="hero-role-wrap opacity-0 font-['JetBrains_Mono'] text-[clamp(0.9rem,2.5vw,1.2rem)] text-[#64748b] mb-4 min-h-[2rem]">
          <span className="text-[#64748b]">&gt; </span>
          <span id="typed-text" className="text-[#00e5e0] drop-shadow-[0_0_12px_rgba(0,229,224,0.4)]">
            {displayText}
          </span>
          <span className="inline-block w-[2px] h-[1.2em] bg-[#00e5e0] ml-1 align-text-bottom animate-pulse drop-shadow-[0_0_6px_rgba(0,229,224,0.6)]" />
        </p>

        <p className="hero-location opacity-0 font-['JetBrains_Mono'] text-sm text-[#64748b] mb-10">
          <span className="text-[#00d084]">📍</span> India{' '}
          <span className="text-[#3d4f6a] mx-2">•</span>
          <span className="text-[#00d084]">@</span> bablu-builds
        </p>

        <div className="hero-cta opacity-0 flex gap-4 justify-center flex-wrap">
          <button
            onClick={scrollToProjects}
            className="font-['JetBrains_Mono'] text-sm tracking-[1px] px-8 py-3 rounded-lg font-bold border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,229,224,0.4)]"
            style={{
              background: 'linear-gradient(135deg, #00e5e0, #00d084)',
              color: '#030712',
            }}
          >
            View Projects
          </button>
          <a
            href="https://github.com/bablu-builds"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['JetBrains_Mono'] text-sm tracking-[1px] px-8 py-3 rounded-lg border border-[#00e5e0] text-[#00e5e0] bg-transparent transition-all duration-300 hover:bg-[rgba(0,229,224,0.1)] hover:shadow-[0_0_20px_rgba(0,229,224,0.2)] hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '10+', label: 'Projects Built' },
  { number: '5+', label: 'Technologies' },
  { number: '1', label: 'GitHub Profile' },
  { number: '∞', label: 'Curiosity' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Text reveal
      gsap.fromTo(
        '.about-text p',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      );

      // Stats cards stagger
      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 75%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 py-24 px-6 border-t border-[rgba(0,229,224,0.12)]"
    >
      <div className="max-w-[1100px] mx-auto">
        <p
          className="font-['Space_Grotesk'] font-bold tracking-[1px] mb-2"
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            color: '#00e5e0',
            textShadow: '0 0 20px rgba(0,229,224,0.3)',
          }}
        >
          About Me
        </p>
        <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00e5e0] to-[#00d084] rounded-sm mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="about-text space-y-5">
            <p className="text-[0.95rem] leading-[1.8] text-[#64748b]">
              Hey! I'm <strong className="text-[#00e5e0] font-semibold">Bablu Chaudhary</strong>, a passionate
              Computer Science student from India with a deep love for building things that matter. I thrive at
              the intersection of <strong className="text-[#00e5e0] font-semibold">AI/ML</strong>,{' '}
              <strong className="text-[#00e5e0] font-semibold">Full Stack Development</strong>, and{' '}
              <strong className="text-[#00e5e0] font-semibold">Cyber Security</strong>.
            </p>
            <p className="text-[0.95rem] leading-[1.8] text-[#64748b]">
              I believe in learning by doing — every project I build teaches me something new. Whether it's
              training a neural network, crafting a responsive web app, or exploring network vulnerabilities in a
              lab environment, I'm always pushing my limits.
            </p>
            <p className="text-[0.95rem] leading-[1.8] text-[#64748b]">
              When I'm not coding, you'll find me on GitHub exploring open source, going deep into CTF
              challenges, or reading about the latest in AI research.
            </p>
          </div>

          <div className="about-stats grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-card bg-[#0d1220] border border-[rgba(0,229,224,0.12)] rounded-2xl p-6 text-center transition-all duration-300 hover:border-[rgba(0,229,224,0.35)] hover:shadow-[0_0_30px_rgba(0,229,224,0.1)] hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00e5e0] to-[#00d084]" />
                <div
                  className="font-['Space_Grotesk'] text-[2rem] font-bold text-[#00e5e0] drop-shadow-[0_0_12px_rgba(0,229,224,0.3)] group-hover:scale-110 transition-transform duration-300"
                >
                  {stat.number}
                </div>
                <div className="font-['JetBrains_Mono'] text-xs text-[#64748b] mt-1 tracking-[1px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

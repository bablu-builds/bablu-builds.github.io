import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const terminalLines = [
  { prompt: 'bablu@dev', cmd: '~', out: 'Bablu Chaudhary — CS Student | AI & Full Stack Dev | Cyber Security Enthusiast', type: 'cmd' },
  { prompt: 'bablu@dev', cmd: '~', out: 'India', type: 'env' },
  { prompt: 'bablu@dev', cmd: '~', out: '["AI/ML", "Full Stack", "Cyber Security", "Open Source"]', type: 'cmd' },
  { prompt: 'bablu@dev', cmd: '~', out: 'Open to opportunities ✓', type: 'status' },
];

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/bablu-builds',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter,
  },
  {
    label: 'Email',
    href: 'mailto:contact@bablu.dev',
    icon: Mail,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedChars, setTypedChars] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-cards',
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Terminal typing animation
      ScrollTrigger.create({
        trigger: '.terminal-block',
        start: 'top 80%',
        once: true,
        onEnter: () => {
          let lineIndex = 0;
          const typeNextLine = () => {
            if (lineIndex >= terminalLines.length) return;
            setVisibleLines(lineIndex + 1);
            const line = terminalLines[lineIndex];
            let charIndex = 0;
            const typeChars = () => {
              if (charIndex <= line.out.length) {
                setTypedChars((prev) => {
                  const next = [...prev];
                  next[lineIndex] = charIndex;
                  return next;
                });
                charIndex++;
                setTimeout(typeChars, 15);
              } else {
                lineIndex++;
                setTimeout(typeNextLine, 300);
              }
            };
            typeChars();
          };
          typeNextLine();
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
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
          Contact
        </p>
        <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00e5e0] to-[#00d084] rounded-sm mb-14" />

        <div className="max-w-[650px] mx-auto text-center">
          <p className="text-[0.95rem] leading-[1.8] text-[#64748b] mb-10">
            I'm always open to new opportunities, collaborations, or just a good tech conversation.
            Feel free to reach out through any of the channels below.
          </p>

          {/* Contact cards */}
          <div className="contact-cards flex gap-4 justify-center flex-wrap mb-10">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card bg-[#0d1220] border border-[rgba(0,229,224,0.12)] rounded-xl px-6 py-4 flex items-center gap-3 text-[#e8ecf1] transition-all duration-300 hover:border-[rgba(0,229,224,0.35)] hover:shadow-[0_0_20px_rgba(0,229,224,0.15)] hover:-translate-y-0.5 hover:text-[#00e5e0]"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-['JetBrains_Mono'] text-[0.85rem] tracking-[1px]">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Terminal block */}
          <div className="terminal-block bg-[rgba(0,0,0,0.4)] border border-[rgba(0,229,224,0.15)] rounded-lg p-6 text-left font-['JetBrains_Mono'] text-[0.82rem] leading-[2.2]">
            {terminalLines.map((line, i) => (
              <div
                key={i}
                style={{
                  opacity: i < visibleLines ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <div>
                  <span className="text-[#00d084]">{line.prompt}</span>:
                  <span className="text-[#00e5e0]">{line.cmd}</span>${' '}
                  {i === 0 && 'whoami'}
                  {i === 1 && 'echo $LOCATION'}
                  {i === 2 && 'cat interests.txt'}
                  {i === 3 && 'echo $STATUS'}
                </div>
                <div
                  className={`${
                    line.type === 'status' ? 'text-[#00d084]' : 'text-[#e8ecf1]'
                  }`}
                >
                  {line.out.slice(0, typedChars[i])}
                  {i === visibleLines - 1 && (
                    <span className="inline-block w-[8px] h-[15px] bg-[#00e5e0] ml-1 align-middle animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

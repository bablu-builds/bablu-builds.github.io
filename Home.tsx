import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const roadmapItems = [
  {
    phase: 'Phase 01 — Foundation',
    title: 'Linux & Networking Basics',
    description:
      'Learned the Linux command line, file system, permissions, and basic shell scripting. Studied OSI model, TCP/IP, DNS, and network protocols.',
    status: 'Completed',
    statusClass: 'bg-[rgba(0,208,132,0.1)] text-[#00d084] border border-[rgba(0,208,132,0.3)]',
    dotClass: 'border-[#00d084] shadow-[0_0_12px_rgba(0,208,132,0.4)]',
    dotHover: 'group-hover:bg-[#00d084]',
  },
  {
    phase: 'Phase 02 — Current',
    title: 'Network Security & Ethical Hacking',
    description:
      'Actively studying network security fundamentals, exploring tools like Nmap and Wireshark. Practicing on TryHackMe and working through ethical hacking resources.',
    status: 'In Progress',
    statusClass: 'bg-[rgba(0,229,224,0.1)] text-[#00e5e0] border border-[rgba(0,229,224,0.3)]',
    dotClass: 'border-[#00e5e0] bg-[rgba(0,229,224,0.2)] shadow-[0_0_12px_rgba(0,229,224,0.4)]',
    dotHover: 'group-hover:bg-[#00e5e0]',
  },
  {
    phase: 'Phase 03 — Next',
    title: 'Web Application Security',
    description:
      'Planning to dive into OWASP Top 10, SQL injection, XSS, and secure coding practices. Will practice on HackTheBox and complete OWASP WebGoat labs.',
    status: 'Planned',
    statusClass: 'bg-[rgba(139,92,246,0.1)] text-[#a78bfa] border border-[rgba(139,92,246,0.3)]',
    dotClass: 'border-[#8b5cf6] shadow-[0_0_12px_rgba(139,92,246,0.5)]',
    dotHover: 'group-hover:bg-[#8b5cf6]',
  },
  {
    phase: 'Phase 04 — Future',
    title: 'Penetration Testing & Certification',
    description:
      'Goal: Complete CEH or OSCP certification, participate in bug bounty programs, and build a security research blog documenting my findings.',
    status: 'Future Goal',
    statusClass: 'bg-[rgba(139,92,246,0.1)] text-[#a78bfa] border border-[rgba(139,92,246,0.3)]',
    dotClass: 'border-[#8b5cf6] shadow-[0_0_12px_rgba(139,92,246,0.5)]',
    dotHover: 'group-hover:bg-[#8b5cf6]',
  },
  {
    phase: 'Phase 05 — Long Term',
    title: 'AI-Powered Security Tools',
    description:
      'Combine my AI/ML background with cyber security to build intelligent threat detection systems and automated vulnerability scanners.',
    status: 'Vision',
    statusClass: 'bg-[rgba(139,92,246,0.1)] text-[#a78bfa] border border-[rgba(139,92,246,0.3)]',
    dotClass: 'border-[#8b5cf6] shadow-[0_0_12px_rgba(139,92,246,0.5)]',
    dotHover: 'group-hover:bg-[#8b5cf6]',
  },
];

const statusIcons: Record<string, string> = {
  Completed: '✓',
  'In Progress': '●',
  Planned: '◇',
  'Future Goal': '◇',
  Vision: '◇',
};

export default function CyberJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.roadmap-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.roadmap',
            start: 'top 70%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cyber"
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
          Cyber Security Journey
        </p>
        <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00e5e0] to-[#00d084] rounded-sm mb-14" />

        <div className="roadmap relative pl-10">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2.5 bottom-2.5 w-[2px]"
            style={{
              background: 'linear-gradient(180deg, #00e5e0, #00d084, #8b5cf6)',
            }}
          />

          {roadmapItems.map((item, i) => (
            <div key={i} className="roadmap-item group relative mb-10 last:mb-0">
              {/* Dot */}
              <div
                className={`absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full border-2 bg-[#030712] transition-all duration-300 group-hover:scale-[1.3] ${item.dotClass} ${item.dotHover}`}
              />

              <p className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[2px] text-[#64748b] uppercase mb-1">
                {item.phase}
              </p>
              <h3 className="font-['Space_Grotesk'] text-[1rem] font-bold text-[#e8ecf1] mb-2">
                {item.title}
              </h3>
              <p className="text-[0.875rem] text-[#64748b] leading-[1.7]">
                {item.description}
              </p>
              <span
                className={`inline-block font-['JetBrains_Mono'] text-[0.68rem] px-3 py-1 rounded-full mt-3 ${item.statusClass}`}
              >
                {statusIcons[item.status]} {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

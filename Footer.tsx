import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: '< Languages />',
    color: 'cyan',
    skills: [
      { name: 'Python', pct: 85 },
      { name: 'HTML', pct: 90 },
      { name: 'CSS', pct: 80 },
      { name: 'JavaScript', pct: 75 },
    ],
  },
  {
    title: '# Tools',
    color: 'green',
    skills: [
      { name: 'Git', pct: 80 },
      { name: 'GitHub', pct: 85 },
      { name: 'VS Code', pct: 90 },
    ],
  },
  {
    title: '~ AI / ML',
    color: 'purple',
    skills: [
      { name: 'TensorFlow', pct: 65 },
      { name: 'OpenAI APIs', pct: 70 },
    ],
  },
  {
    title: '$ Cyber Security',
    color: 'red',
    skills: [
      { name: 'Network Security', pct: 40 },
      { name: 'Linux', pct: 55 },
      { name: 'Ethical Hacking', pct: 30 },
    ],
    tags: ['Learning', 'CTF Practice', 'TryHackMe'],
  },
];

const fillColors: Record<string, string> = {
  cyan: 'bg-gradient-to-r from-[#00e5e0] to-[#0af]',
  green: 'bg-gradient-to-r from-[#00d084] to-[#0f0]',
  purple: 'bg-gradient-to-r from-[#8b5cf6] to-[#c084fc]',
  red: 'bg-gradient-to-r from-[#f43f5e] to-[#fb7185]',
};

const titleColors: Record<string, string> = {
  cyan: 'text-[#00e5e0]',
  green: 'text-[#00d084]',
  purple: 'text-[#8b5cf6]',
  red: 'text-[#f43f5e]',
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Cards stagger
      gsap.fromTo(
        '.skill-category',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 75%',
            once: true,
          },
        }
      );

      // Skill bars animate when visible
      ScrollTrigger.create({
        trigger: '.skills-grid',
        start: 'top 70%',
        once: true,
        onEnter: () => {
          document.querySelectorAll('.skill-fill').forEach((bar) => {
            const target = (bar as HTMLElement).dataset.w;
            gsap.to(bar, {
              width: `${target}%`,
              duration: 1.2,
              ease: 'power2.out',
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
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
          Skills
        </p>
        <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00e5e0] to-[#00d084] rounded-sm mb-14" />

        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <div
              key={ci}
              className="skill-category bg-[#0d1220] border border-[rgba(0,229,224,0.12)] rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(0,229,224,0.25)] hover:shadow-[0_0_30px_rgba(0,229,224,0.06)]"
            >
              <p
                className={`font-['JetBrains_Mono'] text-[0.8rem] font-bold tracking-[2px] mb-5 uppercase ${titleColors[cat.color]}`}
              >
                {cat.title}
              </p>

              {cat.color === 'red' && (
                <p className="font-['JetBrains_Mono'] text-[0.78rem] text-[#64748b] mb-4">
                  // Learning in progress...
                </p>
              )}

              {cat.skills.map((skill, si) => (
                <div key={si} className="mb-4 last:mb-0">
                  <div className="flex justify-between mb-1.5">
                    <span className="font-['JetBrains_Mono'] text-[0.82rem] text-[#e8ecf1]">
                      {skill.name}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[0.78rem] text-[#00e5e0]">
                      {skill.pct}%
                    </span>
                  </div>
                  <div className="h-[6px] bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
                    <div
                      className={`skill-fill h-full rounded-full ${fillColors[cat.color]}`}
                      data-w={skill.pct}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}

              {cat.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="font-['JetBrains_Mono'] text-[0.72rem] px-3 py-1 rounded-full border border-[rgba(244,63,94,0.3)] text-[#fb7185] bg-[rgba(244,63,94,0.07)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

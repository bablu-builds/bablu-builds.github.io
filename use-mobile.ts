import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: '// PROJECT_01',
    title: 'AI Chat Assistant',
    description:
      'A conversational AI web app powered by the OpenAI API. Features context-aware responses, chat history, and a clean terminal-inspired UI.',
    image: '/images/project-1.jpg',
    tags: ['Python', 'OpenAI', 'Flask', 'JavaScript'],
    link: 'https://github.com/bablu-builds',
  },
  {
    number: '// PROJECT_02',
    title: 'Cyber Toolkit Dashboard',
    description:
      'A web-based security toolkit featuring port scanning visualization, network analysis tools, and educational resources for ethical hacking beginners.',
    image: '/images/project-2.jpg',
    tags: ['HTML/CSS', 'JavaScript', 'Python', 'Security'],
    link: 'https://github.com/bablu-builds',
  },
  {
    number: '// PROJECT_03',
    title: 'ML Image Classifier',
    description:
      'A deep learning model built with TensorFlow to classify images with high accuracy. Includes a web interface for real-time predictions via drag-and-drop.',
    image: '/images/project-3.jpg',
    tags: ['TensorFlow', 'Python', 'CNN', 'Flask'],
    link: 'https://github.com/bablu-builds',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
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
      id="projects"
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
          Projects
        </p>
        <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00e5e0] to-[#00d084] rounded-sm mb-14" />

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card group bg-[#0d1220] border border-[rgba(0,229,224,0.12)] rounded-2xl overflow-hidden transition-all duration-400 hover:border-[rgba(0,229,224,0.35)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(0,229,224,0.1)] hover:-translate-y-1.5 relative"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[180px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1220] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <p className="font-['Orbitron',monospace] text-[0.7rem] text-[#64748b] tracking-[2px] mb-3">
                  {project.number}
                </p>
                <h3 className="font-['Space_Grotesk'] text-[1.1rem] font-bold text-[#e8ecf1] mb-3 group-hover:text-[#00e5e0] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[0.875rem] text-[#64748b] leading-[1.7] mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="font-['JetBrains_Mono'] text-[0.7rem] px-2.5 py-1 rounded bg-[rgba(0,229,224,0.08)] text-[#00e5e0] border border-[rgba(0,229,224,0.15)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['JetBrains_Mono'] text-[0.8rem] text-[#00d084] inline-flex items-center gap-1.5 transition-all duration-300 hover:text-[#00e5e0] hover:gap-2.5 hover:drop-shadow-[0_0_8px_rgba(0,229,224,0.4)]"
                >
                  View on GitHub
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

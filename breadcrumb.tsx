import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#cyber', label: 'Cyber' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';
      sections.forEach((s) => {
        const section = s as HTMLElement;
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(3,7,18,0.9)] backdrop-blur-[20px] border-b border-[rgba(0,229,224,0.12)]'
            : 'bg-transparent'
        }`}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="font-['Space_Grotesk'] font-bold text-lg tracking-[2px] text-[#00e5e0] hover:drop-shadow-[0_0_12px_rgba(0,229,224,0.5)] transition-all duration-300"
        >
          BB
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-['JetBrains_Mono'] text-[0.8rem] tracking-[1px] transition-all duration-300 hover:text-[#00e5e0] hover:drop-shadow-[0_0_8px_rgba(0,229,224,0.4)]"
                style={{
                  color: activeSection === link.href.slice(1) ? '#00e5e0' : '#64748b',
                  textShadow:
                    activeSection === link.href.slice(1)
                      ? '0 0 12px rgba(0,229,224,0.4)'
                      : 'none',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#00e5e0]" />
          ) : (
            <>
              <span className="w-6 h-[2px] bg-[#00e5e0] rounded-sm" />
              <span className="w-6 h-[2px] bg-[#00e5e0] rounded-sm" />
              <span className="w-6 h-[2px] bg-[#00e5e0] rounded-sm" />
            </>
          )}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[rgba(3,7,18,0.97)] backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.href);
            }}
            className="font-['JetBrains_Mono'] text-xl tracking-[2px] text-[#64748b] hover:text-[#00e5e0] transition-all duration-300"
            style={{
              transitionDelay: isOpen ? `${i * 0.08}s` : '0s',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}

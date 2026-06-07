import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(0,229,224,0.12)] py-8 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-['Space_Grotesk'] text-[0.9rem] font-bold text-[#00e5e0] tracking-[2px] drop-shadow-[0_0_12px_rgba(0,229,224,0.3)]">
          BABLU.DEV
        </span>

        <span className="font-['JetBrains_Mono'] text-[0.75rem] text-[#64748b]">
          Built with <span className="text-[#00d084]">♥</span> by Bablu Chaudhary • {new Date().getFullYear()}
        </span>

        <a
          href="https://github.com/bablu-builds"
          target="_blank"
          rel="noopener noreferrer"
          className="font-['JetBrains_Mono'] text-[0.75rem] text-[#64748b] flex items-center gap-1.5 transition-colors duration-300 hover:text-[#00e5e0]"
        >
          <Github className="w-3.5 h-3.5" />
          @bablu-builds
        </a>
      </div>
    </footer>
  );
}

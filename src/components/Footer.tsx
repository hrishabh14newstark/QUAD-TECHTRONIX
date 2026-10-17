import React from 'react';
import { QuadLogo } from './QuadLogo';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenProposal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#030604] border-t border-slate-800 dark:border-emerald-950 text-slate-300 dark:text-slate-400 text-xs py-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <QuadLogo size="sm" glow={false} />
              <div className="flex flex-col">
                <span className="font-bold text-base text-white tracking-tight">
                  QUAD <span className="text-[#e5c158]">TECHTRONIX</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  BY QUAD ENGINEERS
                </span>
              </div>
            </div>

            <p className="text-slate-300 dark:text-slate-400 text-xs leading-relaxed max-w-sm">
              Pioneering Indian sovereign RISC-V System-on-Chips, advanced neuromorphic edge AI, and high-density power modules aligned with the ₹1,27,500 Crore Semicon India 2.0 Programme.
            </p>

            <div className="text-[11px] text-slate-300 dark:text-slate-400 font-mono">
              Founded by an Indian B.Tech ECE Innovator
            </div>
          </div>

          {/* Nav Links Column 1: Policy & Engineering */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block font-mono">
              Semicon 2.0 Directives
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('semicon-policy')}
                  className="hover:text-[#e5c158] transition-colors text-left text-slate-300 dark:text-slate-400 cursor-pointer"
                >
                  Type 1: Design (Cat 01, 02, 03)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('semicon-policy')}
                  className="hover:text-[#e5c158] transition-colors text-left text-slate-300 dark:text-slate-400 cursor-pointer"
                >
                  Type 2: R&D (Cat 04 Photonics & Chiplets)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('talent-ecosystem')}
                  className="hover:text-[#e5c158] transition-colors text-left text-slate-300 dark:text-slate-400 cursor-pointer"
                >
                  Type 3: Talent Development (Cat 10)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fiscal-calculator')}
                  className="hover:text-[#e5c158] transition-colors text-left text-slate-300 dark:text-slate-400 cursor-pointer"
                >
                  P-DLI & 9% DLI Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2: Silicon & Consortium */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block font-mono">
              Silicon & Alliance
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('silicon-portfolio')}
                  className="hover:text-[#e5c158] transition-colors text-left text-slate-300 dark:text-slate-400 cursor-pointer"
                >
                  QT-Sovereign-1 (RV64GC + Crypto RoT)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('silicon-portfolio')}
                  className="hover:text-[#e5c158] transition-colors text-left text-slate-300 dark:text-slate-400 cursor-pointer"
                >
                  QT-EdgePulse Neuromorphic NPU
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tapeout-flow')}
                  className="hover:text-[#e5c158] transition-colors text-left text-slate-300 dark:text-slate-400 cursor-pointer"
                >
                  60-Week MPW Tapeout Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenProposal}
                  className="text-[#e5c158] hover:underline transition-colors text-left font-medium cursor-pointer"
                >
                  Semicon 2.0 Proposal Dossier Generator →
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Tier: Disclaimers, Government Acknowledgment & Copyright */}
        <div className="border-t border-slate-800 dark:border-emerald-950/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Quad Techtronix Private Limited. Sovereign Indian Fabless Semiconductor Design.
          </div>

          <div className="flex items-center gap-4">
            <span>Aligned with India Semiconductor Mission (ISM) & MeitY</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { QuadLogo } from './QuadLogo';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenProposal: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenLogoStudio?: () => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenProposal,
  onNavigate,
  onOpenLogoStudio,
  isDarkMode = false,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Semicon 2.0', id: 'semicon-policy' },
    { label: 'Silicon IPs', id: 'silicon-portfolio' },
    { label: 'Fiscal Calculator', id: 'fiscal-calculator' },
    { label: 'Tapeout Flow', id: 'tapeout-flow' },
    { label: 'Talent & ECE', id: 'talent-ecosystem' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#060908]/90 backdrop-blur-md border-b border-slate-200 dark:border-emerald-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Brand Wordmark (1 single-line element) */}
          <div className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
            <button
              type="button"
              onClick={onOpenLogoStudio}
              title="Click to view or replace logo"
              className="cursor-pointer transition-transform hover:scale-105 focus:outline-none"
            >
              <QuadLogo size="sm" glow={true} />
            </button>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="flex flex-col focus:outline-none"
            >
              <span className="font-extrabold text-lg tracking-tight text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                QUAD <span className="text-emerald-600 dark:text-emerald-400">TECHTRONIX</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-mono font-semibold">
                BY QUAD ENGINEERS
              </span>
            </a>
          </div>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="whitespace-nowrap shrink-0 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none text-neutral-700 dark:text-neutral-300 font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + Light/Dark mode switcher */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors cursor-pointer"
                aria-label="Toggle theme mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-emerald-400" /> : <Moon className="w-4 h-4 text-neutral-800" />}
              </button>
            )}

            <button
              onClick={onOpenProposal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-all rounded-md shadow-sm whitespace-nowrap shrink-0 cursor-pointer focus:ring-2 focus:ring-emerald-500/50"
            >
              <span>Build Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-2 rounded-md text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-emerald-400" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#030604] border-b border-neutral-200 dark:border-neutral-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-2 px-3 rounded text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-md cursor-pointer"
            >
              Build Semicon 2.0 Proposal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

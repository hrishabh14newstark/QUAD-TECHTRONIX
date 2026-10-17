import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SemiconProgramExplorer } from './components/SemiconProgramExplorer';
import { SiliconArchitectures } from './components/SiliconArchitectures';
import { FiscalCalculator } from './components/FiscalCalculator';
import { TapeoutRoadmap } from './components/TapeoutRoadmap';
import { TalentEcosystem } from './components/TalentEcosystem';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProposalPitchGenerator } from './components/ProposalPitchGenerator';
import { LogoStudioModal } from './components/LogoStudioModal';

export default function App() {
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [logoStudioOpen, setLogoStudioOpen] = useState(false);
  // Explicitly switched to Light Mode as requested by the user
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('quad_theme');
    if (saved === 'dark') return false; // Reset to light mode for this instruction
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('quad_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('quad_theme', 'light');
    }
  }, [isDarkMode]);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] dark:bg-[#050807] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-emerald-600 selection:text-white transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        onOpenProposal={() => setProposalModalOpen(true)}
        onNavigate={handleNavigate}
        onOpenLogoStudio={() => setLogoStudioOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExplorePolicy={() => handleNavigate('semicon-policy')}
          onOpenCalculator={() => handleNavigate('fiscal-calculator')}
          onOpenLogoStudio={() => setLogoStudioOpen(true)}
        />

        {/* 2. Semicon 2.0 Policy Architecture Explorer */}
        <SemiconProgramExplorer />

        {/* 3. Silicon IP Cores & Interactive Die Floorplan */}
        <SiliconArchitectures />

        {/* 4. Interactive Fiscal Incentive & DLI Calculator */}
        <FiscalCalculator />

        {/* 5. 60-Week MPW Tapeout Engineering Schedule */}
        <TapeoutRoadmap />

        {/* 6. Type 3 / Cat 10: Talent & B.Tech ECE Founder Initiative */}
        <TalentEcosystem />

        {/* 7. Consortium, Institutional & Investor Inbound Portal */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenProposal={() => setProposalModalOpen(true)}
      />

      {/* Interactive Semicon 2.0 Proposal & Pitch Dossier Generator Modal */}
      <ProposalPitchGenerator
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
      />

      {/* Logo & Transparency Asset Studio Modal */}
      <LogoStudioModal
        isOpen={logoStudioOpen}
        onClose={() => setLogoStudioOpen(false)}
      />
    </div>
  );
}

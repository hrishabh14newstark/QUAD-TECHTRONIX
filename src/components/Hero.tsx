import React, { useState } from 'react';
import { QuadLogo } from './QuadLogo';
import { ArrowRight, Cpu, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExplorePolicy: () => void;
  onOpenCalculator: () => void;
  onOpenLogoStudio?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePolicy, onOpenCalculator, onOpenLogoStudio }) => {
  const [activeSignal, setActiveSignal] = useState<'nominal' | 'overdrive' | 'lowpower'>('nominal');

  return (
    <section id="hero" className="relative pt-12 pb-20 overflow-hidden silicon-grid">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[140px] pointer-events-none -z-10 rounded-full"
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none -z-10 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker - clean unboxed metadata with dot separators */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-6">
          <span>Union Cabinet Approved</span>
          <span aria-hidden="true" className="text-emerald-400 dark:text-emerald-700">·</span>
          <span>Semicon India 2.0 Programme</span>
          <span aria-hidden="true" className="text-emerald-400 dark:text-emerald-700">·</span>
          <span className="text-[#b48c26] dark:text-[#e5c158] font-bold">₹ 1,27,500 Cr National Outlay</span>
        </div>

        {/* 2-Column Balanced Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance">
              Sovereign Silicon. Engineered in India for the Global Semiconductor Era.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              Founded by an ambitious B.Tech ECE innovator, <span className="text-slate-900 dark:text-white font-semibold">Quad Techtronix</span> is an Indian fabless semiconductor startup developing trusted RISC-V System-on-Chips, advanced power modules, and commercial silicon IPs natively aligned with the Government of India’s <span className="text-[#b48c26] dark:text-[#e5c158] font-semibold">Semicon 2.0</span> initiative.
            </p>

            {/* Strategic Pillars Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/30">
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 block mb-1">Type 1: Design</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">Cat 01 Sovereign SoCs & Cat 02 Commercial Fabless with ₹15 Cr P-DLI</span>
              </div>
              <div className="p-3.5 rounded-lg bg-amber-50/70 dark:bg-emerald-950/20 border border-amber-200/80 dark:border-emerald-900/30">
                <span className="text-xs font-semibold text-[#b48c26] dark:text-[#e5c158] block mb-1">Type 2: R&D</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">Cat 04 2.5D Chiplets, Silicon Photonics & GaN with 75% Capex/Opex</span>
              </div>
              <div className="p-3.5 rounded-lg bg-sky-50/70 dark:bg-emerald-950/20 border border-sky-200/80 dark:border-emerald-900/30">
                <span className="text-xs font-semibold text-sky-700 dark:text-sky-400 block mb-1">Type 3: Talent</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">Cat 10 Campus-to-Wafer VLSI Training & MPW Tapeout Shuttles</span>
              </div>
            </div>

            {/* Action CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExplorePolicy}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-[#e5c158] hover:bg-[#f6d26b] transition-all rounded-lg shadow-md cursor-pointer"
              >
                <span>Explore Semicon 2.0 Directives</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-emerald-950/40 hover:bg-slate-50 dark:hover:bg-emerald-900/40 border border-slate-300 dark:border-emerald-700/40 transition-all rounded-lg shadow-sm cursor-pointer"
              >
                <span>Calculate DLI & Fiscal Grants</span>
              </button>
            </div>

            {/* Quiet sub-note */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Full compliance with C-DAC IP Co-Ownership & Indian National Security Export Control</span>
            </div>
          </div>

          {/* Right Column: Interactive Silicon Wafer & Quad PCB Butterfly Die */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-6 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#0c1611] dark:to-[#070c09] border border-slate-200 dark:border-emerald-900/40 shadow-xl dark:shadow-2xl transition-colors">
              
              {/* Header inside die card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-emerald-950">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    FABLESS SILICON DIE INTERFACE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#b48c26] dark:text-[#e5c158] font-bold tabular-nums">
                  {activeSignal === 'overdrive' ? '1.4 GHz · 1.1V' : activeSignal === 'lowpower' ? '400 MHz · 0.65V' : '1.2 GHz · 0.9V'}
                </span>
              </div>

              {/* Central Logo Emblem Presentation */}
              <div className="my-8 flex flex-col items-center justify-center relative">
                {/* Visual circuit concentric rings */}
                <div className="absolute w-64 h-64 rounded-full border border-emerald-500/20 dark:border-emerald-900/30 animate-pulse pointer-events-none" />
                <div className="absolute w-52 h-52 rounded-full border border-amber-500/20 dark:border-amber-500/10 pointer-events-none" />

                <div 
                  onClick={onOpenLogoStudio}
                  title="Click to view or customize logo"
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <QuadLogo size="xl" glow={true} />
                </div>

                {/* Sub-label under logo */}
                <div className="mt-4 text-center">
                  <span className="text-sm font-bold tracking-wider text-slate-900 dark:text-white">
                    QUAD TECHTRONIX
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-mono font-semibold block mt-0.5">
                    BY QUAD ENGINEERS
                  </span>
                </div>
              </div>

              {/* Dynamic Interactive Signal Mode Selector */}
              <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-emerald-950">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Operating Mode</span>
                  <span className="font-mono text-emerald-700 dark:text-emerald-300 font-medium">
                    {activeSignal === 'nominal' ? 'Nominal Lockstep (Cat 01)' : activeSignal === 'overdrive' ? 'High-Throughput NPU (Cat 02)' : 'Ultra-Low Leakage Sleep'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setActiveSignal('nominal')}
                    className={`py-2 px-2 text-xs font-medium rounded border transition-colors cursor-pointer ${
                      activeSignal === 'nominal'
                        ? 'bg-emerald-100 dark:bg-emerald-900/50 border-emerald-500 text-emerald-900 dark:text-white'
                        : 'bg-slate-50 dark:bg-emerald-950/20 border-slate-200 dark:border-emerald-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    Nominal
                  </button>
                  <button
                    onClick={() => setActiveSignal('overdrive')}
                    className={`py-2 px-2 text-xs font-medium rounded border transition-colors cursor-pointer ${
                      activeSignal === 'overdrive'
                        ? 'bg-amber-100 dark:bg-amber-950/50 border-[#caa23d] dark:border-[#e5c158] text-amber-950 dark:text-[#e5c158]'
                        : 'bg-slate-50 dark:bg-emerald-950/20 border-slate-200 dark:border-emerald-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    Overdrive
                  </button>
                  <button
                    onClick={() => setActiveSignal('lowpower')}
                    className={`py-2 px-2 text-xs font-medium rounded border transition-colors cursor-pointer ${
                      activeSignal === 'lowpower'
                        ? 'bg-sky-100 dark:bg-sky-950/50 border-sky-500 text-sky-950 dark:text-sky-300'
                        : 'bg-slate-50 dark:bg-emerald-950/20 border-slate-200 dark:border-emerald-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    Low Power
                  </button>
                </div>
              </div>

              {/* Bottom telemetry indicators */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-950 grid grid-cols-2 gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 block">FABLESS MODEL</span>
                  <span className="text-slate-800 dark:text-slate-200">TSMC/SCL MPW Shuttle</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 block">EDA GRID ACCESS</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">C-DAC Synopsys/Cadence</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Item Proof Strip Row directly below Hero Split */}
        <div className="border border-slate-200 dark:border-emerald-950/80 py-6 bg-white dark:bg-[#080d0a]/60 rounded-xl px-4 sm:px-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">National Outlay</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-slate-900 dark:text-white tabular-nums">
                ₹1,27,500 <span className="text-sm font-normal text-slate-500">Cr</span>
              </div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400/90 font-medium">Cabinet Approved Semicon 2.0</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Category 02 P-DLI</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-[#b48c26] dark:text-[#e5c158] tabular-nums">
                ₹15 <span className="text-sm font-normal text-slate-500">Cr Seed</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Advance funding at 50% project cost</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Category 03 Deployment</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-slate-900 dark:text-white tabular-nums">
                9% <span className="text-sm font-normal text-slate-500">Net Sales</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">5-year sales reimbursement ceiling ₹120 Cr</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Category 04 & 10 Support</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-sky-700 dark:text-sky-400 tabular-nums">
                Up to 75%
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Capex & Opex grant co-funding</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

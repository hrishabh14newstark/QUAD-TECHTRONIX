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
        className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-emerald-600/5 blur-[120px] pointer-events-none -z-10 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker - clean unboxed metadata with dot separators */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-6 font-semibold">
          <span>Union Cabinet Approved</span>
          <span aria-hidden="true" className="text-emerald-400 dark:text-emerald-700">·</span>
          <span>Semicon India 2.0 Programme</span>
          <span aria-hidden="true" className="text-emerald-400 dark:text-emerald-700">·</span>
          <span className="text-black dark:text-white font-bold bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">₹ 1,27,500 Cr National Outlay</span>
        </div>

        {/* 2-Column Balanced Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-black dark:text-white leading-[1.12] text-balance">
              Sovereign Silicon. Engineered in India for the Global Semiconductor Era.
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
              Founded by an ambitious B.Tech ECE innovator, <span className="text-black dark:text-white font-bold">Quad Techtronix</span> is an Indian fabless semiconductor startup developing trusted RISC-V System-on-Chips, advanced power modules, and commercial silicon IPs natively aligned with the Government of India’s <span className="text-emerald-700 dark:text-emerald-400 font-bold">Semicon 2.0</span> initiative.
            </p>

            {/* Strategic Pillars Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 block mb-1">Type 1: Design</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400">Cat 01 Sovereign SoCs & Cat 02 Commercial Fabless with ₹15 Cr P-DLI</span>
              </div>
              <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800">
                <span className="text-xs font-bold text-black dark:text-white block mb-1">Type 2: R&D</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400">Cat 04 2.5D Chiplets, Silicon Photonics & GaN with 75% Capex/Opex</span>
              </div>
              <div className="p-3.5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 block mb-1">Type 3: Talent</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400">Cat 10 Campus-to-Wafer VLSI Training & MPW Tapeout Shuttles</span>
              </div>
            </div>

            {/* Action CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExplorePolicy}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-all rounded-lg shadow-md cursor-pointer"
              >
                <span>Explore Semicon 2.0 Directives</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-black dark:text-white bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 transition-all rounded-lg shadow-xs cursor-pointer"
              >
                <span>Calculate DLI & Fiscal Grants</span>
              </button>
            </div>

            {/* Quiet sub-note */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Full compliance with C-DAC IP Co-Ownership & Indian National Security Export Control</span>
            </div>
          </div>

          {/* Right Column: Interactive Silicon Wafer & Quad PCB Butterfly Die */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-6 rounded-2xl bg-white dark:bg-[#070c09] border border-neutral-200 dark:border-emerald-900/40 shadow-xl dark:shadow-2xl transition-colors">
              
              {/* Header inside die card */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-emerald-950">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200">
                    FABLESS SILICON DIE INTERFACE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold tabular-nums">
                  {activeSignal === 'overdrive' ? '1.4 GHz · 1.1V' : activeSignal === 'lowpower' ? '400 MHz · 0.65V' : '1.2 GHz · 0.9V'}
                </span>
              </div>

              {/* Central Logo Emblem Presentation */}
              <div className="my-8 flex flex-col items-center justify-center relative">
                {/* Visual circuit concentric rings */}
                <div className="absolute w-64 h-64 rounded-full border border-emerald-500/20 dark:border-emerald-900/30 animate-pulse pointer-events-none" />
                <div className="absolute w-52 h-52 rounded-full border border-emerald-600/10 pointer-events-none" />

                <div 
                  onClick={onOpenLogoStudio}
                  title="Click to view or customize logo"
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <QuadLogo size="xl" glow={true} />
                </div>

                {/* Sub-label under logo */}
                <div className="mt-4 text-center">
                  <span className="text-sm font-bold tracking-wider text-black dark:text-white">
                    QUAD TECHTRONIX
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-mono font-semibold block mt-0.5">
                    BY QUAD ENGINEERS
                  </span>
                </div>
              </div>

              {/* Dynamic Interactive Signal Mode Selector */}
              <div className="space-y-3 pt-3 border-t border-neutral-100 dark:border-emerald-950">
                <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  <span>Operating Mode</span>
                  <span className="font-mono text-emerald-800 dark:text-emerald-300 font-medium">
                    {activeSignal === 'nominal' ? 'Nominal Lockstep (Cat 01)' : activeSignal === 'overdrive' ? 'High-Throughput NPU (Cat 02)' : 'Ultra-Low Leakage Sleep'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setActiveSignal('nominal')}
                    className={`py-2 px-2 text-xs font-medium rounded border transition-colors cursor-pointer ${
                      activeSignal === 'nominal'
                        ? 'bg-emerald-600 text-white border-emerald-700 dark:bg-emerald-600 dark:border-emerald-500'
                        : 'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    Nominal
                  </button>
                  <button
                    onClick={() => setActiveSignal('overdrive')}
                    className={`py-2 px-2 text-xs font-medium rounded border transition-colors cursor-pointer ${
                      activeSignal === 'overdrive'
                        ? 'bg-black text-white border-black dark:bg-emerald-950 dark:border-emerald-400 dark:text-emerald-300'
                        : 'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    Overdrive
                  </button>
                  <button
                    onClick={() => setActiveSignal('lowpower')}
                    className={`py-2 px-2 text-xs font-medium rounded border transition-colors cursor-pointer ${
                      activeSignal === 'lowpower'
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border-emerald-400 dark:border-emerald-700'
                        : 'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    Low Power
                  </button>
                </div>
              </div>

              {/* Bottom telemetry indicators */}
              <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-emerald-950 grid grid-cols-2 gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <div>
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500 block">FABLESS MODEL</span>
                  <span className="text-neutral-800 dark:text-neutral-200">TSMC/SCL MPW Shuttle</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500 block">EDA GRID ACCESS</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">C-DAC Synopsys/Cadence</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Item Proof Strip Row directly below Hero Split */}
        <div className="border border-neutral-200 dark:border-neutral-800 py-6 bg-white dark:bg-[#060a08] rounded-xl px-4 sm:px-8 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">National Outlay</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-black dark:text-white tabular-nums">
                ₹1,27,500 <span className="text-sm font-normal text-neutral-500">Cr</span>
              </div>
              <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">Cabinet Approved Semicon 2.0</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Category 02 P-DLI</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-emerald-700 dark:text-emerald-400 tabular-nums">
                ₹15 <span className="text-sm font-normal text-neutral-500">Cr Seed</span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Advance funding at 50% project cost</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Category 03 Deployment</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-black dark:text-white tabular-nums">
                9% <span className="text-sm font-normal text-neutral-500">Net Sales</span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">5-year sales reimbursement ceiling ₹120 Cr</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Category 04 & 10 Support</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-emerald-700 dark:text-emerald-400 tabular-nums">
                Up to 75%
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Capex & Opex grant co-funding</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { QUAD_SILICON_PORTFOLIO, SiliconProduct } from '../data/semiconData';
import { Cpu, Layers, Check } from 'lucide-react';

export const SiliconArchitectures: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<SiliconProduct>(QUAD_SILICON_PORTFOLIO[0]);
  const [activeDieBlock, setActiveDieBlock] = useState<number>(0);

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Strategic':
        return 'text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/30';
      case 'Commercial':
        return 'text-[#b48c26] dark:text-[#e5c158] border-amber-300 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30';
      case 'Power':
        return 'text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-900/60 bg-orange-50 dark:bg-orange-950/30';
      case 'Advanced Packaging':
        return 'text-sky-700 dark:text-sky-400 border-sky-300 dark:border-sky-900/60 bg-sky-50 dark:bg-sky-950/30';
      default:
        return 'text-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30';
    }
  };

  const getBlockColor = (type: string, isSelected: boolean) => {
    if (isSelected) {
      return 'bg-[#e5c158] text-slate-950 border-[#caa23d] dark:border-[#f6d26b] shadow-md';
    }
    switch (type) {
      case 'compute':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60 hover:border-emerald-400';
      case 'crypto':
        return 'bg-rose-50 dark:bg-red-950/40 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/60 hover:border-rose-400';
      case 'memory':
        return 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60 hover:border-indigo-400';
      case 'rf':
        return 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60 hover:border-cyan-400';
      case 'power':
        return 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60 hover:border-amber-400';
      case 'io':
        return 'bg-slate-100 dark:bg-slate-900/60 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700/60 hover:border-slate-400';
      default:
        return 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-800';
    }
  };

  return (
    <section id="silicon-portfolio" className="py-20 bg-white dark:bg-[#050907] border-b border-slate-200 dark:border-emerald-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#b48c26] dark:text-[#e5c158] font-semibold mb-3">
            <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Fabless Silicon Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Quad Techtronix IP Cores</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 text-balance">
            Quad Techtronix Silicon Product Line & Die Visualizer
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Representing the four wings of our PCB butterfly insignia, our silicon roadmaps target Sovereign Compute, Commercial Edge AI, High-Voltage Power, and Heterogeneous 2.5D Chiplets.
          </p>
        </div>

        {/* Silicon Product Selector Grid (4 Cards for 4 Wings) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {QUAD_SILICON_PORTFOLIO.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <div
                key={prod.id}
                onClick={() => {
                  setSelectedProduct(prod);
                  setActiveDieBlock(0);
                }}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-50/70 dark:bg-[#0e1b14] border-[#caa23d] dark:border-[#e5c158] shadow-md'
                    : 'bg-slate-50 dark:bg-[#08100c] border-slate-200 dark:border-emerald-950 hover:border-slate-300 dark:hover:border-emerald-800'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getCategoryBadgeColor(prod.category)}`}>
                    {prod.category}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-[10px] tabular-nums font-mono">
                    {prod.processNode.split(' ')[0]}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {prod.name}
                </h3>
                <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold block mb-2">
                  {prod.codename}
                </span>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                  {prod.tagline}
                </p>
              </div>
            );
          })}
        </div>

        {/* Active Product Deep Dive & Interactive Die Floorplan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-50 dark:bg-[#09120e] border border-slate-200 dark:border-emerald-900/50 rounded-2xl p-6 sm:p-8 shadow-sm">
          
          {/* Left: Product Architecture & Specifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-slate-200 dark:border-emerald-950 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-1">
                <span>{selectedProduct.semiconCategory}</span>
                {selectedProduct.cdacCoOwnership && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#b48c26] dark:text-[#e5c158] font-bold">C-DAC Co-Ownership</span>
                  </>
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {selectedProduct.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {selectedProduct.tagline}
              </p>
            </div>

            {/* Micro-Architecture Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-white dark:bg-[#060c09] rounded-lg border border-slate-200 dark:border-emerald-950 shadow-xs">
                <span className="text-slate-500 block text-[10px]">PROCESS NODE</span>
                <span className="text-slate-800 dark:text-slate-200 font-mono font-semibold">{selectedProduct.processNode}</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#060c09] rounded-lg border border-slate-200 dark:border-emerald-950 shadow-xs">
                <span className="text-slate-500 block text-[10px]">DIE AREA</span>
                <span className="text-slate-800 dark:text-slate-200 font-mono font-semibold">{selectedProduct.dieArea}</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#060c09] rounded-lg border border-slate-200 dark:border-emerald-950 shadow-xs">
                <span className="text-slate-500 block text-[10px]">CLOCK / SPEED</span>
                <span className="text-[#b48c26] dark:text-[#e5c158] font-mono font-bold">{selectedProduct.clockSpeed}</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#060c09] rounded-lg border border-slate-200 dark:border-emerald-950 shadow-xs">
                <span className="text-slate-500 block text-[10px]">ARCHITECTURE</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-mono font-semibold truncate block" title={selectedProduct.architecture}>
                  {selectedProduct.architecture.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Key Specifications */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                Hardware Engineering Specifications
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {selectedProduct.keySpecs.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deployment Applications */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-[#b48c26] dark:text-[#e5c158] font-bold">
                Deployment Segments & Commercial Sectors
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-white dark:bg-[#060d09] border border-slate-200 dark:border-emerald-950 rounded text-slate-700 dark:text-slate-300 shadow-xs"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Interactive Die Floorplan Model */}
          <div className="lg:col-span-5 bg-white dark:bg-[#060b08] border border-slate-200 dark:border-emerald-950 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-emerald-950 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-mono font-semibold text-slate-900 dark:text-white">
                  PHYSICAL DIE FLOORPLAN
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                Click sub-block to inspect
              </span>
            </div>

            {/* Interactive Silicon Die Floorplan Visual Grid */}
            <div className="p-3 bg-slate-900 dark:bg-[#030605] border border-slate-700 dark:border-emerald-900/60 rounded-lg aspect-square flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-1 border border-dashed border-emerald-500/20 rounded pointer-events-none" />

              <div className="grid grid-cols-2 gap-2 h-full p-2 z-10">
                {selectedProduct.schematicBlocks.map((block, idx) => {
                  const isBlockActive = activeDieBlock === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveDieBlock(idx)}
                      className={`p-2 rounded border text-left flex flex-col justify-between transition-all cursor-pointer ${getBlockColor(block.type, isBlockActive)}`}
                    >
                      <span className="text-[10px] uppercase font-mono tracking-tight font-bold block truncate">
                        {block.name}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider opacity-80 font-mono">
                        {block.type}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Sub-Block Detail Card */}
            {selectedProduct.schematicBlocks[activeDieBlock] && (
              <div className="p-3.5 bg-slate-50 dark:bg-[#09140e] border border-slate-200 dark:border-emerald-800/40 rounded-lg space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white font-mono">
                    {selectedProduct.schematicBlocks[activeDieBlock].name}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-900">
                    {selectedProduct.schematicBlocks[activeDieBlock].type}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                  {selectedProduct.schematicBlocks[activeDieBlock].description}
                </p>
              </div>
            )}

            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 text-center">
              DRC / LVS Sign-Off Target: 0 Violations · Timing Slack: &gt;+120ps
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

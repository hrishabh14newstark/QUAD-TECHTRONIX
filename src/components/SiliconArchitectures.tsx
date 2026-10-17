import React, { useState } from 'react';
import { QUAD_SILICON_PORTFOLIO, SiliconProduct } from '../data/semiconData';
import { Cpu, Layers, Check } from 'lucide-react';

export const SiliconArchitectures: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<SiliconProduct>(QUAD_SILICON_PORTFOLIO[0]);
  const [activeDieBlock, setActiveDieBlock] = useState<number>(0);

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Strategic':
        return 'text-emerald-800 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40';
      case 'Commercial':
        return 'text-black dark:text-white border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900';
      case 'Power':
        return 'text-emerald-700 dark:text-emerald-300 border-emerald-400 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/30';
      case 'Advanced Packaging':
        return 'text-neutral-800 dark:text-emerald-400 border-neutral-300 dark:border-emerald-800 bg-neutral-100 dark:bg-emerald-950/20';
      default:
        return 'text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30';
    }
  };

  const getBlockColor = (type: string, isSelected: boolean) => {
    if (isSelected) {
      return 'bg-emerald-600 text-white border-emerald-700 dark:bg-emerald-600 dark:border-emerald-400 shadow-md';
    }
    switch (type) {
      case 'compute':
        return 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 hover:border-emerald-500';
      case 'crypto':
        return 'bg-neutral-900 text-white dark:bg-black dark:text-neutral-200 border-neutral-800 dark:border-neutral-800 hover:border-neutral-500';
      case 'memory':
        return 'bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700 hover:border-neutral-500';
      case 'rf':
        return 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 border-emerald-400 dark:border-emerald-700 hover:border-emerald-500';
      case 'power':
        return 'bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700 hover:border-neutral-500';
      case 'io':
        return 'bg-neutral-100 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700/60 hover:border-neutral-400';
      default:
        return 'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800';
    }
  };

  return (
    <section id="silicon-portfolio" className="py-20 bg-white dark:bg-[#030604] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold mb-3">
            <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Fabless Silicon Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Quad Techtronix IP Cores</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight mb-4 text-balance">
            Quad Techtronix Silicon Product Line & Die Visualizer
          </h2>

          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
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
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-600 dark:border-emerald-500 shadow-sm'
                    : 'bg-neutral-50 dark:bg-[#070c09] border-neutral-200 dark:border-neutral-800 hover:border-emerald-400 dark:hover:border-emerald-800'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getCategoryBadgeColor(prod.category)}`}>
                    {prod.category}
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 text-[10px] tabular-nums font-mono">
                    {prod.processNode.split(' ')[0]}
                  </span>
                </div>

                <h3 className="text-base font-bold text-black dark:text-white mb-1">
                  {prod.name}
                </h3>
                <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold block mb-2">
                  {prod.codename}
                </span>

                <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed">
                  {prod.tagline}
                </p>
              </div>
            );
          })}
        </div>

        {/* Active Product Deep Dive & Interactive Die Floorplan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-neutral-50 dark:bg-[#070c09] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xs">
          
          {/* Left: Product Architecture & Specifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-1">
                <span>{selectedProduct.semiconCategory}</span>
                {selectedProduct.cdacCoOwnership && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-black dark:text-white font-bold bg-neutral-200 dark:bg-neutral-800 px-1.5 py-0.5 rounded">C-DAC Co-Ownership</span>
                  </>
                )}
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-1">
                {selectedProduct.name}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-300">
                {selectedProduct.tagline}
              </p>
            </div>

            {/* Micro-Architecture Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-white dark:bg-[#030604] rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-xs">
                <span className="text-neutral-500 block text-[10px]">PROCESS NODE</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-mono font-semibold">{selectedProduct.processNode}</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#030604] rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-xs">
                <span className="text-neutral-500 block text-[10px]">DIE AREA</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-mono font-semibold">{selectedProduct.dieArea}</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#030604] rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-xs">
                <span className="text-neutral-500 block text-[10px]">CLOCK / SPEED</span>
                <span className="text-black dark:text-white font-mono font-bold">{selectedProduct.clockSpeed}</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#030604] rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-xs">
                <span className="text-neutral-500 block text-[10px]">ARCHITECTURE</span>
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
              <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
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
              <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                Deployment Segments & Commercial Sectors
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-white dark:bg-[#030604] border border-neutral-200 dark:border-neutral-800 rounded text-neutral-800 dark:text-neutral-200 shadow-xs font-medium"
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

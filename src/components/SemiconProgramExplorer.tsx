import React, { useState } from 'react';
import { SEMICON_CATEGORIES, SchemeCategory } from '../data/semiconData';
import { CheckCircle2, ChevronRight, Layers, Shield, Sparkles, Briefcase, GraduationCap } from 'lucide-react';

export const SemiconProgramExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'DESIGN' | 'R&D' | 'TALENT'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<SchemeCategory>(SEMICON_CATEGORIES[1]); // Default to Cat 02

  const filteredCategories = activeTab === 'ALL'
    ? SEMICON_CATEGORIES
    : SEMICON_CATEGORIES.filter(cat => cat.type === activeTab);

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case 'DESIGN':
        return <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'R&D':
        return <Sparkles className="w-4 h-4 text-[#b48c26] dark:text-[#e5c158]" />;
      case 'TALENT':
        return <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
    }
  };

  return (
    <section id="semicon-policy" className="py-20 bg-slate-50 dark:bg-[#070b09] border-b border-slate-200 dark:border-emerald-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#b48c26] dark:text-[#e5c158] font-semibold mb-3">
            <span>National Semiconductor Framework</span>
            <span aria-hidden="true">·</span>
            <span>Semicon India 2.0 Directives</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance mb-4">
            Semicon 2.0 Scheme Architecture & Directives
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Building on the successful first phase of the Semicon India Programme, the Union Cabinet approved Semicon 2.0 with a fiscal outlay of <strong className="text-[#b48c26] dark:text-[#e5c158] font-mono">₹ 1,27,500 crore</strong>. Explore the three fundamental pillars—Design, Advanced R&D, and Talent Development—and Quad Techtronix's sovereign execution.
          </p>
        </div>

        {/* Filter Bar (Functional Interactive Tabs) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-white dark:bg-[#0b130f] rounded-lg border border-slate-200 dark:border-emerald-950 max-w-fit shadow-xs">
          <button
            onClick={() => setActiveTab('ALL')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'ALL'
                ? 'bg-emerald-700 text-white dark:bg-emerald-900/60 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Categories (5)
          </button>
          <button
            onClick={() => setActiveTab('DESIGN')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'DESIGN'
                ? 'bg-emerald-700 text-white dark:bg-emerald-900/60 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Type 1: Design (Cat 01, 02, 03)
          </button>
          <button
            onClick={() => setActiveTab('R&D')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'R&D'
                ? 'bg-emerald-700 text-white dark:bg-emerald-900/60 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Type 2: R&D (Cat 04)
          </button>
          <button
            onClick={() => setActiveTab('TALENT')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'TALENT'
                ? 'bg-emerald-700 text-white dark:bg-emerald-900/60 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Type 3: Talent (Cat 10)
          </button>
        </div>

        {/* Master-Detail Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Category Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {filteredCategories.map((cat) => {
              const isSelected = selectedCategory.id === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50/80 dark:bg-[#0f1d16] border-[#caa23d] dark:border-[#e5c158] shadow-md'
                      : 'bg-white dark:bg-[#0a120e] border-slate-200 dark:border-emerald-950/70 hover:border-slate-300 dark:hover:border-emerald-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5 font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                      {getCategoryIcon(cat.type)}
                      {cat.categoryNumber}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      Duration: up to 6 yrs
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-3">
                    {cat.shortDesc}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-emerald-950 text-xs">
                    <span className="font-mono text-[#b48c26] dark:text-[#e5c158] font-bold text-[11px]">
                      {cat.fiscalSupport.highlight}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-0.5 text-[11px]">
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Comprehensive Category Deep-Dive Panel */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0b1410] border border-slate-200 dark:border-emerald-900/60 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md dark:shadow-none">
            
            {/* Header info */}
            <div className="border-b border-slate-100 dark:border-emerald-950 pb-5">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-2">
                <span className="font-semibold">{selectedCategory.typeLabel}</span>
                <span className="text-[#b48c26] dark:text-[#e5c158] font-bold">{selectedCategory.categoryNumber}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                {selectedCategory.title}
              </h3>
            </div>

            {/* 1. Objective */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                1. Scheme Objective
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {selectedCategory.objective}
              </p>
            </div>

            {/* 2. Target Segment */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                2. Target Segment & Silicon Scope
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {selectedCategory.targetSegment.map((seg, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{seg}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Eligibility & Conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#070e0a] border border-slate-200 dark:border-emerald-950 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white block">3. Eligibility Criteria</span>
                <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
                  {selectedCategory.eligibility.map((item, idx) => (
                    <li key={idx} className="leading-normal">· {item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#070e0a] border border-slate-200 dark:border-emerald-950 space-y-2">
                <span className="text-xs font-mono font-bold text-[#b48c26] dark:text-[#e5c158] block">4. Strategic Conditions</span>
                <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
                  {selectedCategory.conditions.map((item, idx) => (
                    <li key={idx} className="leading-normal">· {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. Fiscal Support Matrix */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase tracking-wider font-mono text-[#b48c26] dark:text-[#e5c158] font-bold">
                  Fiscal Support Structure & Quantum
                </h4>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {selectedCategory.fiscalSupport.highlight}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCategory.fiscalSupport.details.map((detail, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 dark:bg-[#08100c] border border-slate-200 dark:border-emerald-950 rounded-lg">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">{detail.label}</div>
                    <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 font-mono mb-1">{detail.value}</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">{detail.mechanism}</div>
                  </div>
                ))}
              </div>

              {/* Exit Options if Category 02 */}
              {selectedCategory.fiscalSupport.exitOptions && (
                <div className="p-3 bg-amber-50 dark:bg-amber-950/15 border border-amber-200 dark:border-amber-900/30 rounded-lg text-xs space-y-1">
                  <span className="font-semibold text-amber-900 dark:text-[#e5c158] block">Exit Options Provision:</span>
                  {selectedCategory.fiscalSupport.exitOptions.map((opt, i) => (
                    <p key={i} className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                      · {opt}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Quad Techtronix Implementation Alignment */}
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
              <div className="flex items-center gap-2 mb-1.5">
                <Shield className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span className="text-xs font-bold text-emerald-950 dark:text-white tracking-wide">
                  Quad Techtronix Native Execution
                </span>
              </div>
              <p className="text-xs text-emerald-900 dark:text-emerald-200/90 leading-relaxed">
                {selectedCategory.quadAlignment}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

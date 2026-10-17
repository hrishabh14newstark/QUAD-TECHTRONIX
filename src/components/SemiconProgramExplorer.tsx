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
        return <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'TALENT':
        return <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />;
    }
  };

  return (
    <section id="semicon-policy" className="py-20 bg-neutral-50 dark:bg-[#040805] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold mb-3">
            <span>National Semiconductor Framework</span>
            <span aria-hidden="true">·</span>
            <span>Semicon India 2.0 Directives</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight text-balance mb-4">
            Semicon 2.0 Scheme Architecture & Directives
          </h2>

          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Building on the successful first phase of the Semicon India Programme, the Union Cabinet approved Semicon 2.0 with a fiscal outlay of <strong className="text-black dark:text-white font-mono bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">₹ 1,27,500 crore</strong>. Explore the three fundamental pillars—Design, Advanced R&D, and Talent Development—and Quad Techtronix's sovereign execution.
          </p>
        </div>

        {/* Filter Bar (Functional Interactive Tabs) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-white dark:bg-[#070d09] rounded-lg border border-neutral-200 dark:border-neutral-800 max-w-fit shadow-xs">
          <button
            onClick={() => setActiveTab('ALL')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'ALL'
                ? 'bg-black text-white dark:bg-emerald-600 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            All Categories (5)
          </button>
          <button
            onClick={() => setActiveTab('DESIGN')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'DESIGN'
                ? 'bg-black text-white dark:bg-emerald-600 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            Type 1: Design (Cat 01, 02, 03)
          </button>
          <button
            onClick={() => setActiveTab('R&D')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'R&D'
                ? 'bg-black text-white dark:bg-emerald-600 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            Type 2: R&D (Cat 04)
          </button>
          <button
            onClick={() => setActiveTab('TALENT')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'TALENT'
                ? 'bg-black text-white dark:bg-emerald-600 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
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
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-600 dark:border-emerald-500 shadow-sm'
                      : 'bg-white dark:bg-[#070d09] border-neutral-200 dark:border-neutral-800 hover:border-emerald-400 dark:hover:border-emerald-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                    <span className="flex items-center gap-1.5 font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                      {getCategoryIcon(cat.type)}
                      {cat.categoryNumber}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                      Duration: up to 6 yrs
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-black dark:text-white mb-1.5 leading-snug">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 mb-3">
                    {cat.shortDesc}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs">
                    <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold text-[11px]">
                      {cat.fiscalSupport.highlight}
                    </span>
                    <span className="text-neutral-500 dark:text-neutral-400 flex items-center gap-0.5 text-[11px]">
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Comprehensive Category Deep-Dive Panel */}
          <div className="lg:col-span-7 bg-white dark:bg-[#070c09] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            
            {/* Header info */}
            <div className="border-b border-neutral-100 dark:border-neutral-800 pb-5">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-2">
                <span className="font-semibold">{selectedCategory.typeLabel}</span>
                <span className="text-black dark:text-white font-bold">{selectedCategory.categoryNumber}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white leading-tight">
                {selectedCategory.title}
              </h3>
            </div>

            {/* 1. Objective */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                1. Scheme Objective
              </h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                {selectedCategory.objective}
              </p>
            </div>

            {/* 2. Target Segment */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                2. Target Segment & Silicon Scope
              </h4>
              <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
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
              <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2">
                <span className="text-xs font-mono font-bold text-black dark:text-white block">3. Eligibility Criteria</span>
                <ul className="space-y-1 text-[11px] text-neutral-600 dark:text-neutral-300">
                  {selectedCategory.eligibility.map((item, idx) => (
                    <li key={idx} className="leading-normal">· {item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 block">4. Strategic Conditions</span>
                <ul className="space-y-1 text-[11px] text-neutral-600 dark:text-neutral-300">
                  {selectedCategory.conditions.map((item, idx) => (
                    <li key={idx} className="leading-normal">· {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. Fiscal Support Matrix */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                  Fiscal Support Structure & Quantum
                </h4>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  {selectedCategory.fiscalSupport.highlight}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCategory.fiscalSupport.details.map((detail, idx) => (
                  <div key={idx} className="p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-0.5">{detail.label}</div>
                    <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 font-mono mb-1">{detail.value}</div>
                    <div className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-snug">{detail.mechanism}</div>
                  </div>
                ))}
              </div>

              {/* Exit Options if Category 02 */}
              {selectedCategory.fiscalSupport.exitOptions && (
                <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-lg text-xs space-y-1">
                  <span className="font-semibold text-emerald-900 dark:text-emerald-300 block">Exit Options Provision:</span>
                  {selectedCategory.fiscalSupport.exitOptions.map((opt, i) => (
                    <p key={i} className="text-neutral-700 dark:text-neutral-300 text-[11px] leading-relaxed">
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
                <span className="text-xs font-bold text-black dark:text-white tracking-wide">
                  Quad Techtronix Native Execution
                </span>
              </div>
              <p className="text-xs text-neutral-800 dark:text-emerald-200/90 leading-relaxed">
                {selectedCategory.quadAlignment}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

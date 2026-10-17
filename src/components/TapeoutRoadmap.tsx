import React from 'react';
import { TAPE_OUT_MILESTONES } from '../data/semiconData';
import { GitCommit, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const TapeoutRoadmap: React.FC = () => {
  return (
    <section id="tapeout-flow" className="py-20 bg-slate-50 dark:bg-[#060a08] border-b border-slate-200 dark:border-emerald-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-3 font-semibold">
            <GitCommit className="w-4 h-4 text-[#b48c26] dark:text-[#e5c158]" />
            <span>Design-to-Silicon Engineering Lifecycle</span>
            <span aria-hidden="true">·</span>
            <span>RTL-to-GDSII Execution Flow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 text-balance">
            Fabless MPW Tapeout & Validation Schedule
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            By leveraging the Semicon 2.0 Design Infrastructure Support (DIS) centralized EDA tools grid and subsidized Multi-Project Wafer (MPW) runs, Quad Techtronix executes an agile 60-week tapeout cycle from specification to validated silicon.
          </p>
        </div>

        {/* Milestone Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TAPE_OUT_MILESTONES.map((milestone) => (
            <div
              key={milestone.step}
              className="p-6 rounded-2xl bg-white dark:bg-[#09120e] border border-slate-200 dark:border-emerald-900/40 hover:border-slate-300 dark:hover:border-emerald-700/60 shadow-xs dark:shadow-none transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-xl font-extrabold text-[#b48c26] dark:text-[#e5c158] font-mono">
                    {milestone.step}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{milestone.weeks}</span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        milestone.status === 'Completed'
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800'
                          : milestone.status === 'In Progress'
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-[#e5c158] border border-amber-300 dark:border-amber-800'
                          : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-800'
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {milestone.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {milestone.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-emerald-950/80 flex items-center justify-between text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                <span>Sign-off Criteria</span>
                <span className="text-slate-500 dark:text-slate-400">Zero Critical Defect</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

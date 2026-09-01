'use client';

import React, { useState } from 'react';
import { UX_PROCESS_STEPS } from '@/data/portfolio-data';
import { Search, Layers, CheckCircle2, Cpu, Sparkles, Check, ArrowRight } from 'lucide-react';

export const UXProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Search, Layers, Sparkles, CheckCircle2, Cpu];

  return (
    <section id="process" className="py-24 sm:py-32 lg:py-40 bg-slate-50/60 dark:bg-[#080C14]/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 dark:bg-slate-850 text-slate-900 dark:text-slate-100 text-xs font-mono font-semibold uppercase tracking-wider border border-slate-300/70 dark:border-slate-800">
            <span className="w-2 h-2 rounded-full bg-[#C25934]" />
            <span>Process Framework</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight leading-[1.15]">
            Bridging complex technical logic with intuitive ergonomics.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            A 5-phase empirical UX framework refined over 8+ years across enterprise telecom NOCs, IoT energy grids, higher education LXPs, and high-concurrency systems.
          </p>
        </div>

        {/* Interactive Steps Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono">
          {UX_PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-white dark:bg-[#101626] border-[#C25934] dark:border-[#E0704E] ring-1 ring-[#C25934]/30 shadow-md'
                    : 'bg-white/70 dark:bg-[#0D121F]/70 border-slate-200/80 dark:border-slate-800/80 hover:bg-white dark:hover:bg-[#101626] text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isCurrent ? 'bg-[#C25934] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                    0{idx + 1}
                  </span>
                </div>
                <div className={`text-xs sm:text-sm font-bold ${isCurrent ? 'text-[#C25934] dark:text-[#E0704E]' : 'text-slate-950 dark:text-slate-200'}`}>
                  {step.phase.split('. ')[1]}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-1 font-sans">
                  {step.tag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        {(() => {
          const step = UX_PROCESS_STEPS[activeStep];
          const Icon = stepIcons[activeStep] || Sparkles;
          return (
            <div className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#C25934] text-white shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#C25934] dark:text-[#E0704E] uppercase tracking-wider">
                      Phase {step.phase}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 dark:text-white mt-0.5">
                      {step.tag}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 self-start md:self-auto">
                  Phase {activeStep + 1} of {UX_PROCESS_STEPS.length}
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl font-sans">
                {step.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Methods & Activities */}
                <div className="p-6 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C25934]" />
                    Empirical Methods & Activities
                  </h4>
                  <ul className="space-y-2.5">
                    {step.methods.map((method, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-sans">
                        <Check className="w-4 h-4 text-[#C25934] dark:text-[#E0704E] shrink-0 mt-0.5" />
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Deliverables */}
                <div className="p-6 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Verified Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {step.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

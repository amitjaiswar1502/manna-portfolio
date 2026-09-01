'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sliders, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Eye, 
  Layers, 
  Cpu, 
  HelpCircle,
  ArrowRight,
  TrendingUp,
  BarChart2
} from 'lucide-react';

interface HeuristicItem {
  id: string;
  name: string;
  nielsenNumber: number;
  principle: string;
  legacyIssue: string;
  remedyApplied: string;
  severityBefore: 4 | 3 | 2 | 1;
  severityAfter: 0 | 1;
  impactMetric: string;
  clientCase: 'Nokia NOC' | 'Itron Grid' | 'Manipal LXP' | 'EGA Industrial';
}

const HEURISTICS_DATA: HeuristicItem[] = [
  {
    id: 'h1',
    nielsenNumber: 1,
    name: 'Visibility of System Status',
    principle: 'The design should always keep users informed about what is going on through appropriate feedback within reasonable time.',
    legacyIssue: 'Network operators had zero visual telemetry cues during bulk cell tower firmware updates, causing repeated accidental restart commands.',
    remedyApplied: 'Introduced persistent real-time heartbeat rings and micro-status badges with WebSocket-backed telemetry countdowns.',
    severityBefore: 4,
    severityAfter: 0,
    impactMetric: '-84% Duplicate restarts',
    clientCase: 'Nokia NOC'
  },
  {
    id: 'h2',
    nielsenNumber: 2,
    name: 'Match Between System & Real World',
    principle: 'The design should speak the users language with words, phrases, and concepts familiar to the user rather than internal jargon.',
    legacyIssue: 'Smart meter alerts displayed raw hex codes (e.g. 0x7E3_ERR) rather than actionable power grid phase terminology.',
    remedyApplied: 'Mapped 140+ diagnostic hex logs to natural language domain taxonomy (e.g. "Phase B Voltage Sag > 12%") with one-click dispatch.',
    severityBefore: 3,
    severityAfter: 0,
    impactMetric: '3.8x Faster dispatch',
    clientCase: 'Itron Grid'
  },
  {
    id: 'h3',
    nielsenNumber: 3,
    name: 'User Control & Freedom',
    principle: 'Users often perform actions by mistake and need a clearly marked "emergency exit" to leave the unwanted action without an extended process.',
    legacyIssue: 'Accidental deletion of bulk student batch rosters in the EdTech LMS was irreversible without manual SQL database intervention.',
    remedyApplied: 'Engineered a 10-second contextual soft-undo snackbar and a 30-day reversible trash vault with audit logs.',
    severityBefore: 4,
    severityAfter: 0,
    impactMetric: '100% Zero data loss',
    clientCase: 'Manipal LXP'
  },
  {
    id: 'h4',
    nielsenNumber: 4,
    name: 'Consistency & Standards',
    principle: 'Users should not have to wonder whether different words, situations, or actions mean the same thing across platforms.',
    legacyIssue: 'Three separate acquired telemetry tools used contrasting color codes for alert severity (Red meant offline in tool A, but critical in tool B).',
    remedyApplied: 'Created a unified multi-brand Design Token repository aligning ANSI/ISA-18.2 alarm management color tokens across all platforms.',
    severityBefore: 3,
    severityAfter: 0,
    impactMetric: '100% Token parity',
    clientCase: 'Nokia NOC'
  },
  {
    id: 'h5',
    nielsenNumber: 5,
    name: 'Error Prevention & Guardrails',
    principle: 'Better than good error messages is a careful design which prevents a problem from occurring in the first place.',
    legacyIssue: 'High-voltage substation load transfer switches had no two-step confirmation safeguards, risking regional brownouts.',
    remedyApplied: 'Designed friction-calibrated slide-to-confirm sliders with automated dual-operator digital signatures.',
    severityBefore: 4,
    severityAfter: 0,
    impactMetric: 'Zero substation trips',
    clientCase: 'Itron Grid'
  },
  {
    id: 'h7',
    nielsenNumber: 7,
    name: 'Flexibility & Efficiency of Use',
    principle: 'Accelerators unseen by novice users may often speed up the interaction for the expert user such that the system can cater to both.',
    legacyIssue: 'Senior telecom engineers had to click through 6 nested sub-menus to triage recurring alarm correlations.',
    remedyApplied: 'Implemented custom command palettes (`Cmd+K`), configurable quick-filter macros, and density toggles for dense dual-monitor setups.',
    severityBefore: 3,
    severityAfter: 0,
    impactMetric: '-42% Triage latency',
    clientCase: 'Nokia NOC'
  }
];

export const UXAuditTool: React.FC = () => {
  const [selectedHeuristicId, setSelectedHeuristicId] = useState<string>('h1');
  const [selectedClientFilter, setSelectedClientFilter] = useState<string>('All');

  const clientOptions = ['All', 'Nokia NOC', 'Itron Grid', 'Manipal LXP'];

  const filteredHeuristics = selectedClientFilter === 'All'
    ? HEURISTICS_DATA
    : HEURISTICS_DATA.filter((h) => h.clientCase === selectedClientFilter);

  const activeHeuristic = HEURISTICS_DATA.find((h) => h.id === selectedHeuristicId) || HEURISTICS_DATA[0];

  const getSeverityBadge = (level: number) => {
    switch (level) {
      case 4:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">Critical (Sev 4)</span>;
      case 3:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">Major (Sev 3)</span>;
      case 2:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-orange-500/10 text-[#C25934] dark:text-[#E0704E] border border-orange-500/20">Minor (Sev 2)</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">Resolved (Sev 0)</span>;
    }
  };

  return (
    <section id="ux-audit-matrix" className="py-24 sm:py-32 lg:py-40 bg-slate-50/60 dark:bg-[#080C14]/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 dark:bg-slate-850 text-slate-900 dark:text-slate-100 text-xs font-mono font-semibold uppercase tracking-wider border border-slate-300/70 dark:border-slate-800">
              <span className="w-2 h-2 rounded-full bg-[#C25934]" />
              <span>Heuristic Usability Matrix</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight leading-[1.15]">
              Empirical usability audits applied to enterprise systems.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              How Nielsen Norman Group usability heuristics were diagnosed, prioritized, and solved across mission-critical enterprise environments.
            </p>
          </div>

          {/* Client Filter */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-200/70 dark:bg-slate-900/90 border border-slate-300/80 dark:border-slate-800 self-start lg:self-auto font-mono text-xs backdrop-blur-md max-w-full overflow-x-auto no-scrollbar shadow-2xs">
            {clientOptions.map((client) => (
              <button
                key={client}
                onClick={() => setSelectedClientFilter(client)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedClientFilter === client
                    ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white font-bold shadow-xs ring-1 ring-slate-900/5 dark:ring-white/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-800/50'
                }`}
              >
                {client}
              </button>
            ))}
          </div>
        </div>

        {/* Heuristics Selector & Diagnostic Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Heuristics Selector List */}
          <div className="lg:col-span-5 space-y-3 font-mono">
            {filteredHeuristics.map((item) => {
              const isSelected = selectedHeuristicId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedHeuristicId(item.id)}
                  className={`w-full p-4 sm:p-5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-[#101626] border-[#C25934] dark:border-[#E0704E] ring-1 ring-[#C25934]/30 shadow-md'
                      : 'bg-white/70 dark:bg-[#0D121F]/70 border-slate-200/80 dark:border-slate-800/80 hover:bg-white dark:hover:bg-[#101626]'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        NN/g #{item.nielsenNumber}
                      </span>
                      <span className="text-[10px] font-bold text-[#C25934] dark:text-[#E0704E] uppercase">
                        {item.clientCase}
                      </span>
                    </div>
                    <div className={`font-sans font-bold text-sm sm:text-base ${isSelected ? 'text-slate-950 dark:text-white' : 'text-slate-800 dark:text-slate-300'}`}>
                      {item.name}
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      {item.impactMetric}
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform shrink-0 ml-3 ${isSelected ? 'text-[#C25934] dark:text-[#E0704E] translate-x-1' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Diagnostic Console */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800 shadow-sm space-y-7">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200/80 dark:border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-xs font-mono font-semibold uppercase rounded-full bg-orange-500/10 text-[#C25934] dark:text-[#E0704E] border border-orange-500/20">
                      NN/g #{activeHeuristic.nielsenNumber}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                      System: {activeHeuristic.clientCase}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 dark:text-white">
                    {activeHeuristic.name}
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Measured Impact</span>
                  <span className="text-sm sm:text-base font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {activeHeuristic.impactMetric}
                  </span>
                </div>
              </div>

              {/* Principle Definition */}
              <div className="p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border-l-2 border-[#C25934] dark:border-[#E0704E] text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed italic">
                &ldquo;{activeHeuristic.principle}&rdquo;
              </div>

              {/* Diagnosis vs. Remedy Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Diagnosed Friction */}
                <div className="p-5 rounded-2xl bg-rose-500/5 dark:bg-rose-950/20 border border-rose-500/15 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Diagnosed Friction
                    </span>
                    {getSeverityBadge(activeHeuristic.severityBefore)}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                    {activeHeuristic.legacyIssue}
                  </p>
                </div>

                {/* UX Architecture Solution */}
                <div className="p-5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/15 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      UX Architecture Solution
                    </span>
                    {getSeverityBadge(activeHeuristic.severityAfter)}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                    {activeHeuristic.remedyApplied}
                  </p>
                </div>
              </div>

              {/* Bottom Empirical Metric Bar */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#C25934] dark:text-[#E0704E]" />
                  <span className="text-slate-700 dark:text-slate-300 font-sans text-xs">
                    Benchmarked via ISO 9241-11 Usability Metrics
                  </span>
                </div>
                <span className="font-bold text-[#C25934] dark:text-[#E0704E] uppercase tracking-wider text-[11px]">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

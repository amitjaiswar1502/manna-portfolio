'use client';

import React, { useState } from 'react';
import { Project, PROJECTS } from '@/data/portfolio-data';
import { ArrowRight, Sparkles, Layers, Activity, ChevronRight, CheckCircle2, ShieldCheck, Terminal, Smartphone } from 'lucide-react';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Enterprise Systems', 'EdTech & Learning', 'Fintech & Commerce'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 sm:py-32 lg:py-40 bg-stone-50/60 dark:bg-[#0D0F12]/60 border-t border-stone-200/80 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs font-mono font-semibold uppercase tracking-wider border border-stone-300/70 dark:border-stone-800">
              <span className="w-2 h-2 rounded-full bg-[#C25934]" />
              <span>Selected Work</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-stone-950 dark:text-white tracking-tight leading-[1.15]">
              Empirical product design for complex enterprise workflows.
            </h2>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              High-throughput telecom NOC consoles, IoT energy grid architectures, and EdTech platforms grounded in measurable cognitive velocity and strict usability benchmarking.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-stone-200/70 dark:bg-stone-900/90 border border-stone-300/80 dark:border-stone-800 self-start lg:self-auto font-mono text-xs backdrop-blur-md max-w-full overflow-x-auto no-scrollbar shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-stone-800 text-stone-950 dark:text-white font-bold shadow-xs ring-1 ring-stone-900/5 dark:ring-white/10'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white hover:bg-stone-300/40 dark:hover:bg-stone-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-[#15181D] border border-stone-200 dark:border-stone-800 hover:border-[#C25934]/70 dark:hover:border-[#E0704E]/70 shadow-xs hover:shadow-2xl hover:shadow-orange-950/10 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Top Content */}
                <div className="p-7 sm:p-9 space-y-6">
                  {/* Category & Client Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider rounded-full bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-stone-200/80 dark:border-stone-800">
                        {project.heroBadge}
                      </span>
                      <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-orange-500/10 text-[#C25934] dark:text-[#E0704E] border border-orange-500/20 text-[10px] font-mono font-bold">
                        <Sparkles className="w-3 h-3" />
                        Figma Case Study
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 font-mono">
                      {project.client}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-stone-950 dark:text-white group-hover:text-[#C25934] dark:group-hover:text-[#E0704E] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-2">
                      {project.shortSummary}
                    </p>
                  </div>

                  {/* High Impact Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 font-mono">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="p-3 rounded-2xl bg-stone-50/90 dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-800/70">
                        <div className="font-display font-extrabold text-lg sm:text-xl text-stone-950 dark:text-white">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-stone-500 dark:text-stone-400 truncate uppercase font-medium mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Telemetry/Interface Screen Preview Node */}
                  <div className="rounded-2xl bg-stone-50 dark:bg-stone-950 p-4 sm:p-5 border border-stone-200/80 dark:border-stone-800/80 space-y-3 group-hover:border-stone-300 dark:group-hover:border-stone-700 transition-colors font-mono">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.interactivePreview.accentColor }} />
                        <span className="text-[11px] font-bold text-stone-800 dark:text-stone-200 uppercase tracking-wide">
                          {project.interactivePreview.screenTitle}
                        </span>
                      </div>
                      <span className="text-[10px] text-stone-400 font-semibold uppercase">Console Node</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {project.interactivePreview.stats.map((st, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-white dark:bg-[#1A1E24] border border-stone-200/60 dark:border-stone-800/60">
                          <div className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium truncate">{st.label}</div>
                          <div className="text-xs font-bold text-stone-950 dark:text-white mt-0.5">{st.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="px-7 sm:px-9 py-4 bg-stone-50/80 dark:bg-stone-900/40 border-t border-stone-200/80 dark:border-stone-800 flex items-center justify-between font-mono">
                  <div className="flex flex-wrap gap-1.5">
                    {project.toolsUsed.slice(0, 3).map((tool, i) => (
                      <span key={i} className="px-2.5 py-0.5 text-[10px] font-medium uppercase text-stone-600 dark:text-stone-400 bg-white dark:bg-stone-800 rounded-full border border-stone-200/80 dark:border-stone-800">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C25934] dark:text-[#E0704E] group-hover:translate-x-1 transition-transform">
                    <span>Open Figma UX Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


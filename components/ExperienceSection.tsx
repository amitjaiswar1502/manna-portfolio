'use client';

import React, { useState } from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '@/data/portfolio-data';
import { Briefcase, GraduationCap, Wrench, CheckCircle, Calendar, MapPin, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'education'>('experience');

  return (
    <section id="experience" className="py-24 sm:py-32 lg:py-40 bg-slate-50/60 dark:bg-[#080C14]/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 dark:bg-slate-850 text-slate-900 dark:text-slate-100 text-xs font-mono font-semibold uppercase tracking-wider border border-slate-300/70 dark:border-slate-800">
              <span className="w-2 h-2 rounded-full bg-[#C25934]" />
              <span>Background & Credentials</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight leading-[1.15]">
              8+ Years of craft, systems architecture & leadership.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Designing scalable multi-tenant enterprise platforms, establishing design token systems, and mentoring cross-functional engineering teams.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-200/70 dark:bg-slate-900/90 border border-slate-300/80 dark:border-slate-800 self-start lg:self-auto font-mono text-xs backdrop-blur-md max-w-full overflow-x-auto no-scrollbar shadow-2xs">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white font-bold shadow-xs ring-1 ring-slate-900/5 dark:ring-white/10'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-800/50'
              }`}
            >
              Work History
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeTab === 'skills'
                  ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white font-bold shadow-xs ring-1 ring-slate-900/5 dark:ring-white/10'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-800/50'
              }`}
            >
              Skills & Tools
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white font-bold shadow-xs ring-1 ring-slate-900/5 dark:ring-white/10'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-800/50'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* TAB 1: WORK HISTORY */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800 shadow-xs hover:border-[#C25934]/60 dark:hover:border-[#E0704E]/60 transition-all space-y-6"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white">
                        {exp.company}
                      </h3>
                      <span className="px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider rounded-full bg-orange-50 dark:bg-orange-950/60 text-[#C25934] dark:text-[#E0704E] border border-orange-200/60 dark:border-orange-900/60">
                        {exp.role}
                      </span>
                    </div>
                    {exp.clientContext && (
                      <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                        {exp.clientContext}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {exp.summary}
                </p>

                {/* Responsibilities & Wins Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-sans">
                  <div className="p-6 rounded-2xl bg-slate-50/90 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
                      Core Responsibilities
                    </span>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#C25934] dark:text-[#E0704E] font-bold mt-0.5">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50/90 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C25934] dark:text-[#E0704E] block">
                      Impact & Measurable Wins
                    </span>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      {exp.keyWins.map((w, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-medium">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tools Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-2 font-mono">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mr-1">Tools & Ecosystem:</span>
                  {exp.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium uppercase text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200/80 dark:border-slate-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: SKILLS & TOOLS */}
        {activeTab === 'skills' && (
          <div className="space-y-10">
            {/* Design Tools & Platforms */}
            <div className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white flex items-center gap-2.5">
                <Wrench className="w-5 h-5 text-[#C25934] dark:text-[#E0704E]" />
                Primary Design Toolsets & Proficiency
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono">
                {PERSONAL_INFO.toolsList.map((tool, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-950 dark:text-white">
                        {tool.name}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-50 dark:bg-orange-950/60 text-[#C25934] dark:text-[#E0704E] border border-orange-200/50 dark:border-orange-900/50">
                        {tool.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies by Category */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
              {PERSONAL_INFO.skillsList.map((cat, idx) => (
                <div key={idx} className="p-7 rounded-3xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800 space-y-5">
                  <h4 className="font-display font-bold text-lg text-slate-950 dark:text-white pb-3 border-b border-slate-200/80 dark:border-slate-800">
                    {cat.category}
                  </h4>
                  <ul className="space-y-2.5">
                    {cat.items.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C25934] dark:bg-[#E0704E]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: EDUCATION */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            {PERSONAL_INFO.education.map((edu, idx) => (
              <div key={idx} className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#C25934] text-white shadow-xs">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-[#C25934] dark:text-[#E0704E]">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                  {edu.period}
                </div>

                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

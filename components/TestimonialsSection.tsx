'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/portfolio-data';
import { Quote, UserCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32 lg:py-40 bg-slate-50/60 dark:bg-[#080C14]/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 dark:bg-slate-850 text-slate-900 dark:text-slate-100 text-xs font-mono font-semibold uppercase tracking-wider border border-slate-300/70 dark:border-slate-800">
            <span className="w-2 h-2 rounded-full bg-[#C25934]" />
            <span>Colleague & Leadership Endorsements</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight leading-[1.15]">
            What product leaders say about working with Manoj.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            Collaborative impact attested by engineering leads, product directors, and design strategists across Nokia, Manipal, and Capgemini.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800 shadow-xs hover:border-[#C25934]/60 dark:hover:border-[#E0704E]/60 transition-all flex flex-col justify-between space-y-8"
            >
              <div className="space-y-5">
                {/* Top Quote Icon & Relation Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-orange-50 dark:bg-orange-950/60 text-[#C25934] dark:text-[#E0704E] border border-orange-200/50 dark:border-orange-900/50">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 px-3 py-1 rounded-full">
                    {test.projectRelation}
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic font-serif">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 dark:bg-slate-800 text-slate-100 font-mono font-bold text-sm flex items-center justify-center shadow-xs shrink-0 border border-slate-800 dark:border-slate-700">
                  {test.avatarInitials}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-950 dark:text-white">
                    {test.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans">
                    {test.role} • <span className="font-semibold text-slate-800 dark:text-slate-200">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#070A10] text-white border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 space-y-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Bio */}
          <div className="space-y-4 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center font-mono font-bold text-[#E0704E] text-sm">
                MM
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs font-mono text-slate-400 block">
                  {PERSONAL_INFO.title} • 8+ Years
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Transforming complex multi-tenant enterprise tools, smart grid telemetry, and EdTech platforms into scalable, human-centered software.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
            <a href="#work" className="hover:text-[#E0704E] transition-colors">Work</a>
            <a href="#process" className="hover:text-[#E0704E] transition-colors">Process</a>
            <a href="#experience" className="hover:text-[#E0704E] transition-colors">Experience</a>
            <a href="#insights" className="hover:text-[#E0704E] transition-colors">Insights</a>
            <a href="#testimonials" className="hover:text-[#E0704E] transition-colors">Testimonials</a>
            <button onClick={onOpenResume} className="hover:text-[#E0704E] transition-colors cursor-pointer">Resume</button>
            <button onClick={onOpenContact} className="hover:text-[#E0704E] transition-colors cursor-pointer">Contact</button>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed with empirical UX rigor.
          </p>

          <div className="flex items-center gap-4">
            <span>Mumbai, India</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

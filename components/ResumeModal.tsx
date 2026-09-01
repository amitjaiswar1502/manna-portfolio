'use client';

import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES } from '@/data/portfolio-data';
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink, Check, Copy, Sparkles, FileText, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-all">
      <div 
        id="resume-modal"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#F8FAFC] dark:bg-[#090D16] border border-slate-300 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden font-sans"
      >
        {/* Top Action Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-white/95 dark:bg-[#0F1422]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C25934]" />
            <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white font-mono uppercase tracking-wider">
              {PERSONAL_INFO.name} — Curriculum Vitae (Senior UX Lead)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer border border-slate-300 dark:border-slate-700"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-[#C25934] dark:text-[#E0704E]" />}
              <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer border border-slate-300 dark:border-slate-700"
            >
              <Printer className="w-3.5 h-3.5 text-[#C25934] dark:text-[#E0704E]" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-left bg-[#F8FAFC] dark:bg-[#090D16] text-slate-900 dark:text-slate-100">
          {/* Header Block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight font-display">
                {PERSONAL_INFO.name}
              </h1>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C25934] dark:text-[#E0704E] bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20 self-start sm:self-auto">
                8+ Years Enterprise Experience
              </span>
            </div>

            <p className="text-lg font-bold text-[#C25934] dark:text-[#E0704E] font-display">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl font-sans">
              {PERSONAL_INFO.bio}
            </p>

            {/* Contact details row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 font-mono pt-2">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-[#C25934] dark:hover:text-[#E0704E]">
                <Mail className="w-3.5 h-3.5 text-[#C25934] dark:text-[#E0704E]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 hover:text-[#C25934] dark:hover:text-[#E0704E]">
                <Phone className="w-3.5 h-3.5 text-[#C25934] dark:text-[#E0704E]" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C25934] dark:text-[#E0704E]" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#C25934] dark:hover:text-[#E0704E]">
                <Globe className="w-3.5 h-3.5 text-[#C25934] dark:text-[#E0704E]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C25934] dark:text-[#E0704E] border-b border-slate-200 dark:border-slate-800 pb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C25934]" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2.5 p-4 rounded-2xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-base font-bold text-slate-950 dark:text-white font-display">
                        {exp.company} {exp.clientContext ? `— ${exp.clientContext}` : ''}
                      </h3>
                      <p className="text-xs font-mono font-bold text-[#C25934] dark:text-[#E0704E]">{exp.role}</p>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-500">{exp.period}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                    {exp.keyWins.map((win, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 pt-1 font-mono">
                    {exp.tools.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 text-[10px] uppercase font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2 p-4 rounded-2xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C25934] dark:text-[#E0704E] border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C25934]" />
                <span>Core UX Competencies</span>
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-sans pt-1">
                <li>• Empirical User Research & Contextual Inquiry</li>
                <li>• Design Systems Architecture & Tokenization</li>
                <li>• Interaction Design & High-Density UI Layouts</li>
                <li>• Usability Testing (SUS, Task Success Rate, Time-to-Task)</li>
                <li>• Information Architecture & Enterprise Workflows</li>
                <li>• Scaled Agile (SAFe) Cross-Functional Leadership</li>
              </ul>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C25934] dark:text-[#E0704E] border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C25934]" />
                <span>Tools & Technologies</span>
              </h2>
              <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-xs text-slate-700 dark:text-slate-300">
                {PERSONAL_INFO.toolsList.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-md text-[11px] font-semibold border border-slate-200 dark:border-slate-700">
                    {t.name} ({t.level})
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2 p-4 rounded-2xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C25934] dark:text-[#E0704E] border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C25934]" />
              <span>Formal Education</span>
            </h2>
            {PERSONAL_INFO.education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-baseline pt-1">
                <div>
                  <h3 className="text-xs font-bold text-slate-950 dark:text-white font-display">{edu.degree}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">{edu.institution}</p>
                </div>
                <span className="text-xs font-mono text-slate-500">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

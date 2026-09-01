'use client';

import React, { useEffect, useState } from 'react';
import { BlogPost } from '@/data/portfolio-data';
import { X, Clock, Calendar, Tag, Share2, Check } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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

  if (!isOpen || !post) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}#blog-${post.slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md transition-all">
      <div 
        id="blog-modal"
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0E131F] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-white/95 dark:bg-[#101626]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-mono font-bold uppercase tracking-wider rounded-md bg-orange-50 dark:bg-orange-950/60 text-[#C25934] dark:text-[#E0704E] border border-orange-200/60 dark:border-orange-900/60">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">•</span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">{post.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Copy article link"
              className="p-1.5 text-slate-500 hover:text-slate-950 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-950 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="overflow-y-auto p-5 sm:p-8 md:p-10 space-y-8 text-left">
          {/* Headline & Meta */}
          <div className="space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 dark:text-white leading-tight tracking-tight">
              {post.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1 border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>By Manoj Manna (Senior UX Designer)</span>
            </div>
          </div>

          {/* Intro */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border-l-4 border-[#C25934] dark:border-[#E0704E] text-slate-800 dark:text-slate-200 text-base leading-relaxed italic font-serif">
            &ldquo;{post.content.intro}&rdquo;
          </div>

          {/* Article Sections */}
          <div className="space-y-8">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="font-display font-bold text-xl text-slate-950 dark:text-white">
                  {section.heading}
                </h3>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {section.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {section.keyTakeaway && (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-mono">
                    <strong className="block text-[#C25934] dark:text-[#E0704E] uppercase tracking-wider text-[11px] mb-1 font-bold">
                      Key UX Takeaway
                    </strong>
                    <span className="font-sans text-slate-700 dark:text-slate-300">{section.keyTakeaway}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 space-y-2 border border-slate-200 dark:border-slate-800">
            <h4 className="font-display font-bold text-base text-slate-950 dark:text-white">
              Final Reflection
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {post.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 font-mono">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            {post.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 text-xs font-semibold uppercase rounded-md bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

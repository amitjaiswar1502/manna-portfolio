'use client';

import React, { useState } from 'react';
import { BlogPost, BLOG_POSTS } from '@/data/portfolio-data';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, Tag } from 'lucide-react';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', 'Design Systems', 'Enterprise UX', 'User Research', 'Interaction Design'];

  const filteredPosts = selectedTag === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedTag);

  return (
    <section id="insights" className="py-24 sm:py-32 lg:py-40 bg-slate-50/60 dark:bg-[#080C14]/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 dark:bg-slate-850 text-slate-900 dark:text-slate-100 text-xs font-mono font-semibold uppercase tracking-wider border border-slate-300/70 dark:border-slate-800">
              <span className="w-2 h-2 rounded-full bg-[#C25934]" />
              <span>Design Insights & Writing</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight leading-[1.15]">
              Essays on systems, telemetry & agile UX.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Frameworks, design token models, and practical lessons distilled from 8+ years shipping enterprise software.
            </p>
          </div>

          {/* Topic Filters */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-200/70 dark:bg-slate-900/90 border border-slate-300/80 dark:border-slate-800 self-start lg:self-auto font-mono text-xs backdrop-blur-md max-w-full overflow-x-auto no-scrollbar shadow-2xs">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white font-bold shadow-xs ring-1 ring-slate-900/5 dark:ring-white/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-800/50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#101626] hover:bg-slate-50/90 dark:hover:bg-[#141B2E] border border-slate-200 dark:border-slate-800 hover:border-[#C25934]/60 dark:hover:border-[#E0704E]/60 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer space-y-8"
            >
              <div className="space-y-4">
                {/* Meta Bar */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider rounded-full bg-orange-50 dark:bg-orange-950/60 text-[#C25934] dark:text-[#E0704E] border border-orange-200/60 dark:border-orange-900/60">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 dark:text-white group-hover:text-[#C25934] dark:group-hover:text-[#E0704E] transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 font-sans">
                  {post.excerpt}
                </p>
              </div>

              {/* Tags & Read Action */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between font-mono">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((t, idx) => (
                    <span key={idx} className="px-3 py-0.5 text-xs font-medium uppercase text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200/80 dark:border-slate-800">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C25934] dark:text-[#E0704E] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

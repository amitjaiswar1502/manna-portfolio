'use client';

import React, { useState, useEffect } from 'react';
import { Project, BlogPost, PROJECTS, BLOG_POSTS, PERSONAL_INFO } from '@/data/portfolio-data';
import { 
  Search, 
  Layers, 
  BookOpen, 
  FileText, 
  Mail, 
  Phone, 
  Linkedin, 
  ArrowRight, 
  Check, 
  X, 
  Command,
  Sun,
  Moon,
  Sparkles,
  Sliders,
  Briefcase
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onSelectPost: (post: BlogPost) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onSelectPost,
  onOpenResume,
  onOpenContact,
  darkMode,
  onToggleDarkMode,
}) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open via custom event if needed
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredProjects = PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.client.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPosts = BLOG_POSTS.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-4 bg-black/75 backdrop-blur-md transition-all">
      <div 
        id="command-palette-modal"
        className="w-full max-w-2xl bg-[#F8FAFC] dark:bg-[#090D16] border border-slate-300 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] font-sans"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F1422]">
          <Search className="w-5 h-5 text-[#C25934] dark:text-[#E0704E] shrink-0 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search case studies, articles, skills..."
            autoFocus
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden font-mono"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 px-2 py-0.5 text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-4 text-xs font-mono">
          {/* Quick Actions */}
          {!query && (
            <div className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Quick Navigation & Actions
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#C25934] dark:text-[#E0704E]" />
                  <span className="font-semibold font-sans text-sm">View Curriculum Vitae (PDF)</span>
                </div>
                <span className="text-[10px] text-slate-400">CV Sheet</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C25934] dark:text-[#E0704E]" />
                  <span className="font-semibold font-sans text-sm">Initiate Collaboration / Contact Form</span>
                </div>
                <span className="text-[10px] text-slate-400">Message</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[#C25934] dark:text-[#E0704E] font-bold">@</span>
                  <span className="font-semibold font-sans text-sm">Copy Manoj&apos;s Direct Email ({PERSONAL_INFO.email})</span>
                </div>
                <span className="text-[10px] text-slate-400">{copied ? 'Copied!' : 'Click to copy'}</span>
              </button>

              <button
                onClick={() => {
                  onToggleDarkMode();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
                  <span className="font-semibold font-sans text-sm">Toggle Theme ({darkMode ? 'Light Canvas' : 'Obsidian Dark'})</span>
                </div>
                <span className="text-[10px] text-slate-400">Theme</span>
              </button>
            </div>
          )}

          {/* Case Studies */}
          {filteredProjects.length > 0 && (
            <div className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Case Studies ({filteredProjects.length})
              </div>
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(p);
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-[#C25934] dark:text-[#E0704E]" />
                    <div>
                      <div className="font-bold font-sans text-sm text-slate-950 dark:text-white">
                        {p.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {p.client} • {p.category}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              ))}
            </div>
          )}

          {/* Blog & Design Writing */}
          {filteredPosts.length > 0 && (
            <div className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Design Insights & Essays ({filteredPosts.length})
              </div>
              {filteredPosts.map((b) => (
                <button
                  key={b.id}
                  onClick={() => {
                    onClose();
                    onSelectPost(b);
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-emerald-500" />
                    <div>
                      <div className="font-bold font-sans text-sm text-slate-950 dark:text-white">
                        {b.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {b.category} • {b.readTime}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              ))}
            </div>
          )}

          {/* Fallback no results */}
          {query && filteredProjects.length === 0 && filteredPosts.length === 0 && (
            <div className="py-8 text-center text-slate-500 font-mono">
              No results found for &ldquo;{query}&rdquo;. Try searching for &quot;Nokia&quot;, &quot;Design Tokens&quot;, or &quot;Research&quot;.
            </div>
          )}
        </div>

        {/* Command Footer */}
        <div className="p-3 bg-slate-100 dark:bg-[#101626] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700">↵</kbd> Select</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700">ESC</kbd> Close</span>
          </div>
          <span className="text-[#C25934] dark:text-[#E0704E] font-bold">Manoj Manna • Lead UX Portfolio</span>
        </div>
      </div>
    </div>
  );
};

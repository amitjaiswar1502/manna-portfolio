'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { Sun, Moon, Menu, X, FileText, Mail, Search, Sparkles, Command } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenResume,
  onOpenContact,
  onOpenCommandPalette,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Heuristics', href: '#ux-audit-matrix' },
    { label: 'Experience', href: '#experience' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 dark:bg-[#0D0F12]/90 backdrop-blur-xl border-b border-stone-200/80 dark:border-stone-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand */}
          <a
            href="#"
            id="brand-logo"
            className="group flex items-center gap-3 focus:outline-hidden"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 flex items-center justify-center font-bold text-xs sm:text-sm tracking-wider font-mono group-hover:bg-[#C25934] dark:group-hover:bg-[#E0704E] dark:group-hover:text-white transition-all duration-200 shadow-2xs">
              MM
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-stone-950 dark:text-white text-sm sm:text-base leading-none tracking-tight group-hover:text-[#C25934] dark:group-hover:text-[#E0704E] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 font-mono">
                  {PERSONAL_INFO.title}
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" title="Available for strategic enterprise UX design roles" />
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-stone-200/60 dark:bg-stone-900/70 p-1 rounded-full border border-stone-300/60 dark:border-stone-800 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className="px-3.5 py-1.5 text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-white dark:hover:bg-stone-800 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Command Palette, Theme Toggle, Resume & Contact */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              id="nav-command-palette-btn"
              title="Search & Quick Actions (Cmd + K)"
              className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 text-xs font-mono text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-900/90 hover:bg-stone-200/80 dark:hover:bg-stone-800 border border-stone-300/70 dark:border-stone-800 rounded-full transition-all cursor-pointer shadow-2xs"
            >
              <Search className="w-3.5 h-3.5 text-[#C25934] dark:text-[#E0704E]" />
              <span className="hidden xl:inline text-[11px]">Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-bold font-mono bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-md text-stone-500 dark:text-stone-400">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              id="theme-toggle-btn"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 border border-stone-300/70 dark:border-stone-800 rounded-full transition-all cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-stone-700" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              id="nav-resume-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-300/80 dark:border-stone-800 rounded-full transition-colors shadow-2xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#C25934] dark:text-[#E0704E]" />
              <span>CV</span>
            </button>

            {/* Contact CTA */}
            <button
              onClick={onOpenContact}
              id="nav-contact-cta"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-semibold tracking-wide text-white bg-[#C25934] hover:bg-[#A84524] dark:bg-[#C25934] dark:hover:bg-[#D4653F] rounded-full shadow-xs hover:shadow-orange-900/25 transition-all active:scale-95 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Connect</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2 text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-900 border border-stone-300/70 dark:border-stone-800 rounded-full cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-stone-700" />}
            </button>
            <button
              onClick={onOpenCommandPalette}
              aria-label="Open Search"
              className="p-2 text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-900 border border-stone-300/70 dark:border-stone-800 rounded-full cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#C25934] dark:text-[#E0704E]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="p-2 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="sm:hidden border-b border-stone-200 dark:border-stone-800 bg-[#FAF8F5]/98 dark:bg-[#0D0F12]/98 backdrop-blur-2xl px-5 pt-3 pb-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-mono font-semibold text-stone-800 dark:text-stone-200 text-center bg-white dark:bg-stone-900"
            >
              Curriculum Vitae (PDF)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-full bg-[#C25934] hover:bg-[#A84524] text-white text-xs font-mono font-bold tracking-wide uppercase text-center shadow-sm"
            >
              Initiate Collaboration
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

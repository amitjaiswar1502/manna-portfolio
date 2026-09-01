'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Project, PROJECTS, UserPersona, JourneyStage, UserFlowStep } from '@/data/portfolio-data';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  BarChart3, 
  Palette, 
  Sliders, 
  Sparkles, 
  FileText, 
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Share2,
  Check,
  Layout,
  Maximize2,
  Minimize2,
  Code,
  Eye,
  Info,
  TrendingUp,
  AlertTriangle,
  UserCheck,
  Compass,
  Cpu,
  Monitor,
  Smartphone,
  Tablet,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Zap,
  ShieldCheck,
  HeartHandshake,
  Workflow
} from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

type ViewMode = 'deck' | 'document' | 'prototype';

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('deck');
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [showInspect, setShowInspect] = useState<boolean>(false);
  const [activeWireframeStage, setActiveWireframeStage] = useState<'lowFi' | 'midFi' | 'highFi'>('highFi');
  const [compareSliderPos, setCompareSliderPos] = useState<number>(50);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState<number>(0);
  const [activeFlowStep, setActiveFlowStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);
  const [prototypeActiveState, setPrototypeActiveState] = useState<boolean>(false);
  const [buttonState, setButtonState] = useState<'default' | 'hover' | 'active' | 'disabled'>('default');

  const contentContainerRef = useRef<HTMLDivElement>(null);

  const slideTitles = [
    '01. Project Brief & Metrics',
    '02. Problem & Hypothesis',
    '03. Persona & Empathy Map',
    '04. User Journey & Emotion Arc',
    '05. IA & User Decision Flow',
    '06. Wireframing & Evolution',
    '07. Before vs. After Impact',
    '08. Design System & Tokens',
    '09. Usability Testing (SUS)',
    '10. Business ROI & Takeaways'
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && viewMode === 'deck') {
        setActiveSlide((prev) => Math.min(prev + 1, slideTitles.length - 1));
      }
      if (e.key === 'ArrowLeft' && viewMode === 'deck') {
        setActiveSlide((prev) => Math.max(prev - 1, 0));
      }
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
  }, [isOpen, onClose, viewMode, slideTitles.length]);

  const [lastProjectId, setLastProjectId] = useState<string | null>(null);

  if (project && project.id !== lastProjectId) {
    setLastProjectId(project.id);
    setActiveSlide(0);
    setActiveJourneyIndex(0);
    setActiveFlowStep(1);
    setPrototypeActiveState(false);
  }

  if (!isOpen || !project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}#project-${project.slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (index: number) => {
    setActiveSlide(index);
    if (viewMode === 'document') {
      const sectionEl = document.getElementById(`case-study-sec-${index}`);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-2 md:p-4 bg-slate-950/85 backdrop-blur-md transition-all">
      <div 
        id="figma-case-study-template-modal"
        className="relative w-full max-w-7xl h-full sm:h-[94vh] flex flex-col bg-slate-900 border border-slate-800 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden text-slate-100 font-sans"
      >
        {/* ================= FIGMA CANVAS TOP TOOLBAR ================= */}
        <header className="shrink-0 flex items-center justify-between px-3 sm:px-6 py-2.5 bg-slate-950 border-b border-slate-800 text-xs font-mono select-none">
          {/* Left: Figma Brand & Breadcrumbs */}
          <div className="flex items-center gap-2 sm:gap-3 truncate">
            {/* Figma Community Template Icon */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-orange-600/20 border border-orange-500/30 text-[#E0704E] font-bold shrink-0">
              <Layout className="w-3.5 h-3.5 text-[#E0704E]" />
              <span className="hidden sm:inline text-[11px] tracking-wide">Figma UX Template</span>
            </div>

            <span className="text-slate-600 hidden sm:inline">/</span>

            <span className="text-slate-400 truncate hidden md:inline font-semibold">
              {project.client}
            </span>

            <span className="text-slate-600 hidden md:inline">/</span>

            <span className="text-white font-bold truncate">
              {project.title}
            </span>

            {/* Active Frame Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-[10px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Frame: {slideTitles[activeSlide]}</span>
              <span className="text-slate-500">• 1440×900 • Auto-Layout</span>
            </div>
          </div>

          {/* Center: View Mode Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 shrink-0 mx-2">
            <button
              onClick={() => setViewMode('deck')}
              title="Figma Deck Presentation Mode"
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                viewMode === 'deck'
                  ? 'bg-[#C25934] text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Deck Canvas</span>
            </button>
            <button
              onClick={() => setViewMode('document')}
              title="Editorial Narrative Document Mode"
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                viewMode === 'document'
                  ? 'bg-[#C25934] text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Narrative Doc</span>
            </button>
            <button
              onClick={() => setViewMode('prototype')}
              title="Interactive Prototype Simulator"
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                viewMode === 'prototype'
                  ? 'bg-[#C25934] text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Prototype</span>
            </button>
          </div>

          {/* Right Controls: Inspect, Zoom, Nav, Share, Close */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Inspect Toggle */}
            <button
              onClick={() => setShowInspect((prev) => !prev)}
              title="Toggle Figma Inspect & Tokens Panel"
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer flex items-center gap-1 text-[11px] ${
                showInspect 
                  ? 'bg-orange-600/20 border-orange-500/40 text-[#E0704E]' 
                  : 'border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Inspect</span>
            </button>

            {/* Prev / Next Project */}
            <div className="hidden sm:flex items-center border border-slate-800 rounded-lg overflow-hidden">
              <button
                onClick={() => onSelectProject(prevProject)}
                title={`Previous: ${prevProject.title}`}
                className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <div className="w-px h-3.5 bg-slate-800" />
              <button
                onClick={() => onSelectProject(nextProject)}
                title={`Next: ${nextProject.title}`}
                className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Share */}
            <button
              onClick={handleCopyLink}
              title="Copy deep-link"
              className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg border border-slate-800 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              title="Close Case Study Viewer (Esc)"
              className="p-1.5 hover:bg-red-500/20 hover:text-red-400 text-slate-400 rounded-lg border border-slate-800 transition-colors cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* ================= MAIN WORKSPACE AREA ================= */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* ================= LEFT SLIDE NAVIGATOR (FOR DECK & DOC) ================= */}
          <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-slate-950/80 border-r border-slate-800 overflow-y-auto select-none p-3 space-y-1 font-mono text-xs">
            <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
              <span>Frames ({slideTitles.length})</span>
              <span className="text-[#E0704E]">1440px</span>
            </div>

            {slideTitles.map((title, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(idx)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between group cursor-pointer ${
                  activeSlide === idx
                    ? 'bg-[#C25934] text-white font-bold shadow-xs'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className={`w-1.5 h-1.5 rounded-full ${activeSlide === idx ? 'bg-white' : 'bg-slate-600 group-hover:bg-slate-400'}`} />
                  <span className="truncate">{title}</span>
                </div>
                {activeSlide === idx && (
                  <span className="text-[10px] bg-orange-700/80 px-1.5 py-0.5 rounded text-orange-100 shrink-0">
                    Active
                  </span>
                )}
              </button>
            ))}

            {/* Quick Specs Box */}
            <div className="mt-auto pt-4 border-t border-slate-800/80 px-2 space-y-2 text-[11px] text-slate-400 font-sans">
              <div className="flex justify-between">
                <span className="text-slate-500 font-mono">Design System:</span>
                <span className="text-slate-200 font-semibold">{project.toolsUsed.includes('Design System') ? 'Figma Tokens' : 'Component Kit'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-mono">Typography:</span>
                <span className="text-slate-200 font-semibold truncate max-w-[120px]" title={project.designSystemTokens.typography}>
                  {project.designSystemTokens.typography.split(' ')[0]}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-mono">Components:</span>
                <span className="text-slate-200 font-semibold">{project.designSystemTokens.componentsCount}+ Variants</span>
              </div>
            </div>
          </aside>

          {/* ================= CENTER CANVAS VIEWPORT ================= */}
          <main 
            ref={contentContainerRef}
            className="flex-1 overflow-y-auto bg-slate-900/90 p-3 sm:p-6 lg:p-8 space-y-8 scroll-smooth"
          >
            {/* ----------------- MODE 1: FIGMA DECK CANVAS VIEW ----------------- */}
            {viewMode === 'deck' && (
              <div className="max-w-5xl mx-auto space-y-6">
                {/* Slide Frame Header & Canvas Stepper */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-orange-600/20 text-[#E0704E] font-bold">
                      Frame {activeSlide + 1} of {slideTitles.length}
                    </span>
                    <span className="text-slate-400 font-semibold">
                      {slideTitles[activeSlide]}
                    </span>
                  </div>

                  {/* Stepper Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveSlide((prev) => Math.max(prev - 1, 0))}
                      disabled={activeSlide === 0}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Prev Frame</span>
                    </button>
                    <button
                      onClick={() => setActiveSlide((prev) => Math.min(prev + 1, slideTitles.length - 1))}
                      disabled={activeSlide === slideTitles.length - 1}
                      className="px-2.5 py-1 rounded bg-[#C25934] hover:bg-[#D96B43] text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Next Frame</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* THE ACTIVE FRAME CANVAS CARD */}
                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden">
                  {/* Subtle Figma Frame Tag Corner */}
                  <div className="absolute top-0 right-0 px-3 py-1 bg-slate-900 border-b border-l border-slate-800 rounded-bl-xl font-mono text-[10px] text-slate-500">
                    #Frame-0{activeSlide + 1} • Auto-Layout
                  </div>

                  {/* SLIDE 0: HERO & EXECUTIVE BRIEF */}
                  {activeSlide === 0 && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded bg-orange-600/20 text-[#E0704E] border border-orange-500/30">
                            {project.heroBadge}
                          </span>
                          <span className="text-xs font-mono text-slate-400">
                            {project.client} • {project.year} • {project.timeline}
                          </span>
                        </div>

                        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                          {project.title}
                        </h1>

                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                          {project.tagline}
                        </p>
                      </div>

                      {/* 4 Hero Stat Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                            <div className="font-display font-extrabold text-2xl text-[#E0704E]">
                              {m.value}
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1">
                              {m.label}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5 font-sans">
                              {m.description}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Project Overview Box */}
                      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E0704E] flex items-center gap-2">
                          <Info className="w-3.5 h-3.5" />
                          Executive Project Brief
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed font-sans">
                          {project.overview}
                        </p>
                      </div>

                      {/* Metadata Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
                        <div>
                          <span className="text-slate-500 uppercase block font-bold text-[10px]">My Role</span>
                          <span className="font-semibold text-white mt-0.5 block">{project.role}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 uppercase block font-bold text-[10px]">Timeline</span>
                          <span className="font-semibold text-white mt-0.5 block">{project.timeline}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 uppercase block font-bold text-[10px]">Domain</span>
                          <span className="font-semibold text-white mt-0.5 block">{project.category}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 uppercase block font-bold text-[10px]">Core Stack</span>
                          <span className="font-semibold text-white mt-0.5 block">{project.toolsUsed.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 1: PROBLEM & HYPOTHESIS */}
                  {activeSlide === 1 && (
                    <div className="space-y-6">
                      <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/30 space-y-2">
                        <div className="flex items-center gap-2 text-red-400 font-mono font-bold text-xs uppercase tracking-wider">
                          <AlertTriangle className="w-4 h-4" />
                          The Friction Problem Statement
                        </div>
                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                          {project.problemStatement}
                        </p>
                      </div>

                      {project.hypothesis && (
                        <div className="p-5 rounded-xl bg-orange-500/10 border border-orange-500/30 space-y-2">
                          <div className="flex items-center gap-2 text-[#E0704E] font-mono font-bold text-xs uppercase tracking-wider">
                            <Sparkles className="w-4 h-4" />
                            Core Design Hypothesis
                          </div>
                          <p className="text-sm text-slate-200 leading-relaxed font-sans">
                            {project.hypothesis}
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                          <h4 className="text-sm font-bold text-white flex items-center gap-2 font-display">
                            <CheckCircle2 className="w-4 h-4 text-[#E0704E]" />
                            Key User Needs
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                            {project.userNeeds.map((need, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#E0704E] font-bold">•</span>
                                <span>{need}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                          <h4 className="text-sm font-bold text-white flex items-center gap-2 font-display">
                            <TrendingUp className="w-4 h-4 text-emerald-400" />
                            Target Business Goals
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                            {project.businessGoals.map((goal, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-emerald-400 font-bold">•</span>
                                <span>{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 2: USER PERSONA & EMPATHY MAP */}
                  {activeSlide === 2 && (
                    <div className="space-y-6">
                      {project.persona ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl bg-slate-900 border border-slate-800">
                          {/* Persona Bio Column */}
                          <div className="space-y-4 md:border-r border-slate-800 md:pr-6">
                            <div className="flex items-center gap-3">
                              <div className="w-14 h-14 rounded-2xl bg-[#C25934] text-white flex items-center justify-center font-extrabold text-lg font-mono shadow-md">
                                {project.persona.avatarInitials}
                              </div>
                              <div>
                                <h3 className="text-base font-bold text-white font-display">
                                  {project.persona.name}
                                </h3>
                                <div className="text-xs text-[#E0704E] font-mono">
                                  {project.persona.role}
                                </div>
                                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                                  {project.persona.age} • {project.persona.experience}
                                </div>
                              </div>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs italic text-slate-300">
                              {project.persona.quote}
                            </div>

                            {/* Traits Gauges */}
                            <div className="space-y-2 pt-2">
                              <span className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">
                                Empathy Attributes
                              </span>
                              {project.persona.traits.map((trait, tIdx) => (
                                <div key={tIdx} className="space-y-1">
                                  <div className="flex justify-between text-[11px] font-mono text-slate-300">
                                    <span>{trait.label}</span>
                                    <span className="text-[#E0704E]">{trait.score}%</span>
                                  </div>
                                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                    <div 
                                      className="h-full rounded-full bg-[#C25934]" 
                                      style={{ width: `${trait.score}%` }} 
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Persona Goals & Frustrations */}
                          <div className="md:col-span-2 space-y-4">
                            <div className="space-y-2">
                              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px] uppercase font-bold">
                                Archetype: {project.persona.archetype}
                              </span>
                              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                                {project.persona.bio}
                              </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                                <h4 className="text-xs font-bold text-emerald-400 font-mono uppercase flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  Core Goals
                                </h4>
                                <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                                  {project.persona.goals.map((g, gi) => (
                                    <li key={gi} className="flex items-start gap-1.5">
                                      <span className="text-emerald-400">•</span>
                                      <span>{g}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                                <h4 className="text-xs font-bold text-red-400 font-mono uppercase flex items-center gap-1.5">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  Pain Points
                                </h4>
                                <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                                  {project.persona.frustrations.map((f, fi) => (
                                    <li key={fi} className="flex items-start gap-1.5">
                                      <span className="text-red-400">•</span>
                                      <span>{f}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-center text-slate-400">
                          Persona synthesized across user cohorts.
                        </div>
                      )}

                      {/* Empathy Map Matrix */}
                      {project.empathyMap && (
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                            <HeartHandshake className="w-4 h-4 text-[#E0704E]" />
                            Empathy Map Synthesis
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                              <span className="text-xs font-mono font-bold uppercase text-[#E0704E] block">💬 Says</span>
                              <ul className="space-y-1.5 text-xs text-slate-300 font-sans italic">
                                {project.empathyMap.says.map((s, i) => (
                                  <li key={i}>{s}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                              <span className="text-xs font-mono font-bold uppercase text-amber-400 block">🧠 Thinks</span>
                              <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                                {project.empathyMap.thinks.map((t, i) => (
                                  <li key={i}>• {t}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                              <span className="text-xs font-mono font-bold uppercase text-orange-400 block">🏃 Does</span>
                              <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                                {project.empathyMap.does.map((d, i) => (
                                  <li key={i}>• {d}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                              <span className="text-xs font-mono font-bold uppercase text-emerald-400 block">❤️ Feels</span>
                              <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                                {project.empathyMap.feels.map((f, i) => (
                                  <li key={i}>• {f}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* SLIDE 3: USER JOURNEY MAP & EMOTION ARC */}
                  {activeSlide === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                          <Compass className="w-5 h-5 text-[#E0704E]" />
                          End-to-End User Journey & Emotional Arc
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 font-sans">
                          Mapping operator friction, cognitive hurdles, and design opportunities across every interaction touchpoint.
                        </p>
                      </div>

                      {project.journeyMap && project.journeyMap.length > 0 ? (
                        <div className="space-y-4">
                          {/* Stage Selector Pills */}
                          <div className="flex border-b border-slate-800 overflow-x-auto gap-2 pb-2">
                            {project.journeyMap.map((stage, sIdx) => (
                              <button
                                key={sIdx}
                                onClick={() => setActiveJourneyIndex(sIdx)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                                  activeJourneyIndex === sIdx
                                    ? 'bg-[#C25934] text-white'
                                    : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                {stage.stage}
                              </button>
                            ))}
                          </div>

                          {/* Selected Journey Stage Card */}
                          {project.journeyMap[activeJourneyIndex] && (
                            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-[#E0704E] font-display">
                                  {project.journeyMap[activeJourneyIndex].stage}
                                </span>
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono">
                                  <span className="text-slate-400">Emotion:</span>
                                  <span className="font-bold text-emerald-400">
                                    {'★'.repeat(project.journeyMap[activeJourneyIndex].emotionScore)}
                                    {'☆'.repeat(5 - project.journeyMap[activeJourneyIndex].emotionScore)}
                                  </span>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500">User Action</span>
                                  <p className="text-xs sm:text-sm text-slate-200 font-sans">
                                    {project.journeyMap[activeJourneyIndex].userAction}
                                  </p>
                                </div>

                                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500">Mindset / Inner Quote</span>
                                  <p className="text-xs sm:text-sm italic text-orange-200 font-sans">
                                    {project.journeyMap[activeJourneyIndex].mindset}
                                  </p>
                                </div>

                                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 space-y-1.5">
                                  <span className="text-[10px] font-mono uppercase font-bold text-red-400">Friction & Pain Point</span>
                                  <p className="text-xs sm:text-sm text-red-200 font-sans">
                                    {project.journeyMap[activeJourneyIndex].painPoint}
                                  </p>
                                </div>

                                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
                                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-400">UX Design Opportunity</span>
                                  <p className="text-xs sm:text-sm text-emerald-200 font-sans">
                                    {project.journeyMap[activeJourneyIndex].opportunity}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-center text-slate-400">
                          Journey maps synthesized across user research sessions.
                        </div>
                      )}
                    </div>
                  )}

                  {/* SLIDE 4: IA & USER FLOW */}
                  {activeSlide === 4 && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Layers className="w-5 h-5 text-[#E0704E]" />
                          <h3 className="text-lg font-bold text-white font-display">
                            {project.informationArchitecture.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 font-sans">
                          {project.informationArchitecture.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1 font-mono">
                          {project.informationArchitecture.modules.map((mod, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-medium text-slate-200">
                              {mod}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Interactive Step-by-Step Decision Flow */}
                      {project.userFlowSteps && project.userFlowSteps.length > 0 && (
                        <div className="space-y-3 pt-4 border-t border-slate-800">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E0704E] flex items-center gap-2">
                            <Workflow className="w-4 h-4" />
                            Optimized User Decision Flow
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {project.userFlowSteps.map((step, idx) => (
                              <div 
                                key={idx}
                                onClick={() => setActiveFlowStep(step.stepNumber)}
                                className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                                  activeFlowStep === step.stepNumber
                                    ? 'bg-orange-600/20 border-[#C25934] shadow-md ring-1 ring-[#C25934]'
                                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                                }`}
                              >
                                <div className="flex items-center justify-between text-xs font-mono">
                                  <span className="font-bold text-[#E0704E]">Step 0{step.stepNumber}</span>
                                  <span className="text-[10px] text-slate-500 uppercase">{step.phase}</span>
                                </div>
                                <div className="text-xs font-semibold text-white font-sans">
                                  {step.action}
                                </div>
                                {step.decisionPoint && (
                                  <div className="text-[11px] text-amber-300/90 font-mono bg-amber-500/10 p-1.5 rounded">
                                    ❓ {step.decisionPoint}
                                  </div>
                                )}
                                <div className="text-[11px] text-slate-400 font-sans">
                                  ↳ {step.systemFeedback}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* SLIDE 5: WIREFRAMING & EVOLUTION */}
                  {activeSlide === 5 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white font-display">
                          Iterative Wireframing & Structural Evolution
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 font-sans">
                          Tracing the evolution of the interface from low-fidelity exploratory concepts to high-fidelity component specs.
                        </p>
                      </div>

                      {project.wireframeEvolution ? (
                        <div className="space-y-4">
                          {/* Stage Tabs */}
                          <div className="flex border-b border-slate-800 gap-2 pb-2 font-mono text-xs">
                            <button
                              onClick={() => setActiveWireframeStage('lowFi')}
                              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                                activeWireframeStage === 'lowFi'
                                  ? 'bg-[#C25934] text-white'
                                  : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              1. Low-Fi Wireframe
                            </button>
                            <button
                              onClick={() => setActiveWireframeStage('midFi')}
                              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                                activeWireframeStage === 'midFi'
                                  ? 'bg-[#C25934] text-white'
                                  : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              2. Mid-Fi Architecture
                            </button>
                            <button
                              onClick={() => setActiveWireframeStage('highFi')}
                              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                                activeWireframeStage === 'highFi'
                                  ? 'bg-[#C25934] text-white'
                                  : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              3. High-Fi Interactive
                            </button>
                          </div>

                          {/* Active Wireframe Card */}
                          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                            <div className="space-y-1">
                              <h4 className="text-base font-bold text-[#E0704E] font-display">
                                {project.wireframeEvolution[activeWireframeStage].title}
                              </h4>
                              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                                {project.wireframeEvolution[activeWireframeStage].description}
                              </p>
                            </div>

                            <div className="space-y-2 pt-2">
                              <span className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">
                                Key Design Decisions & Validation
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {project.wireframeEvolution[activeWireframeStage].highlights.map((h, i) => (
                                  <div key={i} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-sans flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E0704E] shrink-0 mt-0.5" />
                                    <span>{h}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-center text-slate-400">
                          Wireframe iterations tested across agile sprint cycles.
                        </div>
                      )}
                    </div>
                  )}

                  {/* SLIDE 6: BEFORE VS AFTER IMPACT */}
                  {activeSlide === 6 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white font-display">
                          Before vs. After Transformation Analysis
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 font-sans">
                          Comparative analysis of legacy workflow bottlenecks versus redesigned human-centered outcomes.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Before Column */}
                        <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/30 space-y-4">
                          <div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-red-500/20 text-red-400">
                              Legacy Baseline Friction
                            </span>
                            <h4 className="text-base font-bold text-white mt-2 font-display">
                              {project.beforeAfter.beforeTitle}
                            </h4>
                            <p className="text-xs text-slate-300 mt-1 font-sans">
                              {project.beforeAfter.beforeDesc}
                            </p>
                          </div>

                          <div className="space-y-2 border-t border-red-500/20 pt-3">
                            <span className="text-[10px] font-mono uppercase font-bold text-red-400 tracking-wider">
                              Major Pain Points:
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                              {project.beforeAfter.beforeFriction.map((f, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-red-400 font-bold">✕</span>
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* After Column */}
                        <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-4">
                          <div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-400">
                              Redesigned UX Solution
                            </span>
                            <h4 className="text-base font-bold text-white mt-2 font-display">
                              {project.beforeAfter.afterTitle}
                            </h4>
                            <p className="text-xs text-slate-300 mt-1 font-sans">
                              {project.beforeAfter.afterDesc}
                            </p>
                          </div>

                          <div className="space-y-2 border-t border-emerald-500/20 pt-3">
                            <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 tracking-wider">
                              Measurable Improvements:
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                              {project.beforeAfter.afterWins.map((w, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{w}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 7: DESIGN SYSTEM & TOKENS */}
                  {activeSlide === 7 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                          <Palette className="w-5 h-5 text-[#E0704E]" />
                          Figma Design System Tokens & Atomic Kit
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 font-sans">
                          A synchronized token architecture connecting Figma variables with production React/CSS tokens.
                        </p>
                      </div>

                      {/* Color Palette Tokens */}
                      <div className="space-y-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                          Semantic Color Tokens
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                          {project.designSystemTokens.colorPalette.map((col, idx) => (
                            <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2 font-mono text-xs">
                              <div 
                                className="w-full h-12 rounded-lg border border-white/10 shadow-xs" 
                                style={{ backgroundColor: col.hex }} 
                              />
                              <div>
                                <div className="font-bold text-white truncate">{col.name}</div>
                                <div className="text-[11px] text-slate-400">{col.hex}</div>
                                <div className="text-[10px] text-slate-500 truncate mt-0.5">{col.role}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Interactive Component Sandbox */}
                      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E0704E]">
                            Component State Specimen (Button Tokens)
                          </span>
                          <div className="flex gap-1 font-mono text-[10px]">
                            {(['default', 'hover', 'active', 'disabled'] as const).map((st) => (
                              <button
                                key={st}
                                onClick={() => setButtonState(st)}
                                className={`px-2 py-1 rounded capitalize transition-colors cursor-pointer ${
                                  buttonState === st ? 'bg-[#C25934] text-white' : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                {st}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* State Sandbox Preview */}
                        <div className="p-6 rounded-lg bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-center gap-4">
                          <button
                            disabled={buttonState === 'disabled'}
                            className={`px-5 py-2.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                              buttonState === 'default' ? 'bg-[#C25934] text-white hover:bg-[#D96B43]' :
                              buttonState === 'hover' ? 'bg-[#D96B43] text-white shadow-lg ring-2 ring-orange-400/50' :
                              buttonState === 'active' ? 'bg-[#A84524] text-white scale-95' :
                              'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
                            }`}
                          >
                            Primary Action ({buttonState})
                          </button>

                          <button
                            disabled={buttonState === 'disabled'}
                            className={`px-5 py-2.5 rounded-lg font-mono text-xs font-bold border transition-all cursor-pointer ${
                              buttonState === 'disabled'
                                ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                                : 'border-slate-700 text-slate-200 hover:bg-slate-800'
                            }`}
                          >
                            Secondary Ghost
                          </button>
                        </div>
                      </div>

                      {/* Design Principles */}
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                          Design System Principles
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                          {project.designSystemTokens.principles.map((pr, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#E0704E] font-bold">•</span>
                              <span>{pr}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 8: USABILITY TESTING (SUS) */}
                  {activeSlide === 8 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-emerald-400" />
                          Empirical Usability Validation & SUS Benchmark
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 font-sans">
                          Validated across {project.usabilityTesting.participants} participants in {project.usabilityTesting.sessions} moderated & unmoderated research rounds.
                        </p>
                      </div>

                      {/* SUS Comparison Gauge Box */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-center">
                          <span className="text-xs font-mono uppercase text-slate-500 font-bold">
                            Legacy Baseline SUS
                          </span>
                          <div className="font-display font-extrabold text-4xl text-red-400">
                            {project.usabilityTesting.susScoreBefore}
                            <span className="text-base font-normal text-slate-500"> / 100</span>
                          </div>
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-red-500/10 text-red-400 border border-red-500/20">
                            Below Average (Grade F)
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-center">
                          <span className="text-xs font-mono uppercase text-emerald-400 font-bold">
                            Redesigned Platform SUS
                          </span>
                          <div className="font-display font-extrabold text-4xl text-emerald-400">
                            {project.usabilityTesting.susScoreAfter}
                            <span className="text-base font-normal text-slate-500"> / 100</span>
                          </div>
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                            Top 10% Industry Benchmark (Grade A)
                          </span>
                        </div>
                      </div>

                      {/* Verbatim Feedback Quote */}
                      <div className="p-5 rounded-xl bg-orange-500/10 border border-orange-500/30 space-y-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E0704E]">
                          Verbatim Participant Quote
                        </span>
                        <blockquote className="text-sm sm:text-base text-slate-200 italic font-sans">
                          {project.usabilityTesting.keyFeedback}
                        </blockquote>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 9: BUSINESS ROI & TAKEAWAYS */}
                  {activeSlide === 9 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-[#E0704E]" />
                          Business ROI, Key Learnings & Future Roadmap
                        </h3>
                      </div>

                      {/* Key Learnings */}
                      {project.keyLearnings && (
                        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E0704E]">
                            Core UX & Architectural Takeaways
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                            {project.keyLearnings.map((l, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#E0704E] font-bold">•</span>
                                <span>{l}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Next Steps Roadmap */}
                      {project.nextSteps && (
                        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                            Future Iteration & Scaling Roadmap
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                            {project.nextSteps.map((ns, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-emerald-400 font-bold">•</span>
                                <span>{ns}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Next Project Footer Link */}
                      <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
                        <div>
                          <span className="text-[10px] font-mono uppercase text-slate-500 block">Next Case Study</span>
                          <span className="text-sm font-bold text-white">{nextProject.title}</span>
                        </div>
                        <button
                          onClick={() => onSelectProject(nextProject)}
                          className="px-4 py-2 rounded-lg bg-[#C25934] hover:bg-[#D96B43] text-white font-mono text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>View Next</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ----------------- MODE 2: EDITORIAL NARRATIVE DOCUMENT VIEW ----------------- */}
            {viewMode === 'document' && (
              <div className="max-w-4xl mx-auto space-y-12 pb-16">
                {/* Document Header */}
                <div className="space-y-4 border-b border-slate-800 pb-8">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-[#C25934] text-white">
                      {project.heroBadge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.client} • {project.year}
                    </span>
                  </div>

                  <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    {project.title}
                  </h1>

                  <p className="text-lg text-slate-300 leading-relaxed font-sans">
                    {project.tagline}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                        <div className="font-display font-extrabold text-2xl text-[#E0704E]">{m.value}</div>
                        <div className="text-xs font-bold text-slate-200 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 01. Context & Problem */}
                <section id="case-study-sec-0" className="space-y-4 scroll-mt-20">
                  <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C25934]" />
                    01. Project Background & Context
                  </h2>
                  <p className="text-slate-300 leading-relaxed font-sans">
                    {project.overview}
                  </p>
                </section>

                {/* 02. Problem & Hypothesis */}
                <section id="case-study-sec-1" className="space-y-4 scroll-mt-20">
                  <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    02. Problem Statement & Hypothesis
                  </h2>
                  <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/30 text-slate-200">
                    {project.problemStatement}
                  </div>
                </section>

                {/* 03. Persona */}
                {project.persona && (
                  <section id="case-study-sec-2" className="space-y-4 scroll-mt-20">
                    <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      03. Target User & Persona
                    </h2>
                    <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#C25934] text-white flex items-center justify-center font-bold font-mono">
                          {project.persona.avatarInitials}
                        </div>
                        <div>
                          <div className="font-bold text-white">{project.persona.name}</div>
                          <div className="text-xs text-[#E0704E] font-mono">{project.persona.role}</div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-300">{project.persona.bio}</p>
                    </div>
                  </section>
                )}

                {/* 04. Usability Testing */}
                <section id="case-study-sec-8" className="space-y-4 scroll-mt-20">
                  <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    04. Empirical Validation & SUS Score
                  </h2>
                  <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-around text-center">
                    <div>
                      <div className="text-xs font-mono text-slate-500">Baseline SUS</div>
                      <div className="text-3xl font-extrabold text-red-400">{project.usabilityTesting.susScoreBefore} / 100</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-600" />
                    <div>
                      <div className="text-xs font-mono text-emerald-400">Post-Launch SUS</div>
                      <div className="text-3xl font-extrabold text-emerald-400">{project.usabilityTesting.susScoreAfter} / 100</div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* ----------------- MODE 3: INTERACTIVE PROTOTYPE SIMULATOR ----------------- */}
            {viewMode === 'prototype' && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-bold text-white">Live Prototype Engine: {project.interactivePreview.screenTitle}</span>
                  </div>
                  <span className="text-slate-500">Viewport: 1440 × 900</span>
                </div>

                {/* Prototype Display Frame */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white font-display">
                        {project.interactivePreview.screenTitle}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        Interactive telemetry simulation & operational controls
                      </p>
                    </div>

                    <button
                      onClick={() => setPrototypeActiveState((prev) => !prev)}
                      className="px-4 py-2 rounded-lg bg-[#C25934] hover:bg-[#D96B43] text-white font-mono text-xs font-bold transition-all cursor-pointer shadow-md"
                    >
                      {prototypeActiveState ? 'Reset Simulation' : project.interactivePreview.sampleAction}
                    </button>
                  </div>

                  {/* Simulated Telemetry Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.interactivePreview.stats.map((st, sI) => (
                      <div key={sI} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1 font-mono">
                        <span className="text-[11px] text-slate-500 uppercase">{st.label}</span>
                        <div className="text-xl font-bold text-white">
                          {prototypeActiveState && sI === 0 ? 'Optimal (Simulated)' : st.value}
                        </div>
                        {st.trend && (
                          <div className="text-xs text-emerald-400">{st.trend}</div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Interactive Status Display */}
                  <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Telemetry Stream Status:</span>
                      <span className="text-emerald-400 font-bold">Connected (WebSocket 60fps)</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Active Simulation Node:</span>
                      <span className="text-[#E0704E] font-semibold">{project.slug}-core-01</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* ================= RIGHT FIGMA INSPECT & TOKENS PANEL ================= */}
          {showInspect && (
            <aside className="w-72 shrink-0 bg-slate-950 border-l border-slate-800 p-4 space-y-5 overflow-y-auto font-mono text-xs select-none">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-[#E0704E]" />
                  Figma Inspect Specs
                </span>
                <button
                  onClick={() => setShowInspect(false)}
                  className="text-slate-500 hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Frame Geometry */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-500">Geometry</span>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Width:</span>
                    <span>1440 px</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Height:</span>
                    <span>900 px (Auto)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Padding:</span>
                    <span>32 px</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Corner Radius:</span>
                    <span>16 px</span>
                  </div>
                </div>
              </div>

              {/* Typography Specs */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-500">Typography</span>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1 text-slate-300">
                  <div className="text-white font-bold truncate">{project.designSystemTokens.typography}</div>
                  <div className="text-[11px] text-slate-400">Scale: Major Second (1.125)</div>
                  <div className="text-[11px] text-slate-400">Baseline: 16px / Line Height: 1.5</div>
                </div>
              </div>

              {/* Active Color Palette */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-500">Active Palette Tokens</span>
                <div className="space-y-1.5">
                  {project.designSystemTokens.colorPalette.slice(0, 4).map((c, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded" style={{ backgroundColor: c.hex }} />
                        <span className="text-slate-300 text-[11px] truncate max-w-[90px]">{c.name}</span>
                      </div>
                      <span className="text-slate-400 text-[10px]">{c.hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accessibility Score */}
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-400">WCAG AA / AAA Status</span>
                <div className="text-xs text-slate-200">
                  Contrast ratio 7.2:1 (Passes AAA text contrast for 24/7 dark-mode ops).
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

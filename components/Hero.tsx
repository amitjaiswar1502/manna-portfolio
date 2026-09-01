'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { 
  ArrowRight, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Sliders, 
  Activity, 
  FileText,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  Gauge,
  Radio
} from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onExploreProcess: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onExploreProcess,
  onOpenContact,
  onOpenResume,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgGlowY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.55]);

  // Interactive Live Design Token & Telemetry Engine state
  const [activeThemeToken, setActiveThemeToken] = useState<'nokia' | 'itron' | 'manipal' | 'ega'>('nokia');
  const [activeTab, setActiveTab] = useState<'telemetry' | 'tokens'>('telemetry');
  const [density, setDensity] = useState<'comfortable' | 'compact'>('comfortable');
  const [isAlertActive, setIsAlertActive] = useState(false);

  const themeColors = {
    'nokia': { 
      primary: '#C25934', 
      bg: 'bg-[#C25934]', 
      text: 'text-[#C25934] dark:text-[#E0704E]', 
      border: 'border-[#C25934]', 
      label: 'Nokia NOC', 
      fullName: 'Telecom NOC Engine',
      metric: '0.84s Triage'
    },
    'itron': { 
      primary: '#15803D', 
      bg: 'bg-emerald-700', 
      text: 'text-emerald-700 dark:text-emerald-400', 
      border: 'border-emerald-700', 
      label: 'Itron Grid', 
      fullName: 'Smart Grid IoT',
      metric: '100% Sync'
    },
    'manipal': { 
      primary: '#9A3412', 
      bg: 'bg-orange-800', 
      text: 'text-orange-800 dark:text-orange-400', 
      border: 'border-orange-800', 
      label: 'Manipal', 
      fullName: 'Enterprise EdTech LXP',
      metric: '91 SUS'
    },
    'ega': { 
      primary: '#D97706', 
      bg: 'bg-amber-600', 
      text: 'text-amber-600 dark:text-amber-400', 
      border: 'border-amber-600', 
      label: 'EGA Smelter', 
      fullName: 'Industrial Plant Ops',
      metric: 'Zero Incidents'
    },
  };

  const currentTheme = themeColors[activeThemeToken];

  // Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const consoleVariants: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.15,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      id="hero-section" 
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <motion.div 
        style={{ y: bgGlowY }}
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#C25934]/10 via-amber-600/5 to-transparent blur-3xl opacity-80 dark:opacity-40" 
      />

      <motion.div 
        style={{ opacity: heroOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Status & Domain Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-stone-100 dark:bg-stone-900/90 border border-stone-300/70 dark:border-stone-800 text-xs font-mono font-medium text-stone-700 dark:text-stone-300 shadow-2xs backdrop-blur-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C25934] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C25934]" />
                </span>
                <span className="font-semibold text-stone-950 dark:text-white uppercase tracking-wider text-[11px]">Senior UX Designer</span>
                <span className="text-stone-300 dark:text-stone-700">/</span>
                <span className="text-stone-600 dark:text-stone-400">8+ Yrs Enterprise Experience</span>
                <span className="text-stone-300 dark:text-stone-700 hidden sm:inline">/</span>
                <span className="text-[#C25934] dark:text-[#E0704E] font-semibold hidden sm:inline">Capgemini & Manipal</span>
              </div>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-stone-950 dark:text-white leading-[1.1]"
            >
              Architecting scalable enterprise platforms & telemetry systems.
            </motion.h1>

            {/* Subtext Paragraph */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl font-sans"
            >
              Hi, I’m <span className="font-semibold text-stone-950 dark:text-white">Manoj Manna</span>. I translate dense telemetry nodes, mission-critical NOC consoles, and EdTech platforms into high-velocity, human-centered systems grounded in empirical usability metrics.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                onClick={onExploreWork}
                id="hero-explore-work-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[#C25934] hover:bg-[#A84524] dark:bg-[#C25934] dark:hover:bg-[#D4653F] rounded-full shadow-xs hover:shadow-orange-950/25 transition-all active:scale-95 cursor-pointer"
              >
                <span>Selected Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProcess}
                id="hero-explore-process-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800/80 border border-stone-300/80 dark:border-stone-800 rounded-full transition-all shadow-2xs cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#C25934] dark:text-[#E0704E]" />
                <span>5-Phase UX Process</span>
              </button>

              <button
                onClick={onOpenResume}
                id="hero-resume-quick-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-stone-400" />
                <span>Resume (PDF)</span>
              </button>
            </motion.div>

            {/* Enterprise Client Badges */}
            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t border-stone-200/80 dark:border-stone-800"
            >
              <div className="text-[11px] font-mono font-medium uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
                Proven Enterprise & Global Engagements
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-700 dark:text-stone-300">
                <span className="px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-300/60 dark:border-stone-800 flex items-center gap-2 whitespace-nowrap shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#C25934]" />
                  Nokia Telecom NOC
                </span>
                <span className="px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-300/60 dark:border-stone-800 flex items-center gap-2 whitespace-nowrap shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Itron Smart Grid
                </span>
                <span className="px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-300/60 dark:border-stone-800 flex items-center gap-2 whitespace-nowrap shrink-0">
                  <span className="w-2 h-2 rounded-full bg-orange-800" />
                  Manipal Global EdTech
                </span>
                <span className="px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-300/60 dark:border-stone-800 flex items-center gap-2 whitespace-nowrap shrink-0">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  EGA Smelter Operations
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Industrial Design Token & Telemetry Console */}
          <motion.div 
            variants={consoleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-3xl bg-white dark:bg-[#15181D] border border-stone-200 dark:border-stone-800 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-stone-100/80 dark:bg-stone-900/80 border-b border-stone-200 dark:border-stone-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                  <span className="ml-2 text-[11px] text-stone-600 dark:text-stone-400 font-medium">
                    design-tokens.engine
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-orange-500/10 text-[#C25934] dark:text-[#E0704E] border border-orange-500/20">
                    <Radio className="w-2.5 h-2.5 animate-pulse" />
                    v2.6
                  </span>
                </div>
              </div>

              {/* Segmented Preset Switcher */}
              <div className="p-4 bg-stone-50/70 dark:bg-stone-900/40 border-b border-stone-200 dark:border-stone-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] font-semibold text-stone-600 dark:text-stone-400 uppercase">
                    Client Design System:
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#C25934] dark:text-[#E0704E]">
                    {currentTheme.fullName}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {(Object.keys(themeColors) as Array<keyof typeof themeColors>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveThemeToken(key)}
                      className={`px-2.5 py-1.5 rounded-xl text-[11px] font-mono transition-all cursor-pointer text-center ${
                        activeThemeToken === key
                          ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-950 font-bold shadow-xs'
                          : 'bg-white dark:bg-stone-800/80 text-stone-600 dark:text-stone-400 border border-stone-300/60 dark:border-stone-700/60 hover:bg-stone-100 dark:hover:bg-stone-800'
                      }`}
                    >
                      {themeColors[key].label}
                    </button>
                  ))}
                </div>

                {/* Mode Selector */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1 bg-stone-200/70 dark:bg-stone-800/70 p-0.5 rounded-lg text-xs font-mono">
                    <button
                      onClick={() => setActiveTab('telemetry')}
                      className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-semibold transition-all cursor-pointer ${
                        activeTab === 'telemetry'
                          ? 'bg-white dark:bg-stone-900 text-stone-950 dark:text-white shadow-2xs'
                          : 'text-stone-500 hover:text-stone-900 dark:hover:text-white'
                      }`}
                    >
                      Live Console
                    </button>
                    <button
                      onClick={() => setActiveTab('tokens')}
                      className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-semibold transition-all cursor-pointer ${
                        activeTab === 'tokens'
                          ? 'bg-white dark:bg-stone-900 text-stone-950 dark:text-white shadow-2xs'
                          : 'text-stone-500 hover:text-stone-900 dark:hover:text-white'
                      }`}
                    >
                      Token JSON
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-stone-500 text-xs font-mono">
                    <span className="text-[10px]">Density:</span>
                    <button
                      onClick={() => setDensity(density === 'comfortable' ? 'compact' : 'comfortable')}
                      className="px-2 py-0.5 rounded-md bg-stone-200 dark:bg-stone-800 text-[10px] font-bold text-stone-800 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-700 cursor-pointer"
                    >
                      {density}
                    </button>
                  </div>
                </div>
              </div>

              {/* Console Canvas */}
              <div className="p-4 sm:p-5">
                {activeTab === 'telemetry' ? (
                  <div className={`space-y-${density === 'compact' ? '3' : '4'}`}>
                    {/* Simulated Component Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${currentTheme.bg} animate-pulse`} />
                        <span className="text-xs font-bold text-stone-900 dark:text-white font-mono">
                          {currentTheme.fullName}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        ONLINE 99.98%
                      </span>
                    </div>

                    {/* Metric Cards */}
                    <div className="grid grid-cols-2 gap-3 font-mono">
                      <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-900/90 border border-stone-200/80 dark:border-stone-800">
                        <div className="text-[10px] uppercase font-semibold text-stone-500 dark:text-stone-400">Task Velocity</div>
                        <div className="text-xl font-bold text-stone-950 dark:text-white mt-0.5">
                          -42.4%
                        </div>
                        <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5 font-medium">
                          NOC benchmark
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-900/90 border border-stone-200/80 dark:border-stone-800">
                        <div className="text-[10px] uppercase font-semibold text-stone-500 dark:text-stone-400">SUS Usability</div>
                        <div className="text-xl font-bold text-[#C25934] dark:text-[#E0704E] mt-0.5">
                          86 / 100
                        </div>
                        <div className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">
                          Grade A Enterprise
                        </div>
                      </div>
                    </div>

                    {/* Alert Simulation Box */}
                    <div className={`p-3 rounded-2xl border font-mono transition-all ${
                      isAlertActive 
                        ? 'bg-rose-500/10 border-rose-500/30' 
                        : 'bg-stone-50 dark:bg-stone-900/70 border-stone-200/80 dark:border-stone-800'
                    }`}>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Activity className={`w-4 h-4 shrink-0 ${isAlertActive ? 'text-rose-500' : 'text-stone-400'}`} />
                          <span className="text-xs font-semibold text-stone-800 dark:text-stone-200 truncate">
                            {isAlertActive ? 'Telemetry Alert: Node Overload' : 'All 48 Nodes Operational'}
                          </span>
                        </div>
                        <button
                          onClick={() => setIsAlertActive(!isAlertActive)}
                          className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-100 cursor-pointer shrink-0"
                        >
                          {isAlertActive ? 'Resolve' : 'Simulate'}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono pt-1 text-stone-500">
                      <span className="text-[10px] uppercase">WCAG AAA Verified</span>
                      <button
                        onClick={onExploreWork}
                        className="text-xs font-semibold text-[#C25934] dark:text-[#E0704E] hover:underline cursor-pointer flex items-center gap-1"
                      >
                        Explore Case Study <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-3 rounded-2xl bg-stone-950 text-stone-200 border border-stone-800 text-[11px] space-y-1 overflow-x-auto">
                      <div className="text-stone-500">{'// Figma Token Studio Export'}</div>
                      <div><span className="text-amber-500">&quot;color.brand&quot;:</span> <span className="text-emerald-400">&quot;{currentTheme.primary}&quot;</span>,</div>
                      <div><span className="text-amber-500">&quot;layout.density&quot;:</span> <span className="text-emerald-400">&quot;{density}&quot;</span>,</div>
                      <div><span className="text-amber-500">&quot;grid.columns&quot;:</span> <span className="text-orange-400">12</span>,</div>
                      <div><span className="text-amber-500">&quot;accessibility.compliance&quot;:</span> <span className="text-emerald-400">&quot;WCAG_2.1_AAA&quot;</span></div>
                    </div>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      Tokens synchronized automatically with CI/CD design system pipelines.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Breathable Metrics Strip */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-stone-200/80 dark:border-stone-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {PERSONAL_INFO.coreStats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-stone-950 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C25934] dark:text-[#E0704E]">
                  {stat.label}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400">
                  {stat.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

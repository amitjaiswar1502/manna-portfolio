'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectGallery } from '@/components/ProjectGallery';
import { UXProcessSection } from '@/components/UXProcessSection';
import { UXAuditTool } from '@/components/UXAuditTool';
import { ExperienceSection } from '@/components/ExperienceSection';
import { BlogSection } from '@/components/BlogSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CaseStudyModal } from '@/components/CaseStudyModal';
import { BlogModal } from '@/components/BlogModal';
import { ResumeModal } from '@/components/ResumeModal';
import { CommandPalette } from '@/components/CommandPalette';
import { Project, BlogPost, PROJECTS, BLOG_POSTS } from '@/data/portfolio-data';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);

  // Initialize and subscribe to theme & hash changes
  useEffect(() => {
    const applyInitialState = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setDarkMode(isDark);

      // Check hash for deep links
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const slug = hash.replace('#project-', '');
        const found = PROJECTS.find((p) => p.slug === slug || p.id === slug);
        if (found) setSelectedProject(found);
      } else if (hash.startsWith('#blog-')) {
        const slug = hash.replace('#blog-', '');
        const found = BLOG_POSTS.find((b) => b.slug === slug || b.id === slug);
        if (found) setSelectedPost(found);
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const slug = hash.replace('#project-', '');
        const found = PROJECTS.find((p) => p.slug === slug || p.id === slug);
        if (found) setSelectedProject(found);
      } else if (hash.startsWith('#blog-')) {
        const slug = hash.replace('#blog-', '');
        const found = BLOG_POSTS.find((b) => b.slug === slug || b.id === slug);
        if (found) setSelectedPost(found);
      }
    };

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('keydown', handleGlobalKeyDown);
    // Queue initial read in microtask/frame
    const timer = setTimeout(applyInitialState, 0);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('keydown', handleGlobalKeyDown);
      clearTimeout(timer);
    };
  }, []);

  const handleToggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.history.replaceState(null, '', `#project-${project.slug}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    window.history.replaceState(null, '', '#work');
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.history.replaceState(null, '', `#blog-${post.slug}`);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
    window.history.replaceState(null, '', '#insights');
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProcess = () => {
    const el = document.getElementById('process');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#090D16] text-slate-900 dark:text-slate-100 selection:bg-[#C25934] selection:text-white transition-colors duration-300">
      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={scrollToContact}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreWork={scrollToWork}
          onExploreProcess={scrollToProcess}
          onOpenContact={scrollToContact}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Project Gallery & Case Studies */}
        <ProjectGallery onSelectProject={handleSelectProject} />

        {/* 5-Phase UX Process & Methodology */}
        <UXProcessSection />

        {/* Interactive Heuristic Evaluation & Usability Audit Tool */}
        <UXAuditTool />

        {/* Experience Timeline, Skills & Education */}
        <ExperienceSection />

        {/* Blog & Design Insights */}
        <BlogSection onSelectPost={handleSelectPost} />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Contact Form & Socials */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={handleSelectProject}
        onSelectPost={handleSelectPost}
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={scrollToContact}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseProject}
        onSelectProject={handleSelectProject}
      />

      {/* Interactive Blog Modal */}
      <BlogModal
        post={selectedPost}
        isOpen={!!selectedPost}
        onClose={handleClosePost}
      />

      {/* Resume Digital Sheet Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Linkedin, 
  Layers, 
  ArrowUpRight
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Enterprise UX Revamp');
  const [timeline, setTimeline] = useState('Immediate / Next 30 Days');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const projectTypes = [
    'Enterprise UX Revamp',
    'Design System & Tokens',
    'Mobile / Web App (0 to 1)',
    'UX Audit & Usability Testing',
    'Full-time / Leadership Role'
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-slate-50/60 dark:bg-[#080C14]/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 dark:bg-slate-850 text-slate-900 dark:text-slate-100 text-xs font-mono font-semibold uppercase tracking-wider border border-slate-300/70 dark:border-slate-800">
            <span className="w-2 h-2 rounded-full bg-[#C25934]" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight leading-[1.15]">
            Let’s build something exceptional together.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            Whether you have a mission-critical enterprise platform revamp, need a scalable design system, or are looking for a Senior UX Designer, I’d love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800 space-y-6 shadow-xs">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white">
                  Direct Contact
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Quick response within 24 business hours.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-[#C25934] dark:text-[#E0704E]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-500 dark:text-slate-400 block">Email Address</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-bold font-mono text-slate-950 dark:text-white hover:text-[#C25934] dark:hover:text-[#E0704E] transition-colors truncate block">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-2 text-slate-500 hover:text-slate-950 dark:hover:text-white rounded-xl transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-500 dark:text-slate-400 block">Phone & WhatsApp</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-bold font-mono text-slate-950 dark:text-white hover:text-emerald-600 transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  title="Copy phone number"
                  className="p-2 text-slate-500 hover:text-slate-950 dark:hover:text-white rounded-xl transition-colors cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & Status */}
              <div className="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-[#C25934] dark:text-[#E0704E]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-500 dark:text-slate-400 block">Location & Availability</span>
                  <span className="text-xs font-semibold text-slate-950 dark:text-white">
                    {PERSONAL_INFO.location} • Open to Remote & Relocation
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 space-y-2.5 font-mono">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-slate-200 hover:text-[#C25934] dark:hover:text-[#E0704E] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#C25934]" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-slate-200 hover:text-[#C25934] dark:hover:text-[#E0704E] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-purple-500" />
                      Figma
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#101626] border border-slate-200 dark:border-slate-800 shadow-xs">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-slate-950 dark:text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto font-sans leading-relaxed">
                    Thank you, <strong className="text-slate-950 dark:text-white">{name}</strong>. Manoj has received your inquiry regarding <em>{projectType}</em> and will respond to <strong className="text-slate-950 dark:text-white">{email}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2 font-sans">
                      <label htmlFor="contact-name" className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                        Your Name <span className="text-[#C25934] dark:text-[#E0704E]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-950 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#C25934] transition-all font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2 font-sans">
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                        Email Address <span className="text-[#C25934] dark:text-[#E0704E]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-950 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#C25934] transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2 font-sans">
                    <label htmlFor="project-type-select" className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                      Inquiry / Engagement Type
                    </label>
                    <select
                      id="project-type-select"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-950 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#C25934] transition-all font-sans cursor-pointer"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt}>
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline & Scope */}
                  <div className="space-y-2 font-sans">
                    <label htmlFor="timeline-input" className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                      Target Timeline
                    </label>
                    <input
                      id="timeline-input"
                      type="text"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      placeholder="e.g. Q1 Sprint, Next 30 Days, or Immediate"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-950 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#C25934] transition-all font-sans"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2 font-sans">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                      Project Goals & Context <span className="text-[#C25934] dark:text-[#E0704E]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell Manoj about your product, user challenges, or team role requirements..."
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-950 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#C25934] transition-all font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full bg-[#C25934] hover:bg-[#D96B43] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-orange-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Send Message to Manoj</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

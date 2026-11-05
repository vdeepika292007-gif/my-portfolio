import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface ContactProps {
  onOpenPlaceholderModal?: (title: string, message: string) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formFeedback, setFormFeedback] = useState<{
    type: 'success' | 'error' | 'info' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormFeedback({
        type: 'error',
        message: 'Please fill in your Name, Email, and Message before submitting.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormFeedback({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    // Build mailto query parameters reliably
    const emailSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Hi Deepika,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from Deepika V Portfolio Website`
    );

    const mailtoLink = `mailto:${contact.email}?subject=${emailSubject}&body=${emailBody}`;

    // Open user's default email client reliably
    window.location.href = mailtoLink;

    setFormFeedback({
      type: 'success',
      message:
        'Opening your default email application with your message pre-filled. You can also copy your message below if needed!',
    });
  };

  const handleCopyFormattedMessage = () => {
    if (!formData.message.trim()) {
      setFormFeedback({
        type: 'error',
        message: 'Please write a message first before copying.',
      });
      return;
    }
    const messageDraft = `From: ${formData.name} (${formData.email})\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(messageDraft);
    setFormFeedback({
      type: 'info',
      message: 'Draft message copied to clipboard! You can paste it into any mail client.',
    });
  };

  return (
    <section id="contact" className="py-20 relative bg-dark-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Inviting recruiters, developers, engineers, and mentors for opportunities, internships, and collaborations.
          </p>
        </div>

        {/* Main Grid: Info Cards (5 cols) & Functional Contact Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Connect & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-violet-400" />
                Open to Conversations
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {contact.messageText}
              </p>

              {/* Contact Channels */}
              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 flex items-center justify-between group hover:border-violet-500/40 transition">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-violet-950/60 text-violet-400 border border-violet-500/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                        Email Address
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200">
                        {contact.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-dark-855 hover:bg-violet-950 border border-slate-800 hover:border-violet-500/40 text-slate-300 hover:text-violet-300 transition"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                {contact.phone && (
                  <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 flex items-center justify-between group hover:border-violet-500/40 transition">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-violet-950/60 text-violet-400 border border-violet-500/20">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                          Phone Number
                        </div>
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-violet-300 transition"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>

                    <a
                      href={`tel:${contact.phone}`}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-violet-950/80 text-violet-300 border border-violet-600/30 flex items-center gap-1 group-hover:bg-violet-600 group-hover:text-white transition font-medium"
                    >
                      Call
                    </a>
                  </div>
                )}

                {/* LinkedIn Item */}
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 flex items-center justify-between group hover:border-violet-500/40 cursor-pointer transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-violet-950/60 text-violet-400 border border-violet-500/20 group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                        LinkedIn Profile
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-violet-300 transition">
                        deepikav8
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] px-2.5 py-1 rounded-md bg-violet-950/80 text-violet-300 border border-violet-600/30 flex items-center gap-1 group-hover:bg-violet-600 group-hover:text-white transition font-medium">
                    Connect <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                {/* GitHub Item */}
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 flex items-center justify-between group hover:border-violet-500/40 cursor-pointer transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-violet-950/60 text-violet-400 border border-violet-500/20 group-hover:scale-105 transition-transform">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                        GitHub Profile
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-violet-300 transition">
                        vdeepika292007-gif
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] px-2.5 py-1 rounded-md bg-violet-950/80 text-violet-300 border border-violet-600/30 flex items-center gap-1 group-hover:bg-violet-600 group-hover:text-white transition font-medium">
                    Follow <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Submitting opens your mail app with this message formatted, or you can copy it with one click.
                </p>
              </div>

              {/* Feedback Alert */}
              {formFeedback.type && (
                <div
                  className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
                    formFeedback.type === 'success'
                      ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                      : formFeedback.type === 'error'
                      ? 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
                      : 'bg-indigo-950/60 border border-indigo-500/40 text-indigo-300'
                  }`}
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{formFeedback.message}</p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-slate-100 placeholder-slate-500 outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-slate-100 placeholder-slate-500 outline-none transition"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Internship Inquiry / Project Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-slate-100 placeholder-slate-500 outline-none transition"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your note or project inquiry here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-slate-100 placeholder-slate-500 outline-none transition resize-y min-h-[100px]"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm transition-all shadow-lg shadow-violet-600/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyFormattedMessage}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-300 hover:text-white font-medium text-xs transition"
                    title="Copy message draft"
                  >
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Text Draft</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

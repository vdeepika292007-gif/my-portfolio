import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenPlaceholderModal: (title: string, message: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlaceholderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['contact', 'education', 'experience', 'projects', 'skills', 'about', 'hero'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = () => {
    if (portfolioData.personal.resumeUrl.includes('placeholder')) {
      onOpenPlaceholderModal(
        'Resume Placeholder Active',
        'Downloading the placeholder resume template. To replace this with your actual resume, simply place your PDF file in the "public" folder as "resume.pdf" and update the path in "src/data/portfolioData.ts"!'
      );
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-violet-900/20 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-md shadow-violet-700/20 group-hover:scale-105 transition-transform">
              <span className="text-sm tracking-wider">DV</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight group-hover:text-violet-300 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] text-violet-400 font-medium tracking-wide flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Deepika_V_Resume.pdf"
              onClick={handleResumeClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg bg-violet-600/10 text-violet-300 border border-violet-500/30 hover:bg-violet-600 hover:text-white transition-all shadow-sm hover:shadow-violet-600/25"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-fade-in">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-slate-800">
              <a
                href={portfolioData.personal.resumeUrl}
                download="Deepika_V_Resume.pdf"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleResumeClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-violet-600 text-white font-medium text-sm hover:bg-violet-700 transition"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

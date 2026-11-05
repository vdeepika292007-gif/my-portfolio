import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  onOpenPlaceholderModal: (title: string, message: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlaceholderModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Playground', href: '#interactive-lab' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['contact', 'education', 'experience', 'projects', 'skills', 'about', 'interactive-lab', 'hero'];
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
        'Resume Active',
        'Your resume PDF is located in public/Deepika_V_Resume.pdf.'
      );
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#faf9f6]/90 dark:bg-[#0b0e14]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 text-slate-900 dark:text-slate-100 group"
          >
            <div className="w-9 h-9 rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 flex items-center justify-center font-mono font-bold text-xs tracking-wider transition-transform group-hover:scale-105">
              DV
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-sm tracking-tight text-slate-900 dark:text-white">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                JNNCE • 5th Sem
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Resume */}
          <div className="flex items-center gap-2">
            {/* Dark / Light Mode Switch */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light theme"
              className="p-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition"
              title={theme === 'dark' ? 'Switch to Light theme' : 'Switch to Dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href={portfolioData.personal.resumeUrl}
              download="Deepika_V_Resume.pdf"
              onClick={handleResumeClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 text-xs font-semibold transition"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] shadow-md space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-medium rounded text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <a
                href={portfolioData.personal.resumeUrl}
                download="Deepika_V_Resume.pdf"
                onClick={handleResumeClick}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-teal-600 text-white text-xs font-medium"
              >
                <FileDown className="w-3.5 h-3.5" />
                Download Resume
              </a>
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 px-2 py-1"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

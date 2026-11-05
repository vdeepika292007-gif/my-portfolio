import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Logo & Status */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-md">
              <span className="text-xs tracking-wider">DV</span>
            </div>
            <div>
              <span className="text-base font-bold text-white">
                {portfolioData.personal.name}
              </span>
              <p className="text-xs text-slate-400">
                Engineering Student & Aspiring Software Developer
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-400">
            <a href="#hero" className="hover:text-violet-400 transition">Home</a>
            <a href="#about" className="hover:text-violet-400 transition">About</a>
            <a href="#skills" className="hover:text-violet-400 transition">Skills</a>
            <a href="#projects" className="hover:text-violet-400 transition">Projects</a>
            <a href="#experience" className="hover:text-violet-400 transition">Experience</a>
            <a href="#education" className="hover:text-violet-400 transition">Education</a>
            <a href="#contact" className="hover:text-violet-400 transition">Contact</a>
          </div>

          {/* Back to top click */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-white border border-slate-800 transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-violet-400" />
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

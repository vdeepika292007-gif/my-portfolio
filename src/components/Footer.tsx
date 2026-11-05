import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 py-10 bg-white/50 dark:bg-[#0b0e14]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 flex items-center justify-center font-mono font-bold text-xs">
              DV
            </div>
            <div>
              <span className="font-heading font-semibold text-slate-900 dark:text-white">
                {portfolioData.personal.name}
              </span>
              <span className="text-slate-500 font-mono ml-2 text-[11px]">
                JNNCE Shivamogga • 2028
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition font-mono text-[11px]"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-teal-600 dark:text-teal-400" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono text-center sm:text-left">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <p>Clean minimal portfolio • React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { ArrowDown, Mail, FileDown, Play, Terminal, Database, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenPlaceholderModal: (title: string, message: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlaceholderModal }) => {
  const { personal } = portfolioData;

  const handleResumeClick = () => {
    if (personal.resumeUrl.includes('placeholder')) {
      onOpenPlaceholderModal(
        'Resume Available',
        'Your resume is located in public/Deepika_V_Resume.pdf.'
      );
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Direct Introduction & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span>Available for internships & collaborations</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
                {personal.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                {personal.role}
              </p>
            </div>

            {/* Plain English Summary */}
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {personal.shortBio}
            </p>

            {/* Minimalist Credential Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                JNNCE Shivamogga
              </span>
              <span className="px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                5th Semester
              </span>
              <span className="px-2.5 py-1 rounded border border-teal-500/30 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 font-semibold">
                9.29 CGPA
              </span>
              <span className="px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                Class of 2028
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#interactive-lab"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 text-xs sm:text-sm font-semibold transition"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Play Live Demos</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Deepika_V_Resume.pdf"
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white text-xs sm:text-sm transition"
              >
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Technical Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] p-6 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 flex items-center justify-center font-mono font-bold text-lg">
                    DV
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-slate-900 dark:text-white text-sm">
                      Deepika V
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      Data Science & Engineering
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Karnataka, IN
                </span>
              </div>

              {/* Quick specs */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    College
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 font-sans font-medium text-right text-[11px]">
                    JNNCE, Shivamogga
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    Degree
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 font-sans font-medium">
                    B.E. CSE (Data Science)
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Current Standing</span>
                  <span className="text-slate-800 dark:text-slate-200">
                    5th Sem • 9.29 CGPA
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    Internship
                  </span>
                  <span className="text-slate-800 dark:text-slate-200">
                    Future Interns (Data Analytics)
                  </span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400">Campus Role</span>
                  <span className="text-teal-700 dark:text-teal-400 font-medium">
                    Vice-chair, ISTE Chapter
                  </span>
                </div>
              </div>

              {/* Clean quote / focus note */}
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                "Focused on building clean web apps and extracting clear answers from data."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

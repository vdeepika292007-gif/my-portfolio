import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface AboutProps {
  onOpenPlaceholderModal?: (title: string, message: string) => void;
}

export const About: React.FC<AboutProps> = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300 text-xs font-mono">
            <span>Background</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            A quick overview of my studies, activities, and what I work on.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                Undergraduate Journey
              </h3>

              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                {about.detailedBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* What I focus on */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-2">
                  Areas of Interest
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {about.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs font-mono border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Practical goal */}
              <div className="p-3.5 rounded-lg bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs">
                <span className="font-semibold text-teal-900 dark:text-teal-300 block mb-0.5">
                  Current Goal:
                </span>
                <p className="text-teal-950/80 dark:text-teal-200/80 leading-relaxed">
                  {about.careerGoal}
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {about.quickStats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] p-3.5 text-center shadow-xs"
                >
                  <div className="text-xl font-heading font-bold text-teal-700 dark:text-teal-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <h4 className="font-heading font-semibold text-sm text-slate-900 dark:text-white">
                    College Information
                  </h4>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  VTU Affiliated
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Institution</div>
                  <div className="font-medium text-slate-900 dark:text-slate-100 text-sm mt-0.5">
                    {about.college}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Branch & Specialization</div>
                  <div className="font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                    {about.degree} — {about.specialization}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                    <div className="text-[10px] text-slate-500 font-mono">Semester</div>
                    <div className="font-bold text-slate-900 dark:text-slate-100 mt-0.5">5th Sem</div>
                  </div>
                  <div className="p-2.5 rounded bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/40 text-center">
                    <div className="text-[10px] text-teal-800 dark:text-teal-300 font-mono">CGPA</div>
                    <div className="font-bold text-teal-900 dark:text-teal-300 mt-0.5">{about.cgpa.split(' ')[0]}</div>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                    <div className="text-[10px] text-slate-500 font-mono">Graduation</div>
                    <div className="font-bold text-slate-900 dark:text-slate-100 mt-0.5">{about.graduationYear}</div>
                  </div>
                </div>
              </div>

              {/* Campus Responsibilities */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  College Activities:
                </div>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>Vice-chairperson of ISTE (Indian Society for Technical Education)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>Active member of TechForge technical club</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>College selection team in Smart India Hackathon 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

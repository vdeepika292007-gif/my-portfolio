import React from 'react';
import { Calendar, MapPin, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface EducationProps {
  onOpenPlaceholderModal: (title: string, message: string) => void;
}

export const Education: React.FC<EducationProps> = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300 text-xs font-mono">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Undergraduate engineering studies and schooling records.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-4">
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] p-6 shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="text-xs font-mono text-teal-700 dark:text-teal-400 mb-0.5">
                    {item.status}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item.specialization}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {item.institution}
                  </div>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Coursework list */}
              <div className="pt-1">
                <div className="text-[11px] font-mono uppercase text-slate-500 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                  Key Subjects:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

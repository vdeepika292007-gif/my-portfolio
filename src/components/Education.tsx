import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface EducationProps {
  onOpenPlaceholderModal: (title: string, message: string) => void;
}

export const Education: React.FC<EducationProps> = ({ onOpenPlaceholderModal }) => {
  const { education } = portfolioData;

  const handleEditClick = (field: string) => {
    onOpenPlaceholderModal(
      `Edit ${field}`,
      `To update your ${field}:\n1. Open "src/data/portfolioData.ts".\n2. Scroll down to the "education" array.\n3. Modify the institution, degree, specialization, or coursework.\n4. Save to see the changes immediately.`
    );
  };

  return (
    <section id="education" className="py-20 relative bg-dark-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formal <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Undergraduate engineering coursework and foundational computer science studies.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 hover:border-violet-500/40 transition-all relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-800/80">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-violet-900/40 border border-violet-500/30 text-[11px] font-semibold text-violet-300">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.status}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>

                  {/* Specialization */}
                  <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-violet-300">
                    <span>{item.specialization}</span>
                    {item.isPlaceholder && (
                      <span
                        onClick={() => handleEditClick('Specialization')}
                        className="cursor-pointer text-[10px] px-1.5 py-0.2 rounded bg-violet-950 border border-violet-600/30 text-violet-300"
                      >
                        Placeholder
                      </span>
                    )}
                  </div>

                  {/* College Name */}
                  <div className="text-xs sm:text-sm text-slate-300 pt-1 flex items-center gap-1.5">
                    <span className="font-semibold text-slate-100">{item.institution}</span>
                    {item.isPlaceholder && (
                      <button
                        onClick={() => handleEditClick('College Name')}
                        className="text-[10px] text-violet-400 underline"
                      >
                        Edit College
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2 text-xs text-slate-400">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950 border border-violet-500/30 text-violet-300">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{item.period}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950 border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-violet-400" />
                    Key Undergraduate Coursework & Subjects:
                  </h4>
                  <span className="text-[11px] text-slate-500">Curriculum Foundation</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-dark-950 border border-slate-800/90 text-slate-300 hover:border-violet-500/30 transition"
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

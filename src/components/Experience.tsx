import React from 'react';
import {
  Calendar,
  MapPin,
  FileCheck,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface ExperienceProps {
  onOpenPlaceholderModal: (title: string, message: string) => void;
}

export const Experience: React.FC<ExperienceProps> = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300 text-xs font-mono">
            <span>Internship Experience</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Practical data analysis internship and project deliverables.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] p-6 sm:p-8 shadow-xs space-y-5"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-teal-700 dark:text-teal-400 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {exp.description}
              </p>

              {/* 3 Project Tasks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                {exp.projectAreas.map((project, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="font-heading font-semibold text-xs text-slate-900 dark:text-white mb-1">
                        {project.title}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-teal-700 dark:text-teal-400 hover:underline pt-1"
                      >
                        <GithubIcon className="w-3 h-3" />
                        <span>View Repository</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Verification & Credential Links */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="#certifications"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-teal-500 transition"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>View Certificate & LOR</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

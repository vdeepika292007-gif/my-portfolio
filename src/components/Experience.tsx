import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Target,
  FileCheck,
  Award,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface ExperienceProps {
  onOpenPlaceholderModal: (title: string, message: string) => void;
}

export const Experience: React.FC<ExperienceProps> = () => {
  const { experience } = portfolioData;

  const getAreaIcon = (index: number) => {
    switch (index) {
      case 0:
        return <TrendingUp className="w-5 h-5 text-violet-400" />;
      case 1:
        return <Users className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Target className="w-5 h-5 text-purple-400" />;
      default:
        return <TrendingUp className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 relative bg-dark-900/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Industry Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Practical application of data analysis methodologies, exploratory analytics, and executive dashboard reporting.
          </p>
        </div>

        {/* Experience Main Card */}
        <div className="space-y-8">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 lg:p-10 relative overflow-hidden"
            >
              {/* Decorative accent top line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600" />

              {/* Company & Role Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-violet-950/60 border border-violet-600/30 text-violet-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    Data Analytics Internship
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-violet-300">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:items-end gap-3 text-xs text-slate-400">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950 border border-violet-500/30 text-violet-300 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{exp.period}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950 border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="py-6">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* 3 Dedicated Project Areas Grid */}
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                  Three Core Project Initiatives Completed:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {exp.projectAreas.map((project, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-dark-950/80 border border-slate-800/90 hover:border-violet-500/40 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="p-2.5 w-fit rounded-lg bg-violet-950/60 border border-violet-500/20 mb-3 group-hover:scale-105 transition-transform">
                          {getAreaIcon(idx)}
                        </div>
                        <h5 className="text-sm font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                          {project.title}
                        </h5>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                        <span className="text-[10px] text-violet-400 font-mono">
                          Initiative 0{idx + 1}
                        </span>
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-850 hover:bg-violet-600 border border-slate-700/80 hover:border-violet-500/50 text-[11px] font-semibold text-slate-200 hover:text-white transition group/btn shadow-sm"
                          >
                            <GithubIcon className="w-3 h-3 text-violet-400 group-hover/btn:text-white transition-colors" />
                            <span>Repository</span>
                            <ExternalLink className="w-3 h-3 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied & Verification Buttons */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                {/* Tech Pills */}
                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-2">
                    Core Technologies & Tools Applied:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-3 py-1 rounded-lg bg-dark-950 border border-violet-900/30 text-violet-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Documents */}
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 hover:bg-violet-600 border border-slate-700/80 hover:border-violet-500/40 text-xs font-semibold text-slate-200 hover:text-white transition group"
                  >
                    <Award className="w-4 h-4 text-violet-400 group-hover:text-white transition-colors" />
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href={exp.lorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600/20 hover:bg-violet-600 border border-violet-500/30 text-xs font-semibold text-violet-300 hover:text-white transition group"
                  >
                    <FileCheck className="w-4 h-4 text-violet-300 group-hover:text-white transition-colors" />
                    <span>Letter of Recommendation</span>
                    <ExternalLink className="w-3.5 h-3.5 text-violet-300 group-hover:text-white transition-colors" />
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

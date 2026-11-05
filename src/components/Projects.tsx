import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Database,
  LineChart,
  Gamepad2,
  Info,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData, Project } from '../data/portfolioData';

interface ProjectsProps {
  onOpenPlaceholderModal: (
    title: string,
    message: string,
    link?: string,
    actionText?: string
  ) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenPlaceholderModal }) => {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Data Analytics & ML', 'Interactive'];

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const handleLinkClick = (e: React.MouseEvent, type: 'github' | 'demo', project: Project) => {
    if (type === 'github') {
      if (project.githubUrl && !project.githubUrl.includes('placeholder')) {
        // Valid GitHub link! Allow normal navigation to GitHub in new tab
        return;
      }
      e.preventDefault();
      onOpenPlaceholderModal(
        `${project.title} - GitHub Repository`,
        `Repository link placeholder: this URL will be updated soon.`
      );
      return;
    }

    if (type === 'demo') {
      if (project.demoUrl && !project.demoUrl.includes('placeholder')) {
        // Valid demo or repo docs link!
        return;
      }
      e.preventDefault();
      onOpenPlaceholderModal(
        `${project.title} - Live Demo Preview`,
        `The interactive deployment for "${project.title}" will be hosted soon.\n\nIn the meantime, you can explore the full source code and documentation on GitHub!`,
        project.githubUrl,
        'Open GitHub Repository'
      );
    }
  };

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return <Database className="w-4 h-4 text-violet-400" />;
      case 'Data Analytics & ML':
        return <LineChart className="w-4 h-4 text-indigo-400" />;
      case 'Interactive':
        return <Gamepad2 className="w-4 h-4 text-purple-400" />;
      default:
        return <Layers className="w-4 h-4 text-violet-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-dark-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            Engineering Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on applications spanning full-stack development, database architecture, machine learning prediction, and interactive games.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedFilter === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-105'
                  : 'bg-dark-900 text-slate-300 hover:bg-dark-850 border border-slate-800'
              }`}
            >
              {cat}
              <span className="ml-1.5 opacity-70">
                ({cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800/90 flex flex-col justify-between overflow-hidden group hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-violet-900/10"
            >
              {/* Card Banner / Graphic Placeholder */}
              <div className="h-44 relative bg-gradient-to-br from-dark-850 via-dark-900 to-violet-950/30 border-b border-slate-800/80 p-5 flex flex-col justify-between overflow-hidden">
                {/* Subtle Geometric Background */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-violet-600/10 blur-2xl group-hover:bg-violet-600/20 transition-all duration-500" />

                {/* Category Badge & Status */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-950/80 border border-violet-500/30 text-violet-300 text-[11px] font-semibold backdrop-blur-sm">
                    {getProjectIcon(project.category)}
                    {project.category}
                  </span>

                  {project.isPlaceholderLinks ? (
                    <span className="text-[10px] text-amber-300/90 bg-amber-950/50 border border-amber-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      Links Configurable
                    </span>
                  ) : (
                    <span className="text-[10px] text-emerald-300/90 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      GitHub Active
                    </span>
                  )}
                </div>

                {/* Project Title In Header */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-violet-400 font-medium truncate mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                {/* Description */}
                <div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Architecture Highlight Box */}
                  <div className="p-3 rounded-xl bg-dark-950/80 border border-slate-800/80 text-xs text-slate-300 mb-4">
                    <span className="text-[11px] font-bold text-violet-400 uppercase tracking-wide block mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Architecture Highlights
                    </span>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      {project.architectureHighlights}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1">
                      {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Section: Technologies & Action Buttons */}
                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/80">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-dark-850 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkClick(e, 'github', project)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-dark-850 hover:bg-dark-800 border border-slate-700/80 text-slate-200 hover:text-white transition group/btn"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-violet-400 group-hover/btn:scale-110 transition-transform" />
                      <span>Code / Repo</span>
                    </a>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkClick(e, 'demo', project)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-violet-600/20 hover:bg-violet-600 text-violet-300 hover:text-white border border-violet-500/30 transition group/btn"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-violet-300 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

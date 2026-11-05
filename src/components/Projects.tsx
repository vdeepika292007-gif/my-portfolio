import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Database,
  LineChart,
  Gamepad2,
  Layers,
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

  const categories = ['All', 'Data Analytics & ML', 'Interactive', 'Full-Stack'];

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const handleLinkClick = (e: React.MouseEvent, type: 'github' | 'demo', project: Project) => {
    if (type === 'github') {
      if (project.githubUrl && !project.githubUrl.includes('placeholder')) {
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
        return;
      }
      e.preventDefault();
      onOpenPlaceholderModal(
        `${project.title} - Live Demo Preview`,
        `The live demo for "${project.title}" will be hosted soon. In the meantime, you can explore the full source code and README on GitHub!`,
        project.githubUrl,
        'Open GitHub Repository'
      );
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return <Database className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />;
      case 'Data Analytics & ML':
        return <LineChart className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />;
      case 'Interactive':
        return <Gamepad2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300 text-xs font-mono">
            <span>Work & Code</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Selected projects across machine learning, web applications, and interactive tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                selectedFilter === cat
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] p-6 shadow-xs flex flex-col justify-between hover:border-teal-500/50 transition-colors"
            >
              <div className="space-y-3">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Key features */}
                <ul className="space-y-1 pt-1 text-xs text-slate-500 dark:text-slate-400">
                  {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleLinkClick(e, 'github', project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 transition"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>

                {project.id === 'code-debug-game' || project.id === 'heart-disease-prediction' ? (
                  <a
                    href="#interactive-lab"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 text-xs font-semibold transition"
                  >
                    <span>Play Demo</span>
                  </a>
                ) : (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleLinkClick(e, 'demo', project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition"
                  >
                    <span>Readme</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

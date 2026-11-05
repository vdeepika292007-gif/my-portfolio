import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Database,
  BarChart3,
  Layers,
  Sparkles,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillsCategories, skillsNote } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-violet-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-violet-400" />;
      default:
        return <Layers className="w-5 h-5 text-violet-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillsCategories
      : skillsCategories.filter(
          (cat) => cat.title.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <section id="skills" className="py-20 relative bg-dark-900/50 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Languages, frameworks, databases, and analytics tools applied across my coursework, projects, and internship.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              selectedCategory === 'all'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'bg-dark-850 text-slate-300 hover:bg-dark-800 border border-slate-800'
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => setSelectedCategory('programming')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              selectedCategory === 'programming'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'bg-dark-850 text-slate-300 hover:bg-dark-800 border border-slate-800'
            }`}
          >
            Programming
          </button>
          <button
            onClick={() => setSelectedCategory('frontend')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              selectedCategory === 'frontend'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'bg-dark-850 text-slate-300 hover:bg-dark-800 border border-slate-800'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setSelectedCategory('backend')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              selectedCategory === 'backend'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'bg-dark-850 text-slate-300 hover:bg-dark-800 border border-slate-800'
            }`}
          >
            Backend & Databases
          </button>
          <button
            onClick={() => setSelectedCategory('analytics')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              selectedCategory === 'analytics'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'bg-dark-850 text-slate-300 hover:bg-dark-800 border border-slate-800'
            }`}
          >
            Data Analytics
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-violet-950/60 border border-violet-500/20">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-dark-950/70 border border-slate-800/80 hover:border-violet-500/30 flex items-center justify-between transition group"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-violet-400 group-hover:text-violet-300" />
                        <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 bg-dark-850 px-2 py-0.5 rounded border border-slate-800/60">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>{category.skills.length} Technologies</span>
                <span className="text-violet-400 font-medium">In Active Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Candid Disclaimer / Learning Note */}
        <div className="mt-10 max-w-3xl mx-auto p-4 rounded-xl bg-violet-950/20 border border-violet-900/30 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-violet-300 font-semibold">Honest Technical Positioning: </strong>
            {skillsNote}
          </p>
        </div>
      </div>
    </section>
  );
};

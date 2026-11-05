import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Database,
  BarChart3,
  Layers,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillsCategories, skillsNote } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      default:
        return <Layers className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillsCategories
      : skillsCategories.filter((cat) =>
          cat.title.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300 text-xs font-mono">
            <span>Tools & Languages</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Technologies I use for coursework, projects, and data tasks.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All' },
            { id: 'programming', label: 'Languages' },
            { id: 'web', label: 'Web' },
            { id: 'database', label: 'Databases' },
            { id: 'data', label: 'Data & Analytics' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                selectedCategory === tab.id
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] p-6 shadow-xs space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                <div className="p-2 rounded-md bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/40">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills list */}
              <div className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60 text-xs"
                  >
                    <span className="font-medium text-slate-900 dark:text-slate-200 font-mono">
                      {skill.name}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-slate-500 font-mono mt-8">
          {skillsNote}
        </p>
      </div>
    </section>
  );
};

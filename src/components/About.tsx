import React from 'react';
import { GraduationCap, BookOpen, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface AboutProps {
  onOpenPlaceholderModal?: (title: string, message: string) => void;
}

export const About: React.FC<AboutProps> = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 relative bg-dark-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Third-year engineering student passionate about practical problem solving, building software, and deriving data-backed insights.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-500"></span>
                Engineering Student & Continuous Learner
              </h3>

              {about.detailedBio.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Core Interests Tags */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                  Core Interest Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {about.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-dark-850 border border-violet-900/30 text-violet-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Goal Card */}
              <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-600/30 mt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-violet-600/20 text-violet-300 shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider font-bold text-violet-300 mb-1">
                      Career Goal
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-200 leading-normal">
                      {about.careerGoal}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {about.quickStats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-4 text-center border border-slate-800/80 hover:border-violet-500/30 transition-all"
                >
                  <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">{stat.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Academic Details</h4>
                    <p className="text-xs text-slate-400">Engineering Education</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Verified Details</span>
                </div>
              </div>

              {/* Verified Academic Fields */}
              <div className="space-y-4">
                {/* College */}
                <div className="space-y-1.5">
                  <div className="text-xs font-medium text-slate-400">College / Institution</div>
                  <div className="p-3.5 rounded-xl bg-dark-950/80 border border-violet-500/30">
                    <div className="text-sm font-bold text-slate-100 flex items-center justify-between">
                      <span>{about.college}</span>
                    </div>
                    <div className="text-xs text-violet-400 mt-0.5">JNNCE, Shivamogga • VTU Affiliated</div>
                  </div>
                </div>

                {/* Degree & Specialization */}
                <div className="space-y-1.5">
                  <div className="text-xs font-medium text-slate-400">Degree & Specialization</div>
                  <div className="p-3.5 rounded-xl bg-dark-950/80 border border-slate-800/90">
                    <div className="text-sm font-bold text-violet-200">
                      {about.degree}
                    </div>
                    <div className="text-xs text-slate-300 mt-1 flex items-center justify-between">
                      <span className="font-medium">{about.specialization}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-600/30 font-semibold">
                        CSE - DS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status, CGPA & Graduation Year */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="space-y-1">
                    <div className="text-[11px] font-medium text-slate-400">Semester</div>
                    <div className="p-2.5 rounded-xl bg-dark-950/80 border border-slate-800 text-center">
                      <div className="text-xs font-bold text-slate-200">5th Sem</div>
                      <div className="text-[10px] text-violet-400 mt-0.5">3rd Year</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] font-medium text-slate-400">CGPA</div>
                    <div className="p-2.5 rounded-xl bg-dark-950/80 border border-emerald-500/40 text-center shadow-sm shadow-emerald-950/50">
                      <div className="text-xs font-bold text-emerald-400">9.4</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Distinction</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] font-medium text-slate-400">Graduation</div>
                    <div className="p-2.5 rounded-xl bg-dark-950/80 border border-slate-800 text-center">
                      <div className="text-xs font-bold text-violet-300">{about.graduationYear}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Class of '28</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What drives me */}
              <div className="pt-2 border-t border-slate-800">
                <h5 className="text-xs font-semibold text-slate-300 mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                  Academic & Leadership Ethos:
                </h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Specializing in Data Science with core Computer Science engineering foundations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Academic excellence (9.4 CGPA) & Vice-chairperson of ISTE technical society.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Active participant in Smart India Hackathon and national-level AI competitions.</span>
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

import React from 'react';
import { ArrowDown, Mail, Code, Sparkles, User, FileDown, Layers, LineChart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenPlaceholderModal: (title: string, message: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlaceholderModal }) => {
  const { personal } = portfolioData;

  const handleProfilePhotoClick = () => {
    onOpenPlaceholderModal(
      'Profile Photo Replacement Guide',
      'To display your actual photograph:\n\n1. Save your photo into the "public" directory (for example as "public/profile.jpg").\n2. Open "src/data/portfolioData.ts".\n3. Set `profileImage: "./profile.jpg"` inside the `personal` object.\n4. Your photo will immediately appear here with clean rounded borders and violet glow!'
    );
  };

  const handleResumeClick = () => {
    if (personal.resumeUrl.includes('placeholder')) {
      onOpenPlaceholderModal(
        'Resume Placeholder Active',
        'Downloading the placeholder resume template. To use your actual resume, simply place your PDF file in the "public" folder as "resume.pdf" and update the path in "src/data/portfolioData.ts"!'
      );
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violet-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-medium backdrop-blur-md shadow-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span>{personal.statusText}</span>
            </div>

            {/* Main Greeting & Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300">
                  {personal.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-violet-300/90 tracking-wide">
                {personal.role}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personal.shortBio}
            </p>

            {/* Domain Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-md bg-dark-850 border border-slate-800 text-slate-300">
                <Code className="w-3.5 h-3.5 text-violet-400" />
                Web Development
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-md bg-dark-850 border border-slate-800 text-slate-300">
                <LineChart className="w-3.5 h-3.5 text-violet-400" />
                Data Analytics
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-md bg-dark-850 border border-slate-800 text-slate-300">
                <Layers className="w-3.5 h-3.5 text-violet-400" />
                Software Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-md bg-dark-850 border border-slate-800 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                AI & Machine Learning
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-violet-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Get In Touch</span>
              </a>

              <a
                href={personal.resumeUrl}
                download="Deepika_V_Resume.pdf"
                onClick={handleResumeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-900 text-slate-300 hover:text-violet-300 font-medium text-sm border border-slate-800 hover:border-violet-500/30 transition-all duration-200"
                title="Download Resume PDF"
              >
                <FileDown className="w-4 h-4 text-slate-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Card / Visual Placeholder (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer Glow Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/40 via-purple-600/30 to-indigo-600/40 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

              <div className="relative bg-dark-900 border border-violet-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center">
                {/* Profile Photo or Fallback Avatar */}
                <div
                  onClick={handleProfilePhotoClick}
                  className="relative cursor-pointer w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-dark-800 via-dark-850 to-dark-900 border-2 border-dashed border-violet-500/50 hover:border-violet-400 flex flex-col items-center justify-center transition-all duration-300 group/avatar shadow-inner"
                  title="Click to view photo replacement guide"
                >
                  {personal.profileImage ? (
                    <img
                      src={personal.profileImage}
                      alt={personal.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-16 h-16 rounded-full bg-violet-600/20 border border-violet-500/40 flex items-center justify-center mb-3 group-hover/avatar:scale-110 transition-transform">
                        <User className="w-8 h-8 text-violet-300" />
                      </div>
                      <span className="text-xs font-semibold text-violet-300">
                        Profile Photo
                      </span>
                      <span className="text-[11px] text-slate-400 mt-1 max-w-[150px] leading-tight">
                        Click for instructions to add your photo
                      </span>
                    </div>
                  )}

                  {/* Corner Badge */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-violet-500/30 text-[10px] text-violet-300 font-mono">
                    DV
                  </div>
                </div>

                {/* Identity Snippet Below Photo */}
                <div className="mt-5 space-y-1">
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {personal.name}
                  </h2>
                  <p className="text-xs text-violet-400 font-medium">
                    B.E. Computer Science & Data Science
                  </p>
                  <p className="text-xs text-slate-300 pt-1 flex items-center justify-center gap-1 font-medium">
                    <span>JNNCE Shivamogga</span>
                    <span className="text-violet-500">•</span>
                    <span className="text-emerald-400 font-semibold">9.4 CGPA</span>
                  </p>
                </div>

                {/* Micro Quick Fact Badges */}
                <div className="grid grid-cols-2 gap-2 w-full mt-5 pt-4 border-t border-slate-800/80 text-left">
                  <div className="bg-dark-950/60 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Current Standing</div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5">5th Sem (3rd Year)</div>
                  </div>
                  <div className="bg-dark-950/60 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Graduation</div>
                    <div className="text-xs font-semibold text-violet-300 mt-0.5">Class of 2028</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

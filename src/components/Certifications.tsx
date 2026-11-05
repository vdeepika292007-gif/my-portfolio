import React, { useState } from 'react';
import { Award, PlusCircle, ExternalLink, X, Eye, CheckCircle2 } from 'lucide-react';
import { portfolioData, CertificationItem } from '../data/portfolioData';

interface CertificationsProps {
  onOpenPlaceholderModal: (title: string, message: string) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onOpenPlaceholderModal }) => {
  const { certifications } = portfolioData;
  const [activePreview, setActivePreview] = useState<{ url: string; title: string } | null>(null);

  const handleCardClick = (cert: CertificationItem) => {
    if (cert.isPlaceholder) {
      onOpenPlaceholderModal(
        'Add New Certification',
        'To add your certifications and achievements:\n\n1. Open "src/data/portfolioData.ts".\n2. Scroll to the "certifications" array.\n3. Add new entries or customize existing ones with your certificate titles, issuers, and URLs.\n4. You can link to your LinkedIn certificate URL, PDF, or credential verification ID.'
      );
    } else if (cert.imageUrl) {
      setActivePreview({
        url: cert.imageUrl,
        title: cert.title,
      });
    }
  };

  return (
    <section id="certifications" className="py-20 relative bg-dark-900/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Credentials & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified internship credentials, letters of recommendation, and academic milestones.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => handleCardClick(cert)}
              className={`glass-card rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                cert.isPlaceholder
                  ? 'border-dashed border-violet-500/30 hover:border-violet-400/80 bg-violet-950/10'
                  : 'border-slate-800 hover:border-violet-500/50 hover:-translate-y-1 shadow-lg hover:shadow-violet-900/20'
              }`}
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-violet-950/60 border border-violet-500/20 text-violet-400 group-hover:scale-110 transition-transform">
                    {cert.isPlaceholder ? (
                      <PlusCircle className="w-6 h-6 text-violet-400" />
                    ) : (
                      <Award className="w-6 h-6 text-violet-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {!cert.isPlaceholder && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-dark-950 border border-slate-800 text-slate-400">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Document Thumbnail Preview (if image exists) */}
                {cert.imageUrl && (
                  <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-800 group-hover:border-violet-500/40 transition aspect-[4/3] bg-dark-950">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-dark-950/40 backdrop-blur-xs transition">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-semibold shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Click to Preview</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs font-semibold text-violet-400 mb-2">
                  {cert.issuer}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-400 group-hover:text-slate-200 transition">
                  {cert.isPlaceholder ? 'Click to add more' : 'View Full Document'}
                </span>
                <span className="text-violet-400 group-hover:translate-x-1 transition-transform">
                  {cert.isPlaceholder ? '+' : '→'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Certificate / LOR High-Res Preview */}
      {activePreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-dark-900 border border-violet-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-dark-950/80">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-violet-400" />
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {activePreview.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activePreview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium transition"
                >
                  <span>Open Original</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActivePreview(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Body */}
            <div className="p-2 sm:p-4 overflow-auto flex items-center justify-center bg-dark-950/50">
              <img
                src={activePreview.url}
                alt={activePreview.title}
                className="max-h-[75vh] w-auto rounded-lg object-contain border border-slate-800 shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

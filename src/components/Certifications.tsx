import React, { useState } from 'react';
import { Award, ExternalLink, X, Eye, CheckCircle2 } from 'lucide-react';
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
        'Add Certification',
        'You can add your certificates in src/data/portfolioData.ts.'
      );
    } else if (cert.imageUrl) {
      setActivePreview({
        url: cert.imageUrl,
        title: cert.title,
      });
    }
  };

  return (
    <section id="certifications" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300 text-xs font-mono">
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Internship documents, competition participations, and milestones.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => handleCardClick(cert)}
              className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] p-5 shadow-xs flex flex-col justify-between transition group ${
                cert.imageUrl ? 'cursor-pointer hover:border-teal-500/50' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-teal-400">
                    <Award className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {cert.date}
                  </span>
                </div>

                {/* Thumbnail image if available */}
                {cert.imageUrl && (
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 aspect-[4/3] bg-slate-100 dark:bg-slate-900 group">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top transition duration-200 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-900/50 backdrop-blur-xs transition">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white text-slate-900 text-xs font-medium shadow-sm">
                        <Eye className="w-3.5 h-3.5" />
                        Preview
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="font-heading font-semibold text-sm text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    {cert.issuer}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>

              {cert.imageUrl && (
                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-teal-700 dark:text-teal-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Document
                  </span>
                  <span className="text-[11px] underline">Click to view</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Certificate preview */}
        {activePreview && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fade-in"
            onClick={() => setActivePreview(null)}
          >
            <div
              className="relative max-w-3xl w-full max-h-[90vh] bg-white dark:bg-[#111620] rounded-xl border border-slate-300 dark:border-slate-700 p-4 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <h3 className="font-heading font-semibold text-sm text-slate-900 dark:text-white truncate">
                  {activePreview.title}
                </h3>
                <button
                  onClick={() => setActivePreview(null)}
                  className="p-1 rounded text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-2 flex items-center justify-center bg-slate-100 dark:bg-[#0b0e14] rounded-lg mt-3">
                <img
                  src={activePreview.url}
                  alt={activePreview.title}
                  className="max-h-[75vh] w-auto object-contain rounded shadow-md"
                />
              </div>

              <div className="pt-3 flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>Official verification document</span>
                <a
                  href={activePreview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-400 hover:underline"
                >
                  <span>Open full image</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

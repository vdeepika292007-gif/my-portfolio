import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Modal } from './components/Modal';

export const App: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    link?: string;
    actionText?: string;
  }>({
    isOpen: false,
    title: '',
    message: '',
  });

  const handleOpenModal = (
    title: string,
    message: string,
    link?: string,
    actionText?: string
  ) => {
    setModalState({
      isOpen: true,
      title,
      message,
      link,
      actionText,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 flex flex-col selection:bg-violet-600/30 selection:text-violet-200">
      {/* Navigation Bar */}
      <Navbar onOpenPlaceholderModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenPlaceholderModal={handleOpenModal} />
        <About onOpenPlaceholderModal={handleOpenModal} />
        <Skills />
        <Projects onOpenPlaceholderModal={handleOpenModal} />
        <Experience onOpenPlaceholderModal={handleOpenModal} />
        <Education onOpenPlaceholderModal={handleOpenModal} />
        <Certifications onOpenPlaceholderModal={handleOpenModal} />
        <Contact onOpenPlaceholderModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Floating Back to Top Button */}
      <BackToTop />

      {/* Informative Placeholder Helper Dialog */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        title={modalState.title}
        message={modalState.message}
        link={modalState.link}
        actionText={modalState.actionText}
      />
    </div>
  );
};

export default App;

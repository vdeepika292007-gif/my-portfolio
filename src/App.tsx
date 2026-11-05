import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveShowcase } from './components/InteractiveShowcase';
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
    <div className="min-h-screen bg-canvas text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Navigation Bar */}
      <Navbar onOpenPlaceholderModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenPlaceholderModal={handleOpenModal} />
        <InteractiveShowcase />
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

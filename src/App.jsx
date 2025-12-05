import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import "./index.css";


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const blobTopLeft = useRef(null);
  const blobBottomRight = useRef(null);

  useEffect(() => {
    // GSAP animations for blobs
    gsap.to(blobTopLeft.current, {
      duration: 8,
      x: 50,
      y: 50,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(blobBottomRight.current, {
      duration: 10,
      x: -50,
      y: -50,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1,
    });
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased">
      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Animated background blobs */}
        <div
          ref={blobTopLeft}
          className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full filter blur-3xl opacity-50"
        />
        <div
          ref={blobBottomRight}
          className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-800/10 rounded-full filter blur-3xl opacity-50"
        />

        {/* Content with page transition */}
        <motion.div
          className="w-full mx-auto z-10"
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentPage === 'home' ? (
            <Hero onNavigate={setCurrentPage} />
          ) : currentPage === 'about' ? (
            <About onNavigate={setCurrentPage} />
          ) : currentPage === 'skills' ? (
            <Skills onNavigate={setCurrentPage} />
          ) : currentPage === 'projects' ? (
            <Projects onNavigate={setCurrentPage} />
          ) : currentPage === 'experience' ? (
            <Experience onNavigate={setCurrentPage} />
          ) : (
            <Contact onNavigate={setCurrentPage} />
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default App;

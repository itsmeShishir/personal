import React, { useState, useEffect } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import HeroSection from './Component/HeroSection'; 
import AboutMe from './Component/AboutMe';
import Education from './Component/Education';
import WorkExperience from './Component/WorkExperience';
import Projects from './Component/Project';
import Technologies from './Component/Technologies';
import ContactSection from './Component/ContactSection';
import Footer from './Component/Footer';

function Home() {
  const [stage, setStage] = useState('error');
  const [showCannotBe, setShowCannotBe] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('hi'), 5000);
    const timer2 = setTimeout(() => setStage('image'), 7000);
    const timer3 = setTimeout(() => setStage('header'), 10000);
    const textToggleTimer = setTimeout(() => setShowCannotBe(false), 1000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(textToggleTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const iconVariant = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const AnimatedSection = ({ children }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariant}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <AnimatePresence>
        {stage === 'error' && (
          <motion.div
            className="text-left max-w-lg mx-auto mt-20 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col items-start ml-4">
              <ExclamationTriangleIcon className="h-10 w-10 text-gray-500 mb-4" />
              <p className="text-2xl font-semibold text-gray-800 mb-2">
                This site{' '}
                <span className="font-bold text-gray-900">
                  {showCannotBe ? 'cannot be' : 'actually'}
                </span>{' '}
                reached
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium text-gray-800">www.anaflous.com</span> unexpectedly <span className="font-semibold">opened</span> the connection.
              </p>
              <p className="text-gray-600 mb-2">Try:</p>
              <ul className="text-sm space-y-1 mb-6">
                <li className="text-gray-600">• <span className="hover:underline cursor-pointer">Checking the connection</span></li>
                <li className="text-blue-600">• <span className="hover:underline cursor-pointer">Checking the proxy and the firewall</span></li>
                <li className="text-blue-600">• <span className="hover:underline cursor-pointer">Running Windows Network Diagnostics</span></li>
              </ul>
              <span className="text-gray-500 text-sm mb-8 block">SUCC_CONNECTION_OPENED</span>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md">Start</button>
            </div>
          </motion.div>
        )}

        {stage === 'hi' && (
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="https://example.com/cat.gif"
              alt="Animated Cat"
              className="h-32 w-32 mb-4"
              initial={{ y: '100vh', x: '-50%' }}
              animate={{ y: 0, x: '-50%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ position: 'fixed', left: '50%' }}
            />
            <p className="text-3xl font-bold text-gray-700 mb-2">Hi!</p>
          </motion.div>
        )}

        {stage === 'image' && (
          <motion.div
            className="absolute flex items-center justify-center w-full h-full"
            initial={{ scale: 1, y: 0 }}
            animate={{ scale: 0.25, x: '-40vw', y: '-40vh' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div className="container mx-auto">
              <img src="https://via.placeholder.com/150" alt="Internet Image" className="w-64 h-64 rounded-full" />
            </div>
          </motion.div>
        )}

        {stage === 'header' && (
          <>
            <AnimatedSection><HeroSection /></AnimatedSection>
            <AnimatedSection><AboutMe /></AnimatedSection>
            <AnimatedSection><WorkExperience /></AnimatedSection>
            <AnimatedSection><Technologies /></AnimatedSection>
            <AnimatedSection><Education /></AnimatedSection>
            <AnimatedSection><Projects /></AnimatedSection>
            <AnimatedSection><ContactSection /></AnimatedSection>
            <AnimatedSection><Footer /></AnimatedSection>
          </>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg"
        >
          ↑
        </motion.button>
      )}

    </div>
  );
}

export default Home;

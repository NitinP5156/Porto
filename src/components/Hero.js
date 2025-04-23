import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../config/data';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-dark dark:text-light"
            >
              {portfolioData.name}
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl text-primary"
            >
              {portfolioData.title}
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-secondary"
            >
              {portfolioData.bio}
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
              <button
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download Resume
              </button>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <img
                src="/images/profile.jpg"
                alt={portfolioData.name}
                className="relative w-full h-full object-cover rounded-full border-4 border-primary shadow-xl"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 
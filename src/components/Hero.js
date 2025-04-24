import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../config/data';
import { ArrowDownTrayIcon, ArrowRightIcon, CodeBracketIcon, PaperAirplaneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import AnimatedButton from './AnimatedButton';
import VantaGlobe from './VantaGlobe';

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
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <VantaGlobe />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="inline-block">
              <span className="text-primary font-mono text-sm md:text-base">Hi, my name is</span>
            </motion.div>
            
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
              className="text-lg text-secondary max-w-lg"
            >
              {portfolioData.bio}
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <AnimatedButton
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2"
              >
                <span>Contact Me</span>
                <ArrowRightIcon className="h-5 w-5" />
              </AnimatedButton>
              
              <a
                href={portfolioData.resume}
                download="Nitingouda_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <AnimatedButton className="flex items-center justify-center gap-2">
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  <span>Download CV</span>
                </AnimatedButton>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
              <motion.img
                src="/images/profile.jpg"
                alt={portfolioData.name}
                className="relative w-full h-full object-cover rounded-full border-4 border-primary shadow-xl"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 
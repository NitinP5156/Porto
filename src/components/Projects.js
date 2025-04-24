import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../config/data';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import AnimatedButton from './AnimatedButton';
import '../styles/AnimatedButton.css';

const Projects = () => {
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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark dark:text-light"
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="flex space-x-4">
                        <AnimatedButton
                          onClick={() => window.open(project.github, '_blank')}
                          className="flex items-center justify-center"
                        >
                          <CodeBracketIcon className="h-5 w-5 text-white" />
                        </AnimatedButton>
                        <AnimatedButton
                          onClick={() => window.open(project.live, '_blank')}
                          className="flex items-center justify-center"
                        >
                          <ArrowTopRightOnSquareIcon className="h-5 w-5 text-white" />
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dark dark:text-light mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary mb-4 line-clamp-3">{project.description}</p>
                  
                  {project.features && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-dark dark:text-light mb-2">
                        Key Features:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-secondary">
                        {project.features.map((feature, index) => (
                          <li key={index} className="line-clamp-1">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
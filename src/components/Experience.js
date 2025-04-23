import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../config/data';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Experience = () => {
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark dark:text-light"
          >
            Experience & Education
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

            {/* Experience Items */}
            <div className="space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className="relative pl-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-6px] top-0 w-4 h-4 rounded-full bg-primary" />

                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <BriefcaseIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-dark dark:text-light">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-secondary text-sm">{exp.period}</p>
                        <p className="mt-2 text-secondary">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Education Items */}
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="relative pl-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-6px] top-0 w-4 h-4 rounded-full bg-primary" />

                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <AcademicCapIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-dark dark:text-light">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <p className="text-secondary text-sm">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 
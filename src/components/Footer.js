import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../config/data';
import { 
  CodeBracketIcon, 
  PaperAirplaneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-secondary">
              © {currentYear} {portfolioData.name}. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <CodeBracketIcon className="h-5 w-5 text-dark dark:text-light" />
            </a>
            <a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <PaperAirplaneIcon className="h-5 w-5 text-dark dark:text-light" />
            </a>
            <a
              href={portfolioData.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <MapPinIcon className="h-5 w-5 text-dark dark:text-light" />
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex space-x-6"
          >
            <a
              href="#about"
              className="text-secondary hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-secondary hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-secondary hover:text-primary transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 
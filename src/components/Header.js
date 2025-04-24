import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
import '../styles/ThemeToggle.css';

const Header = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(null);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  // Handle scroll effect with memoized navItems
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    // Update active section based on scroll position
    const sections = navItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      }
    });
  }, [navItems]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-white/70 dark:bg-dark/70 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onHoverStart={() => setIsHovered(item.id)}
                onHoverEnd={() => setIsHovered(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primary'
                }`}
              >
                {item.label}
                {(activeSection === item.id || isHovered === item.id) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleSidebar}
              className="p-2 md:hidden rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity" />
              <Bars3Icon className="w-6 h-6 text-dark dark:text-light relative z-10" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Gradient Border Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.header>
  );
};

export default Header; 
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sliding circle with icon */}
      <span
        className={`absolute h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out flex items-center justify-center
          ${isDark ? 'translate-x-7' : 'translate-x-1'}`}
      >
        {isDark ? (
          <MoonIcon className="h-4 w-4 text-indigo-500" />
        ) : (
          <SunIcon className="h-4 w-4 text-yellow-500" />
        )}
      </span>

      {/* Background icons */}
      <span
        className={`absolute left-1 transition-opacity duration-300 ${
          isDark ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <SunIcon className="h-4 w-4 text-yellow-500" />
      </span>
      <span
        className={`absolute right-1 transition-opacity duration-300 ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <MoonIcon className="h-4 w-4 text-indigo-500" />
      </span>
    </button>
  );
};

export default ThemeToggle; 
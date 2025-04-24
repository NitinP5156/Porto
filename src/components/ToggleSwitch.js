import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switch-wrapper">
      <input
        type="checkbox"
        id="theme-switch"
        className="theme-switch"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-switch" className="theme-switch-label">
        <div className="theme-switch-track">
          <div className="theme-switch-thumb">
            <div className="theme-switch-icons">
              <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.64 5.64l1.42 1.42M16.94 16.94l1.42 1.42M5.64 18.36l1.42-1.42M16.94 7.06l1.42-1.42" />
              </svg>
              <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch; 
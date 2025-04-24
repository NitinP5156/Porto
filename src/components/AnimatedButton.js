import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, className = '' }) => {
  return (
    <div className="button-container">
      <button className={`real-button ${className}`} onClick={onClick} />
      <div className="button-border">
        <div className="button">
          {children}
          <div className="backdrop" />
          <div className="spin spin-blur">
            <div className="spin spin-intense">
              <div className="spin spin-inside" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedButton; 
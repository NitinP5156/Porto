import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Create floating shapes with different types
  const shapes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
    size: Math.random() * 80 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 animate-gradient" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),rgba(99,102,241,0.1),rgba(236,72,153,0.1))] animate-pulse" />
      
      {/* Floating shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${
            shape.type === 'circle' 
              ? 'rounded-full' 
              : shape.type === 'square' 
                ? 'rounded-lg' 
                : 'clip-triangle'
          } bg-gradient-to-br from-primary/20 via-secondary/20 to-pink-500/20 dark:from-primary/10 dark:via-secondary/10 dark:to-pink-500/10`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, 60, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse-slow" />
      
      {/* Glass effect overlay */}
      <div className="absolute inset-0 backdrop-blur-[80px]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-5" />
    </div>
  );
};

export default AnimatedBackground; 
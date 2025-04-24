import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Create floating shapes with different types
  const shapes = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    type: ['circle', 'square', 'triangle', 'blob'][Math.floor(Math.random() * 4)],
    size: Math.random() * 100 + 30,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.4 + 0.1,
    color: Math.random() > 0.5 ? 'primary' : 'secondary',
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 animate-gradient" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),rgba(99,102,241,0.15),rgba(236,72,153,0.15))] animate-pulse" />
      
      {/* Floating shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${
            shape.type === 'circle' 
              ? 'rounded-full' 
              : shape.type === 'square' 
                ? 'rounded-lg' 
                : shape.type === 'blob'
                  ? 'blob'
                  : 'clip-triangle'
          } ${
            shape.color === 'primary'
              ? 'bg-gradient-to-br from-primary/30 via-secondary/30 to-pink-500/30'
              : 'bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-indigo-500/30'
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 70, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
            borderRadius: shape.type === 'blob' ? [
              '50% 50% 50% 50%',
              '60% 40% 30% 70%',
              '50% 50% 50% 50%'
            ] : undefined,
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
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Glass effect overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground; 
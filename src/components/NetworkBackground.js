import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './NetworkBackground.css';

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const particleCount = 80;
    const maxDistance = 200;
    
    const lightColors = [
      '#0070F3', // Vercel blue
      '#7928CA', // Vercel purple
      '#FF0080', // Vercel pink
      '#FF4D4D', // Vercel red
      '#F5A623', // Vercel orange
    ];

    const darkColors = [
      '#60A5FA', // Light blue
      '#A78BFA', // Light purple
      '#F472B6', // Light pink
      '#FB7185', // Light red
      '#FCD34D', // Light yellow
    ];

    const colors = theme === 'dark' ? darkColors : lightColors;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.1,
          pulseSpeed: Math.random() * 0.05 + 0.01,
          pulseSize: Math.random() * 2 + 1,
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        });
      }
    };

    // Draw particles and connections
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        // Update particle properties
        particle.angle += particle.rotationSpeed;
        particle.radius = particle.pulseSize + Math.sin(Date.now() * particle.pulseSpeed) * 0.5;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls with slight angle change
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.angle += Math.PI / 4;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.angle += Math.PI / 4;
        }
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            
            gradient.addColorStop(0, particles[i].color);
            gradient.addColorStop(1, particles[j].color);

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = opacity * 0.2;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Add some random sparkles
      if (Math.random() > 0.95) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 4 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Initialize
    resizeCanvas();
    initParticles();
    draw();

    // Handle resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-run effect when theme changes

  return (
    <div className="network-background">
      <canvas ref={canvasRef} className="network-canvas" />
    </div>
  );
};

export default NetworkBackground; 
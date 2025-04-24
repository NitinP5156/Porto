import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './VantaGlobe.css';

const VantaGlobe = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Load Vanta.js script dynamically
    const loadVanta = async () => {
      if (typeof window !== 'undefined' && !window.VANTA) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js';
        script.async = true;
        document.body.appendChild(script);

        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      if (window.VANTA && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3a82ff,
          color2: 0x3a82ff,
          backgroundColor: 0x0,
          size: 1.00,
          speed: 1.00,
          THREE: THREE
        });
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div className="vanta-container">
      <div ref={vantaRef} className="vanta-globe" />
    </div>
  );
};

export default VantaGlobe; 
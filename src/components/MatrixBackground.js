import React, { useEffect, useRef } from 'react';
import './MatrixBackground.css';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (mix of Arabic numbers, English, and special chars)
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()_+-=[]{}|;:,.<>?~`アラブハック';
    const charArray = chars.split('');

    // Font settings
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    // Create drops array
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Draw function
    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix green colors
      const brightGreen = 'rgba(0, 255, 65, 1)';
      const mediumGreen = 'rgba(0, 255, 65, 0.6)';
      const dimGreen = 'rgba(0, 255, 65, 0.2)';
      
      ctx.font = `bold ${fontSize}px 'Courier New', monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Add gradient effect - brighter at top, dimmer at bottom
        const progress = y / canvas.height;
        let color;
        
        if (progress < 0.1) {
          color = brightGreen;
        } else if (progress < 0.3) {
          color = mediumGreen;
        } else {
          color = dimGreen;
        }
        
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);

        // Add glow effect for brighter characters
        if (progress < 0.2) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(0, 255, 65, 0.8)';
        } else {
          ctx.shadowBlur = 0;
        }

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
      
      // Reset shadow
      ctx.shadowBlur = 0;
    };

    // Animation loop
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.3
      }}
    />
  );
};

export default MatrixBackground;

// File: AnimatedBorderCTA.js

import React, { useState, useRef, useEffect } from 'react';
import './AnimatedBorderCTA.css'; // Make sure to import the CSS file

const AnimatedBorderCTA = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`cta-container ${isVisible ? 'border-animate' : ''}`}>
      {children}
      <svg className="cta-border" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect x="0.5" y="0.5" width="99" height="99" rx="15" ry="15" />
</svg>
    </div>
  );
};

export default AnimatedBorderCTA;

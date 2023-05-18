import React, { useEffect, useRef, useState } from 'react';
// import './ScrollingContent.css'; // Create a CSS file for styling
import "./SVG.css"


const ScrollingContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.9 } // Adjust the threshold as needed
    );

    observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`scrolling-content ${isVisible ? 'fade-out' : ''}`}
      ref={contentRef}
    >
      <p>This is some scrolling content.</p>
    </div>
  );
};

export default ScrollingContent;

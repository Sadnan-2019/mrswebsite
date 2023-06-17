import { useEffect, useState } from "react";

const AnimatedText = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const element = document.getElementById('animated-text');
        if (element && !isVisible) {
          const elementTop = element.getBoundingClientRect().top;
          const windowBottom = window.innerHeight;
  
          if (elementTop < windowBottom) {
            setIsVisible(true);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isVisible]);
  
    return (
      <h1 id="animated-text" className={isVisible ? 'animate__animated animate__bounceInLeft' : ''}>
        Scroll down to see the animation
      </h1>
    );
  };
  
  export default AnimatedText;
  
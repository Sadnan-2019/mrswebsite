import React, { useState, useEffect } from 'react';
import moment from 'moment';
// import './ScrollingTime.css'; // Create a CSS file for styling
import "./SVG.css"

const ScrollingTime = () => {
  const [currentTime, setCurrentTime] = useState(moment().format('hh:mm:ss A'));
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(moment().format('hh:mm:ss A'));
      setFade(true);
    };

    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`scrolling-time ${fade ? 'fade-in' : ''}`}>
      {currentTime}
    </div>
  );
};

export default ScrollingTime;

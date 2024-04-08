import React, { useState, useEffect } from 'react';
import './AnimatedText.css'; // Import CSS file for styles

const AnimatedText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Hide the current text
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true); // Show the next text
      }, 500); // Set timeout for smooth transition
    }, 2000); // Change text every 2 seconds (2000 milliseconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, [texts]);

  return (
    <div className="animated-text-container">
      <div className="static-text">Designed & Developed by</div>
      <div className={`animated-text ${isVisible ? 'show' : 'hide'}`}>
        {texts[currentIndex]}
      </div>
    </div>
  );
};

export default AnimatedText;

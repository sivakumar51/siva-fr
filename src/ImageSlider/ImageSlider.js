import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import produc1 from '../Image/14.png.jpg';
import produc2 from '../Image/16.png.jpg';
import produc3 from '../Image/8.png.jpg';
import produc4 from '../Image/10.png.jpg';

const images = [
   produc1,produc2,produc3,produc4
];

const AutoImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="slider">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      />
    </div>
  );
};

export default AutoImageSlider;

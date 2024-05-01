
import React, { useState } from 'react';
import './ImageSlider.css'; 
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import image4 from '../assets/image4.webp';
import image5 from '../assets/image5.webp';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ImageSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  const handleScroll = (event) => {
    const delta = Math.max(-1, Math.min(1, (event.nativeEvent.deltaY || -event.nativeEvent.detail)));
    setScrollPosition((prevPosition) => prevPosition + delta * 100); // Adjust the scrolling speed
  };

  const handleAnimationEnd = () => {
    setScrollPosition((prevPosition) => prevPosition - images[images.length - 1].width);
  };

  const scrollLeft = () => {
    setScrollPosition((prevPosition) => prevPosition - 100); 
  };

  const scrollRight = () => {
    setScrollPosition((prevPosition) => prevPosition + 100); 
  };

  return (
    <div className="image-slider" onWheel={handleScroll} onAnimationEnd={handleAnimationEnd}>
      <div className="image-slider-container" style={{ transform: `translateX(${scrollPosition}px)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="slider-image" />
        ))}
      </div>
      <div className="slider-buttons">
        <button className="slider-button" onClick={scrollLeft}><FaAngleLeft /></button>
        <button className="slider-button" onClick={scrollRight}><FaAngleRight /></button>
      </div>
    </div>
  );
};

export default ImageSlider;

import React, { useState } from 'react';
import Slider from 'react-slick';
import './SliderWithFadeInTextAnimation.css';

const SliderWithFadeInTextAnimation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleSlideChange,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="slider-image-1.jpg" alt="Slider 1" />
          <h2 className={`slide-text ${currentSlide === 0 ? 'fade-in' : ''}`}>Text for Slide 1</h2>
        </div>
        <div>
          <img src="slider-image-2.jpg" alt="Slider 2" />
          <h2 className={`slide-text ${currentSlide === 1 ? 'fade-in' : ''}`}>Text for Slide 2</h2>
        </div>
        <div>
          <img src="slider-image-3.jpg" alt="Slider 3" />
          <h2 className={`slide-text ${currentSlide === 2 ? 'fade-in' : ''}`}>Text for Slide 3</h2>
        </div>
      </Slider>
    </div>
  );
};

export default SliderWithFadeInTextAnimation;

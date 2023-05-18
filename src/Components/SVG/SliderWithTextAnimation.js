import React, { useState } from 'react';
import Slider from 'react-slick';
import './SliderWithTextAnimation.css';

const SliderWithTextAnimation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="slider-image-1.jpg zoom-in-on-scroll" alt="Slider 1" />
          <h2 className={`slide-text zoom-in-on-scroll ${currentSlide === 0 ? 'animated' : ''}`} data-aos="zoom-in" >Text for Slide 1</h2>
        </div>
        <div>
          <img src="slider-image-2.jpg" alt="Slider 2" />
          <h2 className={`slide-text zoom-in-on-scroll ${currentSlide === 1 ? 'animated' : ''}`} data-aos="zoom-in">Text for Slide 2</h2>
        </div>
        <div>
          <img src="slider-image-3.jpg" alt="Slider 3" />
          <h2 className={`slide-text ${currentSlide === 2 ? 'animated' : ''}`}>Text for Slide 3</h2>
        </div>
      </Slider>
    </div>
  );
};

export default SliderWithTextAnimation;

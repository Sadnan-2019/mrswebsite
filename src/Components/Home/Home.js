import React from 'react';
import Landing from '../Landing/Landing';
import Service from '../Service/Service';
import Review from '../Review/Review';
import Working from '../Working/Working';
import Achievement from '../Working/Achievement/Achievement';
import SVG from '../SVG/SVG';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
           <Landing></Landing>
      {/* <Shape></Shape> */}
      <Service></Service>
      <Review></Review>

      <Working></Working>
      <Achievement></Achievement>

    <Contact></Contact>
     
        </div>
    );
};

export default Home;
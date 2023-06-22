import React from 'react';
import Landing from '../Landing/Landing';
import Service from '../Service/Service';
import Review from '../Review/Review';
import Working from '../Working/Working';
import Achievement from '../Working/Achievement/Achievement';
import SVG from '../SVG/SVG';
import Contact from '../Contact/Contact';
import Clients from '../Clients/Clients';
// import Landingnew from '../Landingnew/Landingnew';

const Home = () => {
    return (
        <div>
           {/* <Landing></Landing> */}
      {/* <Shape></Shape> */}
      {/* <Landingnew></Landingnew> */}
      <Service></Service>
      {/* <Review></Review> */}
<Clients></Clients>
      <Working></Working>
      <Achievement></Achievement>

    <Contact></Contact>
     
        </div>
    );
};

export default Home;
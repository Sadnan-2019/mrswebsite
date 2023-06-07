import React from 'react';
import Marquee from "react-fast-marquee";
import popular from "../../assets/hospital/popular.png";
import universal from "../../assets/logosub.png";
import universal2 from "../../assets/logostatecollege.jpg";
 

const Clients = () => {
    return (
        <div>
            <div className="blog md:mx-16 lg:mx-24 mx-8 py-12">
        <h2 className="text-xl text-center   font-bold poppins-b lg:text-4xl  " style={{ color: "#453364" }}>
      Our Clients
        </h2>
        <h1
            className="  w-64 h-1 rounded-lg mt-2 mb-4 mx-auto"
            style={{ backgroundColor: "#453364" }}
          ></h1>
      </div>
      <Marquee className='bg-gradient-to-r from-purple-400 to-pink-600'  gradientColor={false} speed={80} gradient={false} play={true}>
        <div className="  	 	 mx-10">
          <img
            src={universal}
            alt="Shoes"
            className=" w-32   "
          />
        </div>
        <div     className="       	  mx-10">
          <img
            src={universal2}
            alt="Shoes"
            className=" rounded-full  w-20   "
          />
        </div>
       
        
      
      

      </Marquee>
        </div>
    );
};

export default Clients;
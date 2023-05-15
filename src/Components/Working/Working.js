import React from "react";
import skach from "../../assets/skach.png";
import creative from "../../assets/creativeprocess.png";
import design from "../../assets/design&development.png";
import final from "../../assets/FinalProduct.png";

const Working = () => {
  return (
    <div>
      <div
        className="bg-no-repeat	bg-cover py-12"
        style={{
          backgroundImage: `url(" https://i.ibb.co/vjYby3x/ANOTHERMRS.png")`,
        }}
      >
        <div className=" md:mx-16 lg:mx-24 mx-8 ">
          <h2 className="text-3xl text-center py-12   font-bold poppins-b sm:text-4xl text-white">
            Our Working Process
          </h2>
        </div>
        <div className=" grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4  mx-10 gap-10    justify-items-center   ">
          <div
            className="  "
            // data-aos="flip-left"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
            style={{ height: "300px" }}
          >
            <figure className="  	">
              <img
                src={skach}
                alt="Shoes"
                className=" mx-auto	  p-4  "
                style={{ height: "150px", borderRadius: "25px" }}
              />
            </figure>
            <div className=" items-center text-center text-white p-4">
              <p className="text-[20px]">Sketch</p>
              <p className="text-justify	text-[15px] poppins-t">
                There is difference between taking physiotherapy at home & going
                to a physiotherapy center.You save money of transport & waiting
                for longer time.You get service at the comfort at your home.
              </p>
            </div>
          </div>
          <div
            className="  "
            // data-aos="flip-left"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
            style={{ height: "300px" }}
          >
            <figure className="   	">
              <img
                src={creative}
                alt="Shoes"
                className="mx-auto	 	  p-4  "
                style={{ height: "150px", borderRadius: "25px" }}
              />
            </figure>
            <div className=" items-center text-center text-white p-4">
              <p className="text-[20px]">Creative Process</p>
              <p className="text-justify	text-[15px] poppins-t">
                There is difference between taking physiotherapy at home & going
                to a physiotherapy center.You save money of transport & waiting
                for longer time.You get service at the comfort at your home.
              </p>
            </div>
          </div>
          <div
            className="  "
            // data-aos="flip-left"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
            style={{ height: "300px" }}
          >
            <figure className="  	">
              <img
                src={design}
                alt="Shoes"
                className=" mx-auto		  p-4  "
                style={{ height: "150px", borderRadius: "25px" }}
              />
            </figure>
            <div className=" items-center text-center text-white p-4">
              <p className="text-[20px]">Design & Development</p>
              <p className="text-justify	text-[15px] poppins-t">
                There is difference between taking physiotherapy at home & going
                to a physiotherapy center.You save money of transport & waiting
                for longer time.You get service at the comfort at your home.
              </p>
            </div>
          </div>
          <div
            className="  "
            // data-aos="flip-left"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
            style={{ height: "300px" }}
          >
            <figure className="  	">
              <img
                src={final}
                alt="Shoes"
                className=" mx-auto		  p-4  "
                style={{ height: "150px", borderRadius: "25px" }}
              />
            </figure>
            <div className=" items-center text-center text-white p-4">
              <p className="text-[20px]">Design & Development</p>
              <p className="text-justify	text-[15px] poppins-t">
                There is difference between taking physiotherapy at home & going
                to a physiotherapy center.You save money of transport & waiting
                for longer time.You get service at the comfort at your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
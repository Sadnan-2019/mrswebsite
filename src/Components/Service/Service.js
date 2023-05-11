 import React from 'react';
 
 const Service = () => {
    return (
        <div className=' bg-gradient-to-r from-[#92468E] to-[#38235D] shadow-xl  text-white'>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-10 gap-10      py-8 ">


                    <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "400px" }}
          >
            <figure className="">
              <img
                src="https://my.canon/media/image/2020/10/12/1f38de91f8ea4a6f91e108977ae4ca53_M50MII_Black_FrontSlantLeft_M55-200.png"
                alt="Shoes"
                className="  p-4  "
                style={{ height: "250px", borderRadius: "25px" }}
              />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Prof. Dr. Dhiman Banik</h2>
              <p>Professor & Senior Consultant Cardiologist</p>
              <p>
                MBBS, D-Card, MD (Card.), Associate Fellow-American College of
                Cardiology
              </p>
            </div>
          </div>
                        </div>

        </div>
    );
 };
 
 export default Service;
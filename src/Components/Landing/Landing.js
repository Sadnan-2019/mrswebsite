import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landing.css";
import camera from "../../assets/camera.jpeg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import Nav from "../Nav/Nav";
const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
    // autoplay:"true",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleType = (count) => {
    // access word count number
    // console.log(count)
  };
  const handleDone = () => {
    // console.log(`Done after 5 loops!`)
  };

  return (
    <div>
      <div className="   py-7   h-auto   landingtext">
        <Nav className=" "></Nav>

        <Slider {...settings}>
          <div className=" ">
            <section className="landingone  blog h-auto landingone     bg-gradient-to-r from-[#92468E] to-[#38235D] shadow-xl  text-white">
              <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
                <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                  {/* <div className="hidden lg:flex items-center gap-2   lg:bg-gray-100 w-fit px-3 rounded-full py-2 border-[1px]  lg:border-gray-200 mb-5">
            <p className="hidden lg:block px-2 py-[2px] text-white lg:rounded-full  " style={{backgroundColor: "#453364" }}>
              $
            </p>
            <p className='hidden lg:block text-sm '>Discover the easiest way to get our service!</p>
          </div> */}
                  {/* <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="md:text-[43px] font-bold text-[20px] text-left poppins-b "
                  >
                    Media Resource Solution
                  </p> */}
                  <h2
                    style={{ lineHeight: "120%", color: "white" }}
                    className={`slide-text  md:text-[43px] font-bold text-[20px] text-left poppins-b ${
                      currentSlide === 0 ? "animated" : ""
                    }`}
                     
                  >
                    {" "}
                    Media Resource Solution
                  </h2>

                  {/* <p
                  
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t    "
                    style={{ lineHeight: "120%", color: "white" }}
                  >
                    First ever one-stop high-quality media resource solution at
                    your doorstep.{" "}
                  </p> */}

                  <h1
                    className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
                    style={{ lineHeight: "120%", color: "white" }}
                  >
                    First ever one-stop high-quality{" "}
                    <span className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t   ">
                      {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={["  media resource solution at your doorstep"]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        cursorBlinking={true}
                        onLoopDone={handleDone}
                        onType={handleType}
                      />
                    </span>
                  </h1>

                  <div className="flex items-center mt-2 font-bold">
                    <FaPhoneVolume
                      className="lg:text-2xl text-[20px] "
                      style={{ color: "white" }}
                    />
                    <span
                      className="lg:text-2xl text-[20px] "
                      style={{ color: "white" }}
                    >
                      {" "}
                      Call Now: 01619848555
                    </span>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="flex  gap-4 mt-10 text-center"
                  >
                    <a
                      className=" hidden hover-button bg-gradient-to-r from-[#92468E] to-[#38235D]  md:inline-flex items-center     border          text-white "
                      href="/"
                    >
                      <span className="text-sm font-medium">
                        {" "}
                        GET STARTED WITH US
                      </span>
                      <BsArrowRight className="text-lg ml-2" />
                    </a>
                    {/* <button class="hover-button">Hover Me</button> */}
                  </div>

                  {/* <div class="shape"></div> */}
                </div>

                <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0 rotation-container ">
                  <img
                    src={camera}
                    alt=""
                    className="rounded-full h-5/6 w-5/6 "
                  />
                </div>
              </div>

              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                {/* <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="white"
                    fill-opacity="50"
                    d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg> */}
              </div>
            </section>
          </div>
          <div className=" ">
            <section className="landingone  blog h-auto landingone     bg-gradient-to-r from-[#92468E] to-[#38235D] shadow-xl  text-white">
              <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
                <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                  {/* <div className="hidden lg:flex items-center gap-2   lg:bg-gray-100 w-fit px-3 rounded-full py-2 border-[1px]  lg:border-gray-200 mb-5">
            <p className="hidden lg:block px-2 py-[2px] text-white lg:rounded-full  " style={{backgroundColor: "#453364" }}>
              $
            </p>
            <p className='hidden lg:block text-sm '>Discover the easiest way to get our service!</p>
          </div> */}
                  <h2
                    style={{ lineHeight: "120%", color: "white" }}
                    className={`slide-text  md:text-[43px] font-bold text-[20px] text-left  ${
                      currentSlide === 1 ? "animated" : ""
                    }`}
                    
                  >
                    {" "}
                    Media Resource Solution
                  </h2>

                  {/* <p
                  
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t    "
                    style={{ lineHeight: "120%", color: "white" }}
                  >
                    First ever one-stop high-quality media resource solution at
                    your doorstep.{" "}
                  </p> */}

                  <h1
                    className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
                    style={{ lineHeight: "120%", color: "white" }}
                  >
                    First ever one-stop high-quality{" "}
                    <span className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t   ">
                      {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={["  media resource solution at your doorstep"]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        cursorBlinking={true}
                        onLoopDone={handleDone}
                        onType={handleType}
                      />
                    </span>
                  </h1>

                  <div className="flex items-center mt-2 font-bold">
                    <FaPhoneVolume
                      className="lg:text-2xl text-[20px] "
                      style={{ color: "white" }}
                    />
                    <span
                      className="lg:text-2xl text-[20px] "
                      style={{ color: "white" }}
                    >
                      {" "}
                      Call Now: 01619848555
                    </span>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="flex  gap-4 mt-10 text-center"
                  >
                    <a
                      className=" hidden hover-button bg-gradient-to-r from-[#92468E] to-[#38235D]  md:inline-flex items-center     border          text-white "
                      href="/"
                    >
                      <span className="text-sm font-medium">
                        {" "}
                        GET STARTED WITH US
                      </span>
                      <BsArrowRight className="text-lg ml-2" />
                    </a>
                    {/* <button class="hover-button">Hover Me</button> */}
                  </div>

                  {/* <div class="shape"></div> */}
                </div>

                <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0 rotation-container ">
                  <img
                    src={camera}
                    alt=""
                    className="rounded-full h-5/6 w-5/6 "
                  />
                </div>
              </div>

              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                {/* <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="white"
                    fill-opacity="50"
                    d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg> */}
              </div>
            </section>
          </div>
          <div className=" ">
            <section className="landingone  blog h-auto landingone     bg-gradient-to-r from-[#92468E] to-[#38235D] shadow-xl  text-white">
              <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
                <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                  {/* <div className="hidden lg:flex items-center gap-2   lg:bg-gray-100 w-fit px-3 rounded-full py-2 border-[1px]  lg:border-gray-200 mb-5">
            <p className="hidden lg:block px-2 py-[2px] text-white lg:rounded-full  " style={{backgroundColor: "#453364" }}>
              $
            </p>
            <p className='hidden lg:block text-sm '>Discover the easiest way to get our service!</p>
          </div> */}
                 <h2
                    style={{ lineHeight: "120%", color: "white" }}
                    className={`slide-text  md:text-[43px] font-bold text-[20px] text-left poppins-b ${
                      currentSlide === 2 ? "animated" : ""
                    }`}
                     
                  >
                    {" "}
                    Media Resource Solution
                  </h2>

                  {/* <p
                  
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t    "
                    style={{ lineHeight: "120%", color: "white" }}
                  >
                    First ever one-stop high-quality media resource solution at
                    your doorstep.{" "}
                  </p> */}

                  <h1
                    className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
                    style={{ lineHeight: "120%", color: "white" }}
                  >
                    First ever one-stop high-quality{" "}
                    <span className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t   ">
                      {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={["  media resource solution at your doorstep"]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        cursorBlinking={true}
                        onLoopDone={handleDone}
                        onType={handleType}
                      />
                    </span>
                  </h1>

                  <div className="flex items-center mt-2 font-bold">
                    <FaPhoneVolume
                      className="lg:text-2xl text-[20px] "
                      style={{ color: "white" }}
                    />
                    <span
                      className="lg:text-2xl text-[20px] "
                      style={{ color: "white" }}
                    >
                      {" "}
                      Call Now: 01619848555
                    </span>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="flex  gap-4 mt-10 text-center"
                  >
                    <a
                      className=" hidden hover-button bg-gradient-to-r from-[#92468E] to-[#38235D]  md:inline-flex items-center     border          text-white "
                      href="/"
                    >
                      <span className="text-sm font-medium">
                        {" "}
                        GET STARTED WITH US
                      </span>
                      <BsArrowRight className="text-lg ml-2" />
                    </a>
                    {/* <button class="hover-button">Hover Me</button> */}
                  </div>

                  {/* <div class="shape"></div> */}
                </div>

                <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0 rotation-container ">
                  <img
                    src={camera}
                    alt=""
                    className="rounded-full h-5/6 w-5/6 "
                  />
                </div>
              </div>

              {/* <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="white"
                    fill-opacity="50"
                    d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg>
              </div> */}
            </section>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Landing;

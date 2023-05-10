import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landing.css";
import camera from "../../assets/main-camera.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";
import Nav from "../Nav/Nav";
const Landing = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,

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

  return (
    <div>
      <div className="   py-7 h-auto w-auto landingtext">
        <Nav></Nav>
        <Slider {...settings}>
          <div className=" ">
            <section className="  blog h-auto landingone     bg-gradient-to-r from-[#92468E] to-[#38235D] shadow-xl  text-white">
              <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
                <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                  {/* <div className="hidden lg:flex items-center gap-2   lg:bg-gray-100 w-fit px-3 rounded-full py-2 border-[1px]  lg:border-gray-200 mb-5">
            <p className="hidden lg:block px-2 py-[2px] text-white lg:rounded-full  " style={{backgroundColor: "#453364" }}>
              $
            </p>
            <p className='hidden lg:block text-sm '>Discover the easiest way to get our service!</p>
          </div> */}
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="md:text-[43px] font-bold text-[20px] text-left poppins-b "
                    style={{ lineHeight: "120%", color: "white" }}
                  >
                    Media Resource Solution
                  </p>

                  <p
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t    "
                    style={{ lineHeight: "120%", color: "white" }}
                  >
                    First ever one-stop high-quality media resource solution at
                    your doorstep.{" "}
                  </p>

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
                      className= " hidden hover-button bg-gradient-to-r from-[#92468E] to-[#38235D]  md:inline-flex items-center     border          text-white "
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
                {/* <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                  <img src={camera} className="rotation-container" alt="" />
                </div> */}

                <div class="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0 rotation-container">
  <img src={camera} alt=""/>
</div>
              </div>


            </section>
          </div>
          <div className=" ">
            <div className="hero      sm:min-h-screen-0 lg:min-h-screen landingtwo">
              <div className="  sm:bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content lg:text-neutral-content">
                <div className="max-w-md">
                  <h1
                    className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                  >
                    Welcome to The{" "}
                  </h1>
                  <h1
                    className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                  >
                    Passive Exercise
                  </h1>
                  <p className="lg:mb-5 animate__animated animate__fadeInRight">
                    Some Physical Conditions Need to be Treated by Passive
                    Exercise. Stroke Induced Paralysis is One of Them.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="hero      sm:min-h-screen-0 lg:min-h-screen landingthree">
              <div className="  bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content lg:text-neutral-content">
                <div className="max-w-md">
                  {/* <h1 className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"  data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000">Welcome to The </h1> */}
                  <h1
                    className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                  >
                    Shortwave Diathermy
                  </h1>
                  <p className="lg:mb-5 animate__animated animate__fadeInRight">
                    This Machine is Used to Give Deep Heat to the inflamed
                    Tissues of the Body. It Improves Circulation thus Enhances
                    Healing Process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="hero      sm:min-h-screen-0 lg:min-h-screen landingfour">
              <div className="  sm:bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content lg:text-neutral-content">
                <div className="max-w-md">
                  <h1
                    className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                  >
                    Active Exercise
                  </h1>
                  <p className="lg:mb-5 animate__animated animate__fadeInRight">
                    Active Exercise Improves Function, Increases Capability &
                    Boosts Up. Physical & Mental Wellbeing. It can reduce the
                    risk of many diseases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        
        </Slider>
      </div>
    </div>
  );
};

export default Landing;

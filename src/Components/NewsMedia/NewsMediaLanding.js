import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";

const NewsMediaLanding = () => {
  return (
    <div>
      <section className="   blog h-auto bg-gradient-to-r from-[#92468E] to-[#38235D]     shadow-xl  text-white">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
          <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
            <h2
              style={{ lineHeight: "120%" }}
              className="md:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "
            >
              {" "}
              WE ARE INFLUENCER MARKETING.
            </h2>

            <h1
              className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
              style={{ lineHeight: "120%", color: "white" }}
            >
              Strategy and execution from the company that launched the
              industry.{" "}
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

            <div className="flex  gap-4 mt-10 text-center">
              <a
                href="/"
                className="md:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "

              >
                <span className="text-sm font-medium">
                  {" "}
                  GET STARTED WITH US
                </span>
                <BsArrowRight className="text-lg ml-2" />
              </a>
            </div>
          </div>

          {/* <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
                  <img
                    src={camera}
                    alt=""
                    className="rounded-full h-5/6 w-5/6 "
                  />
                </div> */}
        </div>

        <div
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
        </div>
      </section>
    </div>
  );
};

export default NewsMediaLanding;

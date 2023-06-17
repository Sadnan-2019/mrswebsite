import React from "react";
import carrer from "../../assets/careearlanding.jpg";
import "./AboutLanding.css"
const AboutLanding = () => {
  return (
    <div>
      <section className="aboutlanding    blog        text-white">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
          <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8  order-2   lg:mt-0">
            <h2
              style={{ lineHeight: "120%" }}
              className="md:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "
            >
              {" "}
              JOIN OUR TEAM.
            </h2>

            <h1
              className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
              style={{ lineHeight: "120%", color: "white" }}
            >
              Work Together For Success{" "}
            </h1>

            {/* <div className="flex items-center mt-2 font-bold">
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
            </div> */}

            {/* <div className="flex  gap-4 mt-10 text-center">
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
            </div> */}
          </div>

          <div class="  sm:max-w-xs   text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
            <img
              src={carrer}
              alt=""
              className="diamond h-5/6 w-5/6 "
              data-aos="fade-left"
            />
          </div>
        </div>

        
      </section>
    </div>
  );
};

export default AboutLanding;

import React from "react";
import carrer from "../../assets/careearlanding.jpg";
const AboutLanding = () => {
  return (
    <div>
      <section className="carrerlanding    blog h-auto       shadow-xl  text-white">
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

          <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
            <img
              src={carrer}
              alt=""
              className="rounded-full h-5/6 w-5/6 "
              data-aos="fade-left"
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
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stop-color="#F78DA7"></stop>
                <stop offset="95%" stop-color="#8ED1FC"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 97.29186602870817,207.66507177033492 194.58373205741634,215.33014354066987 292,209 C 389.41626794258366,202.66985645933013 486.956937799043,182.3444976076555 578,172 C 669.043062200957,161.6555023923445 753.5885167464115,161.2918660287081 860,183 C 966.4114832535885,204.7081339712919 1094.688995215311,248.48803827751198 1195,255 C 1295.311004784689,261.511961722488 1367.6555023923445,230.755980861244 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              stroke-width="0"
              fill="white"
              fill-opacity="50"
              class="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default AboutLanding;

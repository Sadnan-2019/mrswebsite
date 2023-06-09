import React from "react";
import video from "../../assets/VIdeoEditone.png";
import graphices from "../../assets/graphic-design (1).png";
import digitalmarketing from "../../assets/social-media (1).png";
// import SEO from "../../assets/seo (3).png";
// import SEO1 from "../../assets/seo (5).png";
import SEO2 from "../../assets/seo (1).png";
import web from "../../assets/webdevelopment.png";
import mobile from "../../assets/mobile-app.png";
import content from "../../assets/content.png";
import "./Service.css";
const Service = () => {
  return (
    <div className=" bg-gradient-to-r from-[rgb(146,70,142)] to-[#38235D]  text-white">
      <div
        className=" "
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h2 className="text-3xl text-center text-white py-10  font-bold poppins-b sm:text-4xl">
          Our Service
        </h2>
      </div>
      {/* <button class="my-button justify-items-center">Click me</button> */}

      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  mx-10 gap-10  px-10 justify-items-center  py-10 ">
        <div
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          class="  card  mask mask-hexagon   text-white    w-full max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  "
          style={{ height: "400px" }}
        >
          <div
            className="       "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000"
          >
            <figure className=" rounded-lg image-container">
              <img
                src={video}
                alt="Shoes"
                className="rounded-xl p-4 "
                style={{ height: "100px" }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Video Editing</h2>
              <p className="mt-1 text-sm text-left text-white poppins-t lg:text-justify">
                Our fifteen employee-team works round the clock to serve the
                community. We are ready to answer phone calls 24/7.We are open
                for conversation listening to attendants complaints.We can
                provide home service with caregiver even at mid night.
              </p>
              {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
        <div
          // data-aos="fade-up"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          class="  card  mask mask-hexagon   text-white    w-full max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  "
          style={{ height: "400px" }}
        >
          <div
            className="       "
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000"
          >
            <figure className=" rounded-lg image-container">
              <img
                src={graphices}
                alt="Shoes"
                className="rounded-xl p-4"
                style={{ height: "100px" }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Graphic Design</h2>
              <p className="mt-1 text-sm text-left text-white poppins-t lg:text-justify">
                Our fifteen employee-team works round the clock to serve the
                community. We are ready to answer phone calls 24/7.We are open
                for conversation listening to attendants complaints.We can
                provide home service with caregiver even at mid night.
              </p>
              {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
        <div
          // data-aos="fade-left"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          class="  card  mask mask-hexagon   text-white    w-full max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  "
          style={{ height: "400px" }}
        >
          <div
            className="       "
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000"
          >
            <figure className=" rounded-lg image-container">
              <img
                src={digitalmarketing}
                alt="Shoes"
                className="rounded-xl p-4"
                style={{ height: "100px" }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Digital Marketing</h2>
              <p className="mt-1 text-sm text-left text-white poppins-t lg:text-justify">
                Our fifteen employee-team works round the clock to serve the
                community. We are ready to answer phone calls 24/7.We are open
                for conversation listening to attendants complaints.We can
                provide home service with caregiver even at mid night.
              </p>
              {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
        <div
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          class="  card  mask mask-hexagon   text-white    w-full max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  "
          style={{ height: "400px" }}
        >
          <div
            className="       "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000"
          >
            <figure className=" rounded-lg image-container">
              <img
                src={SEO2}
                alt="Shoes"
                className="rounded-xl p-4"
                style={{ height: "100px" }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Search Engine Optiomization</h2>
              <p className="mt-1 text-sm text-left text-white poppins-t lg:text-justify">
                Our fifteen employee-team works round the clock to serve the
                community. We are ready to answer phone calls 24/7.We are open
                for conversation listening to attendants complaints.We can
                provide home service with caregiver even at mid night.
              </p>
              {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
        <div
          // data-aos="fade-up"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          class="  card  mask mask-hexagon   text-white    w-full max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  "
          style={{ height: "400px" }}
        >
          <div
            className="       "
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000"
          >
            <figure className=" rounded-lg image-container">
              <img
                src={web}
                alt="Shoes"
                className="rounded-xl p-4"
                style={{ height: "100px" }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Web Development </h2>
              <p className="mt-1 text-sm text-left text-white poppins-t lg:text-justify">
                Our fifteen employee-team works round the clock to serve the
                community. We are ready to answer phone calls 24/7.We are open
                for conversation listening to attendants complaints.We can
                provide home service with caregiver even at mid night.
              </p>
              {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
        <div
          // data-aos="fade-left"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          class="  card  mask mask-hexagon   text-white    w-full max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  "
          style={{ height: "400px" }}
        >
          <div
            className="       "
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000"
          >
            <figure className=" rounded-lg image-container">
              <img
                src={mobile}
                alt="Shoes"
                className="rounded-xl p-4"
                style={{ height: "100px" }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">App Development</h2>
              <p className="mt-1 text-sm text-left text-white poppins-t lg:text-justify">
                Our fifteen employee-team works round the clock to serve the
                community. We are ready to answer phone calls 24/7.We are open
                for conversation listening to attendants complaints.We can
                provide home service with caregiver even at mid night.
              </p>
              {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
        <div
          // data-aos="fade-left"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"

          class="  card  mask mask-hexagon   text-white    w-full max-w-sm shadow-2xl bg-gradient-to-r from-[#38235D] to-[#ab4059]  "
          style={{ height: "400px" }}
        >
          <div
            className="       "
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000"
          >
            <figure className=" rounded-lg image-container">
              <img
                src={content}
                alt="Shoes"
                className="rounded-xl p-4"
                style={{ height: "100px" }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Content Writing</h2>
              <p className="mt-1 text-sm text-left text-white poppins-t lg:text-justify">
                Our fifteen employee-team works round the clock to serve the
                community. We are ready to answer phone calls 24/7.We are open
                for conversation listening to attendants complaints.We can
                provide home service with caregiver even at mid night.
              </p>
              {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 590"
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
          d="M 0,600 C 0,600 0,300 0,300 C 113.89285714285714,247.75 227.78571428571428,195.5 338,204 C 448.2142857142857,212.5 554.7500000000001,281.75 688,280 C 821.2499999999999,278.25 981.2142857142858,205.5 1111,197 C 1240.7857142857142,188.5 1340.392857142857,244.25 1440,300 C 1440,300 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg> */}
     <div
     data-aos="zoom-in"
     data-aos-offset="300"
     data-aos-delay="5000"
     data-aos-duration="3000"
     
     >
     <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        
      >
        <path
          fill="white"
          fill-opacity="50"
          d="M0,192L80,202.7C160,213,320,235,480,208C640,181,800,107,960,117.3C1120,128,1280,224,1360,272L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
     </div>
    </div>
  );
};

export default Service;

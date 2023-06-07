import { useSpring, animated } from "@react-spring/web";
import React, { useState } from "react";
import "./Achievement.css";
import achievement from "../../../assets/achievment.png";
import "animate.css";
import SVG from "../../SVG/SVG";

const Achievement = () => {
  function Number({ n }) {
    const [flip, set] = useState(false);
    const { number } = useSpring({
      reset: true,
      reverse: flip,
      from: { number: 0 },
      number: n,
      delay: 1000,
      config: { mass: 1, tension: 20, friction: 10 },
      onRest: () => set(!flip),
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  function Number2({ n }) {
    const [flip, set] = useState(false);
    const { number } = useSpring({
      reset: false,
      reverse: flip,
      from: { number: 0 },
      number: n,
      delay: 1000,
      config: { mass: 1, tension: 20, friction: 10 },
      onRest: () => set(!flip),
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  function Number3({ n }) {
    const [flip, set] = useState(false);
    const { number } = useSpring({
      reset: true,
      reverse: flip,
      from: { number: 0 },
      number: n,
      delay: 1000,
      config: { mass: 1, tension: 20, friction: 10 },
      onRest: () => set(!flip),
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  return (
    <div className="py-10">
      <div className="achievment">
        <div
          className=" "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h2 className="text-3xl text-center text-white py-10  font-bold poppins-b sm:text-4xl">
            Our Achievement
          </h2>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 py-10 text-white   gap-10  mx-10 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="">
            <img className="w-5/6 h-5/6" alt="" src={achievement} />
          </div>
          <div className="    text-white successtext grid grid-cols-1 lg:grid-cols-2 py-10">
            <div className="stat">
              <div className="stat-figure  ">{/* <p>bangladesh</p> */}</div>
              <div className="stat-value flex  ">
                <Number n={500} />
                <span>+</span>
              </div>
              <div className="text-[18px] font-bold  ">Happy Clients</div>

              {/* <div className="stat-desc text-1xl font-bold">
                21% more than last month
              </div> */}
            </div>
            <div className="stat">
              {/* <div className="stat-figure  "  >
               
              </div> */}
              <div className="stat-value flex  ">
                <Number2 n={200} />
                <span>+</span>
              </div>
              <div className="  text-[18px] font-bold">Quality Service</div>

              {/* <div className="stat-desc text-1xl font-bold">
                21% more than last month
              </div> */}
            </div>

            <div className="stat">
              <div className="stat-figure  "></div>
              <div className="stat-value flex ">
                <Number3 n={2}></Number3>
                <span>+</span>
              </div>
              <div className="text-[18px] font-bold">Years of Experience</div>
            </div>
            <div className="stat">
              <div className="stat-figure  "></div>
              <div className="stat-value flex ">
                <Number3 n={200}></Number3>
                <span>+</span>
              </div>
              <div className="text-[18px] font-bold">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-figure  "></div>
              <div className="stat-value flex  ">
                <Number3 n={2}></Number3>
                <span>+</span>
              </div>
              <div className="text-[18px] font-bold">Tech Partners</div>
            </div>
            {/* <div className="stat">
              <div className="stat-figure  "  >
               
              </div>
              <div className="stat-value  "  >
                250+
              </div>
              <div className="text-[18px] font-bold"  >
                Caregivers
              </div>
              
            
            </div> */}
          </div>
        </div>
        <div className=""
       
        >
        <SVG></SVG>
        </div>
      </div>
    </div>
  );
};

export default Achievement;

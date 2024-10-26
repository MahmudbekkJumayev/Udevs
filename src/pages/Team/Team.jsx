"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when the element comes into view
    onChange: (inView) => {
      if (inView) {
        setHasAnimated(true);
      }
    },
  });

  return (
    <div id="command" className="bg-blue-50">
      <div className="container" ref={ref}>
        <div className="flex flex-col md:flex-row py-24 ">
          <div className="w-full md:w-1/2 p-10 flex flex-col gap-5">
            <h4 className="text-[40px] lg:text-[60px] font-bold text-blue-600">
              Team
            </h4>
            <p className="text-[16px] md:text-[18px] text-gray-800 font-medium">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <span className="text-[50px] md:text-[80px] text-blue-600 font-bold">
              {hasAnimated && <CountUp start={0} end={100} duration={2.75} />}+
            </span>
            <h5 className="text-[30px] lg:text-[50px] font-bold text-gray-800">
              Dedicated team
            </h5>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src="/assets/images/TeamImg.svg" alt="Team" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

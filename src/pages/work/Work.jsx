import React from "react";

const Work = () => {
  return (
    <div className="container py-24">
      <h4 className="text-[40px] text-blue-600 font-bold text-start">
        How we work!
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 py-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <span>
            <img src="/assets/images/work1.svg" alt="icon" />
          </span>
          <h4 className="text-[25px] text-gray-900 font-bold">Contact</h4>
          <p className="text-[15px] text-center font-medium text-gray-800">
            Send us your project request or project idea.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <span>
            <img src="/assets/images/work2.svg" alt="icon" />
          </span>
          <h4 className="text-[25px] text-gray-900 font-bold">Analysis</h4>
          <p className="text-[15px] text-center font-medium text-gray-800">
            We will contact you to clarify your project requirements.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <span>
            <img src="/assets/images/work3.svg" alt="icon" />
          </span>
          <h4 className="text-[25px] text-gray-900 font-bold">Offer</h4>
          <p className="text-[15px] text-center font-medium text-gray-800">
            We will provide you with our free, non-binding application.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <span>
            <img src="/assets/images/work4.svg" alt="icon" />
          </span>
          <h4 className="text-[25px] text-gray-900 font-bold">Team</h4>
          <p className="text-[15px] text-center font-medium text-gray-800">
            We provide a team for your requirements.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <span>
            <img src="/assets/images/work5.svg" alt="icon" />
          </span>
          <h4 className="text-[25px] text-gray-900 font-bold">Start</h4>
          <p className="text-[15px] text-center font-medium text-gray-800">
            You will get to know the team and we'll get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;

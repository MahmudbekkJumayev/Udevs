import React from "react";

const Optimization = () => {
  return (
    <div className="bg-blue-50">
      <div className="container">
        <div className="py-32">
          <h4 className="text-[40px] text-blue-600 font-bold text-start">
            Optimization
          </h4>
          <h4 className="text-[40px] text-blue-600 font-bold text-start">
            {" "}
            Infrastructure
          </h4>
          <div className="flex flex-col md:flex-row gap-40 py-5">
            <div
              className="w-full md:w-1/2 p-10"
              style={{ backgroundImage: "url('/assets/images/bacground.png')" }}
            >
              <img src="/assets/images/srmImg.png" alt="crm png" />
            </div>
            <div className="w-full md:w-1/2 p-10 flex flex-col gap-5">
              <p className="text-[25px] font-medium">
                Our experienced professionals will help you optimize your
                infrastructure
              </p>
              <div className="grid grid-cols-3 gap-4">
                <span className="rounded-lg bg-blue-200 p-5 ">
                  <img src="/assets/icons/optimization1.svg" alt="" />
                  <p className="text-gray-800 text-[16px] font-medium">
                    Architecture
                  </p>
                </span>
                <span className="rounded-lg bg-blue-200 p-5 ">
                  <img src="/assets/icons/optimization2.svg" alt="" />
                  <p className="text-gray-800 text-[16px] font-medium">
                    Auto testing
                  </p>
                </span>
                <span className="rounded-lg bg-blue-200 p-5 ">
                  <img src="/assets/icons/optimization3.svg" alt="" />
                  <p className="text-gray-800 text-[16px] font-medium">
                    Stress testing
                  </p>
                </span>
                <span className="rounded-lg bg-blue-200 p-5 ">
                  <img src="/assets/icons/optimization4.svg" alt="" />
                  <p className="text-gray-800 text-[16px] font-medium">
                    Load testing
                  </p>
                </span>
                <span className="rounded-lg bg-blue-200 p-5 ">
                  <img src="/assets/icons/optimization5.svg" alt="" />
                  <p className="text-gray-800 text-[16px] font-medium">
                    Devops
                  </p>
                </span>
                <span className="rounded-lg bg-blue-200 p-5 ">
                  <img src="/assets/icons/optimization6.svg" alt="" />
                  <p className="text-gray-800 text-[16px] font-medium">Cloud</p>
                </span>
                <span className="rounded-lg bg-blue-200 p-5 ">
                  <img src="/assets/icons/optimization7.svg" alt="" />
                  <p className="text-gray-800 text-[16px] font-medium">
                    CI / CD
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimization;

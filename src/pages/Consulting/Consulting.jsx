import React from "react";

const Consulting = () => {
  return (
    <div>
      <div className="container">
        <div className="py-32">
          <h4 className="text-[40px] text-blue-600 font-bold text-start">
            IT Consulting
          </h4>
          <div className="flex flex-col md:flex-row gap-40 py-5">
            <div className="w-full md:w-1/2 flex flex-col gap-5">
              <p className="text-[25px] font-medium">
                We can improve the qualifications of your employees thereby
                increasing the efficiency of your company
              </p>
              <div className="grid grid-cols-3 gap-4">
                <span className="rounded-lg bg-blue-50 p-5 ">
                  <img src="/assets/icons/consulting1.svg" alt="" />
                  <p className="text-[16px] font-medium text-gray-800">
                    Frontend
                  </p>
                </span>
                <span className="rounded-lg bg-blue-50 p-5 ">
                  <img src="/assets/icons/consulting2.svg" alt="" />
                  <p className="text-[16px] font-medium text-gray-800">
                    Backend
                  </p>
                </span>
                <span className="rounded-lg bg-blue-50 p-5 ">
                  <img src="/assets/icons/optimization1.svg" alt="" />
                  <p className="text-[16px] font-medium text-gray-800">
                    Architecture
                  </p>
                </span>
                <span className="rounded-lg bg-blue-50 p-5 ">
                  <img src="/assets/icons/optimization5.svg" alt="" />
                  <p className="text-[16px] font-medium text-gray-800">
                    DevOps
                  </p>
                </span>
                <span className="rounded-lg bg-blue-50 p-5 ">
                  <img src="/assets/icons/consulting3.svg" alt="" />
                  <p className="text-[16px] font-medium text-gray-800">UX/UI</p>
                </span>
                <span className="rounded-lg bg-blue-50 p-5 ">
                  <img src="/assets/icons/consulting4.svg" alt="" />
                  <p className="text-[16px] font-medium text-gray-800">QA</p>
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-10">
              <img src="/assets/icons/consultingImg.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;

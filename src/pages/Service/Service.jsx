import React from "react";

const Service = () => {
  return (
    <section id="direction" className="container py-32">
      <h4 className="text-[40px] text-blue-600 font-bold text-start">
        Our services
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-blue-100 rounded-md flex flex-col gap-5 px-10 py-16">
          <img
            className="w-[50px]"
            src="/assets/icons/servis1.svg"
            alt="icon"
          />
          <p className="text-[20px] md:text-[25px] font-medium text-gray-700">
            Team
          </p>
        </div>
        <div className="bg-blue-100 rounded-md flex flex-col gap-5 px-10 py-16">
          <img
            className="w-[50px]"
            src="/assets/icons/servis2.svg"
            alt="icon"
          />
          <p className="text-[20px] md:text-[25px] font-medium text-gray-700">
            Development of mobile applications
          </p>
        </div>
        <div className="bg-blue-100 rounded-md flex flex-col gap-5 px-10 py-16">
          <img
            className="w-[50px]"
            src="/assets/icons/servis3.svg"
            alt="icon"
          />
          <p className="text-[20px] md:text-[25px] font-medium text-gray-700">
            Development and implementation ERP systems
          </p>
        </div>
        <div className="bg-blue-100 rounded-md flex flex-col gap-5 px-10 py-16">
          <img
            className="w-[50px]"
            src="/assets/icons/servis4.svg"
            alt="icon"
          />
          <p className="text-[20px] md:text-[25px] font-medium text-gray-700">
            User interface, User experience design
          </p>
        </div>
        <div className="bg-blue-100 rounded-md flex flex-col gap-5 px-10 py-16">
          <img
            className="w-[50px]"
            src="/assets/icons/servis5.svg"
            alt="icon"
          />
          <p className="text-[20px] md:text-[25px] font-medium text-gray-700">
            Optimization IT consulting infrastructure
          </p>
        </div>
        <div className="bg-blue-100 rounded-md flex flex-col gap-5 px-10 py-16">
          <img
            className="w-[50px]"
            src="/assets/icons/servis6.svg"
            alt="icon"
          />
          <p className="text-[20px] md:text-[25px] font-medium text-gray-700">
            IT consulting
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;

"use client";

import React from "react";
import Image from "next/image";

const Optimization = () => {
  return (
    <div className="bg-blue-50">
      <div className="container">
        <div className="py-24">
          <h4 className="text-3xl text-blue-600 font-bold text-start mb-5">
            Optimization
          </h4>
          <h4 className="text-3xl text-blue-600 font-bold text-start mb-5">
            Infrastructure
          </h4>
          <div className="flex flex-col md:flex-row gap-5">
            <div
              className="w-full md:w-1/2 p-10 bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/background.png')",
              }}
            >
              <Image
                src="/assets/images/srmImg.png"
                alt="crm png"
                width={600}
                height={400}
              />
            </div>
            <div className="w-full md:w-1/2 p-10 flex flex-col gap-5">
              <p className="text-[16px] md:text-[18px] text-gray-800 font-medium">
                Our experienced professionals will help you optimize your
                infrastructure
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: "/assets/icons/optimization1.svg",
                    text: "Architec",
                  },
                  {
                    icon: "/assets/icons/optimization2.svg",
                    text: "Auto testing",
                  },
                  {
                    icon: "/assets/icons/optimization3.svg",
                    text: "Stress testing",
                  },
                  {
                    icon: "/assets/icons/optimization4.svg",
                    text: "Load testing",
                  },
                  { icon: "/assets/icons/optimization5.svg", text: "Devops" },
                  { icon: "/assets/icons/optimization6.svg", text: "Cloud" },
                  { icon: "/assets/icons/optimization7.svg", text: "CI / CD" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-blue-200 p-5 flex items-center gap-3"
                  >
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={40}
                      height={40}
                    />
                    <p className="text-gray-800 text-lg font-medium">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimization;

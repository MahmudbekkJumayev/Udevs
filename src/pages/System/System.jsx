import React from "react";
import Image from "next/image";

const System = () => {
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto">
        <div className="py-16 lg:py-32">
          <h4 className="text-3xl lg:text-4xl text-blue-600 font-bold text-start">
            ERP systems
          </h4>
          <div className="flex flex-col gap-10 lg:gap-20 md:flex-row py-10">
            <div
              className="w-full md:w-1/2 p-10 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/background.png')",
              }}
            >
              <Image
                src="/assets/images/srmImg.png"
                alt="crm png"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 px-6 py-8 flex flex-col gap-6">
              <p className="text-[16px] md:text-[18px] text-gray-800 font-medium">
                IT Systems of any level of complexity at a convenient time for
                you
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: "/assets/images/srm1.svg", label: "CRM" },
                  { src: "/assets/images/srm2.svg", label: "eLearning" },
                  { src: "/assets/images/srm3.svg", label: "E-Commerce" },
                  { src: "/assets/images/srm4.svg", label: "POS" },
                  { src: "/assets/images/srm5.svg", label: "Sms / Email" },
                  { src: "/assets/images/srm6.svg", label: "Warehouse" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-blue-200 p-5 rounded-lg flex flex-col items-center"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={50}
                      height={50}
                    />
                    <p className="text-gray-800 text-sm md:text-base font-medium mt-2">
                      {item.label}
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

export default System;

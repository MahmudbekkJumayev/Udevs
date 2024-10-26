import React from "react";
import Image from "next/image";

const Goodzone = () => {
  return (
    <div id="goodzone" className="container  py-16 lg:py-24">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-1/2 p-10">
          <Image
            src="/assets/images/smsImg.png"
            alt="CRM interface screenshot"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-10 flex flex-col gap-5">
          <Image
            className="w-[300px]"
            src="/assets/images/goodzoneImg.png"
            alt="Goodzone logo"
            width={300}
            height={100}
          />
          <div className="bg-red-400 w-[180px] px-5 gap-2 py-4 rounded-3xl flex justify-center items-center">
            <Image
              src="/assets/images/goodzone1.svg"
              alt="E-Commerce icon"
              width={24}
              height={24}
            />
            <p className="text-white text-[16px] text-center">E-Commerce</p>
          </div>
          <p className="text-[20px] text-gray-800 font-medium">
            Goodzone - Internet shop of household appliances in Uzbekistan.
          </p>
          <p className="text-[20px] text-gray-800 font-medium">What we did?</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                src: "/assets/images/delever2.svg",
                label: "Website",
                alt: "Website icon",
              },
              {
                src: "/assets/images/delever3.svg",
                label: "Admin panel",
                alt: "Admin panel icon",
              },
              {
                src: "/assets/images/delever6.svg",
                label: "Crossplatform",
                alt: "Crossplatform icon",
              },
              {
                src: "/assets/images/delever5.svg",
                label: "Web design",
                alt: "Web design icon",
              },
              {
                src: "/assets/images/delever4.svg",
                label: "Mobile design",
                alt: "Mobile design icon",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-blue-50 p-5 flex flex-col items-center"
              >
                <Image src={item.src} alt={item.alt} width={50} height={50} />
                <p className="text-[16px] font-medium text-gray-800 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goodzone;

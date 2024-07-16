import React from "react";
import Image from "next/image";

const Delever = () => {
  return (
    <div id="delever" className="container py-16 lg:py-32">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/deleverImg.png"
            alt="Delivery service automation"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h4 className="text-3xl lg:text-4xl text-orange-500 font-bold text-start">
            Delever
          </h4>
          <div className="bg-orange-400 w-[150px] px-10 py-4 rounded-3xl flex justify-center items-center">
            <Image
              src="/assets/images/delelver1.svg"
              alt="Delivery service icon"
              width={40}
              height={40}
            />
            <p className="text-white text-lg ml-2">Delivery</p>
          </div>
          <p className="text-[16px] md:text-[18px] text-gray-800 font-medium">
            Delever - Delivery service automation targeted at both consumers and
            restaurants.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-800 font-medium">
            What we did?
          </p>
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
                <p className="text-base font-medium text-gray-800 mt-2">
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

export default Delever;

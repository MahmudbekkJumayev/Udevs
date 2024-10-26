import React from "react";
import Image from "next/image";

const Smsuz = () => {
  return (
    <div id="smsuz" className="container mx-auto  py-16 lg:py-24">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h4 className="text-2xl md:text-3xl lg:text-4xl text-blue-600 font-bold text-start">
            Smsuz.uz
          </h4>
          <div className="flex justify-center w-[200px] rounded-3xl items-center gap-2 px-4 bg-blue-100">
            <Image
              className="w-[40px]"
              src="/assets/images/smsuz1.svg"
              alt="Notification icon"
              width={40}
              height={40}
            />
            <p className="text-[16px] text-blue-600 font-medium">
              Notification
            </p>
          </div>
          <p className="text-[16px] md:text-[18px] text-gray-800 font-medium">
            Smsuz.uz - It is a platform for bulk SMS messaging.
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
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-blue-50 p-5 flex flex-col items-center"
              >
                <Image src={item.src} alt={item.alt} width={50} height={50} />
                <p className="text-base md:text-lg font-medium text-gray-800 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/smsImg.png"
            alt="SMS platform interface"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Smsuz;

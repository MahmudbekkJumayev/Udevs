import React from "react";
import Image from "next/image";

const Iman = () => {
  return (
    <div id="iman" className="container mx-auto py-16 lg:py-32">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <Image
            className="w-[250px]"
            src="/assets/images/iman1.svg"
            alt="Iman logo"
            width={250}
            height={100}
          />
          <div className="flex justify-center w-[200px] rounded-3xl items-center gap-2 px-4 bg-green-100">
            <Image
              className="w-[40px]"
              src="/assets/images/iman2.svg"
              alt="Notification icon"
              width={40}
              height={40}
            />
            <p className="text-[16px] text-green-400 font-medium">
              Notification
            </p>
          </div>
          <p className="text-[18px] text-gray-800 font-medium">
            Iman - It is a mutual financing platform based on the principles of
            Islamic Finance. Buyers, sellers and investors meet here.
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
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-blue-50 p-5 flex flex-col items-center"
              >
                <Image src={item.src} alt={item.alt} width={50} height={50} />
                <p className="text-[18px] font-medium text-gray-800 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/iman3.png"
            alt="Iman platform screenshot"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Iman;

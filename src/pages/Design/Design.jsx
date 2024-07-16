import React from "react";
import Image from "next/image";

const Design = () => {
  return (
    <div className="container mx-auto ">
      <div className="py-16 lg:py-32">
        <h4 className="text-3xl lg:text-4xl text-blue-600 font-bold text-start">
          UI / UX design
        </h4>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <p className="text-gray-700 font-bold text-xl lg:text-2xl">
              Our company takes a human-centered approach to design
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {[
                {
                  src: "/assets/images/design1.svg",
                  label: "UX",
                  alt: "UX design icon",
                },
                {
                  src: "/assets/images/design2.svg",
                  label: "UI",
                  alt: "UI design icon",
                },
                {
                  src: "/assets/images/design3.svg",
                  label: "Prototyping",
                  alt: "Prototyping design icon",
                },
                {
                  src: "/assets/images/design4.svg",
                  label: "Mobile Design",
                  alt: "Mobile Design icon",
                },
                {
                  src: "/assets/images/design5.svg",
                  label: "Web Design",
                  alt: "Web Design icon",
                },
                {
                  src: "/assets/images/design6.svg",
                  label: "Atomic Design",
                  alt: "Atomic Design icon",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-5 md:p-10 rounded-lg flex flex-col items-center"
                >
                  <Image src={item.src} alt={item.alt} width={60} height={60} />
                  <p className="text-gray-800 text-sm md:text-base font-medium mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <h4 className="text-gray-700 font-bold text-xl lg:text-2xl">
                Technologies
              </h4>
              <div className="flex flex-wrap justify-start items-center gap-5 lg:gap-10">
                {[
                  {
                    src: "/assets/images/design7.svg",
                    label: "Figma",
                    alt: "Figma logo",
                  },
                  {
                    src: "/assets/images/design8.svg",
                    label: "Sketch",
                    alt: "Sketch logo",
                  },
                  {
                    src: "/assets/images/design9.svg",
                    label: "Lottie",
                    alt: "Lottie logo",
                  },
                  {
                    src: "/assets/images/design10.svg",
                    label: "Illustrator",
                    alt: "Illustrator logo",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={60}
                      height={60}
                    />
                    <p className="text-gray-800 text-sm md:text-base font-medium">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-1/2 p-10 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/background.png')" }}
          >
            <Image
              src="/assets/images/designImg.png"
              alt="Design illustration"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;

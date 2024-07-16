import React from "react";
import Image from "next/image";

const Technologies = () => {
  return (
    <div id="service" className="container">
      <div className="py-16 lg:py-32">
        <h4 className="text-3xl lg:text-4xl text-blue-600 font-bold text-start">
          Development of mobile applications
        </h4>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 py-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <h5 className="text-lg lg:text-xl">
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-5 md:p-10 rounded-md flex flex-col items-center">
                <Image
                  src="/assets/icons/IOS.svg"
                  alt="ios svg icon"
                  width={50}
                  height={50}
                />
                <p className="mt-2">IOS</p>
              </div>
              <div className="bg-blue-50 p-5 md:p-10 rounded-md flex flex-col items-center">
                <Image
                  src="/assets/icons/Android.svg"
                  alt="Android svg icon"
                  width={50}
                  height={50}
                />
                <p className="mt-2">Android</p>
              </div>
              <div className="bg-blue-50 p-5 md:p-10 rounded-md flex flex-col items-center">
                <Image
                  src="/assets/icons/croshard.svg"
                  alt="Croshard svg icon"
                  width={50}
                  height={50}
                />
                <p className="mt-2">Crossplatform</p>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <h4 className="text-gray-700 text-2xl lg:text-3xl font-bold">
                Technologies
              </h4>
              <div className="flex flex-wrap justify-start items-center gap-10">
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image
                    className="w-[50px] lg:w-[70px]"
                    src="/assets/icons/swift.svg"
                    alt="swift svg"
                    width={70}
                    height={70}
                  />
                  <p className="text-lg lg:text-xl font-bold">Swift</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image
                    className="w-[50px] lg:w-[70px]"
                    src="/assets/icons/kotlin.svg"
                    alt="Kotlin svg"
                    width={70}
                    height={70}
                  />
                  <p className="text-lg lg:text-xl font-bold">Kotlin</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image
                    className="w-[50px] lg:w-[70px]"
                    src="/assets/icons/flutter.svg"
                    alt="Flutter"
                    width={70}
                    height={70}
                  />
                  <p className="text-lg lg:text-xl font-bold">Flutter</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center items-center p-10 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/background.png')" }}
          >
            <Image
              src="/assets/images/MobileDev.png"
              alt="Mobile Development"
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

export default Technologies;

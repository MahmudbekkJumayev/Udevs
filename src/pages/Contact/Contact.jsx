import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-16 lg:py-32">
      <h4 className="text-4xl text-blue-600 font-bold text-left mb-10">
        Contact Us
      </h4>
      <div className="shadow-xl p-5 bg-gray-100 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-5 py-5 px-4 md:px-10">
            <p className="text-lg font-medium text-gray-900">
              Leave us a message
            </p>
            <input
              className="p-3 rounded-md border-2 border-gray-300"
              placeholder="Name"
              type="text"
            />
            <input
              className="p-3 rounded-md border-2 border-gray-300"
              placeholder="Your email"
              type="email"
            />
            <textarea
              className="p-3 rounded-md border-2 border-gray-300"
              placeholder="Briefly describe your project"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 w-full md:w-[200px] border-none hover:bg-blue-800 px-8 py-2 rounded-md text-white text-lg font-bold"
            >
              Send
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start p-5 md:p-10 gap-5">
          <div className="flex items-center gap-3">
            <img
              className="w-6 h-6"
              src="/assets/images/form1.svg"
              alt="Location icon"
            />
            <p className="text-lg text-gray-700 font-medium">
              Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="w-6 h-6"
              src="/assets/images/form2.svg"
              alt="Phone icon"
            />
            <p className="text-lg text-gray-700 font-medium">
              +998 33 66 00 999
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="w-6 h-6"
              src="/assets/images/form3.svg"
              alt="Email icon"
            />
            <p className="text-lg text-gray-700 font-medium">
              azizbek.b@udevs.io
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://yandex.com/map-widget/v1/?from=mapframe&ll=69.300828%2C41.334407&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_source=mapframe&z=14"
              width="100%"
              height="400"
              className="rounded-lg"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

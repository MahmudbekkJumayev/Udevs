"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel stilini import qilish

const Clients = () => {
  return (
    <div id="clients" className="bg-gray-200 py-32">
      <div className="container mx-auto">
        <h4 className="text-3xl text-blue-600 font-bold text-center mb-5">
          Our clients
        </h4>
        <Carousel
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000} // ms
          stopOnHover={true}
          transitionTime={500} // ms
          className="my-carousel"
        >
          <div className="flex justify-center items-center gap-5">
            {[1, 2, 3, 4, 5, 6, 8].map((client) => (
              <span key={client}>
                <img
                  src={`/assets/images/client${client}.svg`}
                  alt={`Client ${client}`}
                  className="max-w-full h-auto"
                />
              </span>
            ))}
          </div>
          <div className="flex justify-center items-center gap-5">
            {[9, 10, 11, 12, 13, 14, 15].map((client) => (
              <span key={client}>
                <img
                  src={`/assets/images/client${client}.svg`}
                  alt={`Client ${client}`}
                  className="max-w-full h-auto"
                />
              </span>
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Clients;

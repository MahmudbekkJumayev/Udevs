"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel stilini import qilish

const Clients = () => {
  return (
    <div id="clients" className="bg-gray-200 py-32">
      <div className="container mx-auto">
        <div className="">
          <h4 className="text-3xl font-bold text-center mb-5">Our clients</h4>
        </div>
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
            <span>
              <img src="/assets/images/client1.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client2.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client3.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client4.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client5.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client6.svg" alt="hamkorlar" />
            </span>
          </div>
          <div className="flex justify-center items-center gap-5">
            <span>
              <img src="/assets/images/client8.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client9.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client10.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client11.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client12.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client13.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client14.svg" alt="hamkorlar" />
            </span>
            <span>
              <img src="/assets/images/client15.svg" alt="hamkorlar" />
            </span>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Clients;

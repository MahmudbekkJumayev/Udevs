"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full shadow-md bg-white z-50">
      <div className="container flex justify-between items-center py-5">
        <div>
          <img
            src="/Logo/NavbarLogo.svg"
            alt="Navbar logo"
            className="w-[60px] md:w-[80px] lg:w-[100px]"
          />
        </div>
        <div className="flex justify-between items-center gap-10">
          <div
            className={`lg:flex gap-2 ${
              menuOpen ? "flex flex-col" : "hidden"
            } lg:flex-row lg:items-center text-[14px] md:text-[16px] font-medium list-none p-0 m-0 cursor-pointer`}
          >
            <li
              onClick={closeMenu}
              className="relative group p-4 cursor-pointer"
            >
              <a href="#direction">Direction</a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 transition-all duration-300"></span>
            </li>
            <li
              onClick={closeMenu}
              className="relative group p-4 cursor-pointer"
            >
              <a href="#command">Command</a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 transition-all duration-300"></span>
            </li>
            <li
              onClick={closeMenu}
              className="relative group p-4 cursor-pointer"
            >
              <a href="#service">Service</a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 transition-all duration-300"></span>
            </li>
            <li
              onClick={closeMenu}
              className="relative group p-4 cursor-pointer"
            >
              <a href="#tools">Tools</a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 transition-all duration-300"></span>
            </li>
            <li
              onClick={closeMenu}
              className="relative group p-4 cursor-pointer"
            >
              <a href="#clients">Clients</a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 transition-all duration-300"></span>
            </li>

            <li
              onClick={closeMenu}
              className="relative group p-4 cursor-pointer"
            >
              <a
                className="flex justify-start items-center gap-2"
                href="#delever"
              >
                Portfolio <img src="/assets/icons/pastga.svg" alt="icon" />
              </a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 transition-all duration-300"></span>
              <div className="absolute p-3 hidden right-0 group-hover:block w-[200px] bg-white text-black mt-1 rounded-md shadow-lg">
                <div className="flex items-center p-2 hover:bg-blue-600 hover:text-white cursor-pointer">
                  <a
                    className="flex rounded-md justify-start items-center gap-3"
                    href="#delever"
                  >
                    <img src="/assets/icons/nav1.svg" alt="icon" />
                    <p className=" font-medium">Deliver</p>
                  </a>
                </div>
                <div className="flex items-center rounded-md p-2 hover:bg-blue-600 hover:text-white cursor-pointer">
                  <a
                    className="flex justify-start items-center gap-3"
                    href="#smsuz"
                  >
                    <img src="/assets/icons/nav2.svg" alt="" />
                    <p className=" font-medium">Sms.uz</p>
                  </a>
                </div>
                <div className="flex items-center rounded-md p-2 hover:bg-blue-600 hover:text-white cursor-pointer">
                  <a
                    className="flex justify-start items-center gap-3"
                    href="#goodzone"
                  >
                    <img src="/assets/icons/nav3.svg" alt="icon" />
                    <p className=" font-medium">Goodzone</p>
                  </a>
                </div>
                <div className="flex items-center rounded-md p-2 hover:bg-blue-600 hover:text-white cursor-pointer">
                  <a
                    className="flex justify-start items-center gap-3"
                    href="#iman"
                  >
                    <img src="/assets/icons/nav4.svg" alt="icon" />
                    <p className=" font-medium">Iman</p>
                  </a>
                </div>
              </div>
            </li>
            <li className="relative group p-4">
              <span className="flex justify-center items-center gap-2">
                Language
                <img src="/assets/icons/pastga.svg" alt="icon" />
              </span>

              <div className="absolute p-2 bg-white hidden group-hover:block text-black mt-1 rounded-md shadow-lg">
                <div className="flex w-[100px] items-center p-3 hover:bg-blue-600 hover:text-white cursor-pointer">
                  <Image
                    src="/assets/images/ru.svg"
                    alt="English"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Russian
                </div>
                <div className="flex items-center p-3  hover:bg-blue-600 hover:text-white cursor-pointer">
                  <Image
                    src="/assets/images/eng.svg"
                    alt="Russian"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  English
                </div>
              </div>
            </li>
          </div>
          <div className="hidden lg:block">
            <a href="#contact">
              <button
                type="button"
                className="bg-blue-600 border-none hover:bg-blue-500 px-4 py-2 rounded-md text-white text-[20px] font-bold"
              >
                Contact
              </button>
            </a>
          </div>
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <Image
              className={`w-[30px] h-[30px] ${menuOpen ? "hidden" : "block"}`}
              src="/assets/images/burgermenu.png"
              alt="burger menu"
              width={30}
              height={30}
            />
            <Image
              className={`w-[30px] h-[30px] ${menuOpen ? "block" : "hidden"}`}
              src="/assets/images/close.png"
              alt="close menu"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const MainContent = () => {
  return <div className="pt-[80px]"></div>;
};

const Page = () => {
  return (
    <>
      <Navbar />
      <MainContent />
    </>
  );
};

export default Page;

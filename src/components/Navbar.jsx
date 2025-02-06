import React from "react";
import Favicon from "../assets/images/favicon.ico";
import Hamburger from "../assets/images/hamburger-button.svg";
import CloseIcon from "../assets/images/close-button.svg";
import MoonLight from "../assets/images/Moon_fill_light.svg";
import Moon from "../assets/images/Moon_fill.svg";
import Sun from "../assets/images/Sun_fill.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="w-full max-w-[1440px] mx-auto ">
      <nav className="w-full px-4 flex items-center justify-between nav-mobile">
        <div className="flex gap-1 items-center">
          <img src={Favicon} alt="favicon" className="w-12" />
          <p className="font-bold text-2xl">Alarado</p>
        </div>
        <div>
          <img
            src={Hamburger}
            alt="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          />

          <div
            className={`sidebar fixed top-0 right-0 flex flex-col gap-3 h-full bg-black text-white shadow-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out w-64 z-20`}
          >
            <img
              src={CloseIcon}
              alt="close-button"
              onClick={() => setIsOpen(false)}
              className="w-12 fixed right-0 top-0"
            />
            <div className="flex flex-col gap-3 mt-12 p-3">
              <div
                className="bg-red-400 rounded-2xl flex items-center justify-between w-[5rem] py-[0.2rem] px-1 relative"
                onClick={() => setIsOn(!isOn)}
              >
                <img src={MoonLight} alt="Moon-icon" />
                {isOn && (
                  <img src={Moon} alt="" className="absolute left-1 z-[2]" />
                )}
                <div
                  className={`w-6 h-6 rounded-[50%] bg-white flex items-center justify-center shadow-md absolute right-1 z-[1] transform transition-transform ${
                    isOn ? "translate-x-[-48px]" : "translate-x-0"
                  }`}
                ></div>
                <img src={Sun} alt="" className="absolute right-1 z-[2]" />
              </div>
              <ul className="nav-links">
                <li>
                  <a
                    href="#"
                    className="hover:opacity-90 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-90 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-90 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Resource
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-90 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="inset-0 fixed bg-black bg-opacity-50 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>
      <nav className="nav-desktop flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <img src={Favicon} alt="" className="w-12" />
          <h2 className="text-2xl font-bold">Alarado</h2>
        </div>
        <ul className="flex items-center gap-5 *:cursor-pointer">
          <li className="hover:opacity-85">
            <a href="#">About Us</a>
          </li>
          <li className="hover:opacity85">
            <a href="#">Product</a>
          </li>
          <li className="hover:opacity85">
            <a href="#">Resource</a>
          </li>
          <li className="hover:opacity85">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div
          className="bg-[#223343] rounded-2xl flex items-center justify-between w-[5rem] py-[0.2rem] px-1 relative"
          onClick={() => setIsOn(!isOn)}
        >
          <img src={MoonLight} alt="Moon-icon" />
          {isOn && <img src={Moon} alt="" className="absolute left-1 z-[2]" />}
          <div
            className={`w-6 h-6 rounded-[50%] bg-white flex items-center justify-center shadow-md absolute right-1 z-[1] transform transition-transform ${
              isOn ? "translate-x-[-48px]" : "translate-x-0"
            }`}
          ></div>
          <img src={Sun} alt="" className="absolute right-1 z-[2]" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

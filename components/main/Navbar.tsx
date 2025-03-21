"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-[60px] fixed top-0 border border-black/25  bg-[#03001417] opacity-[0.95] backdrop-blur-lg z-50 px-10">
      <div className="w-full h-full flex flex-row gap-20 items-center justify-between m-auto px-[30px]">

        {/* <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          /> */}

        <span className="ml-[10px] text-md hidden md:block text-gray-300 italic">
          <a href="#hero" className="cursor-pointer">Portfolio</a>
        </span>


        <div className="w-[450px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="hidden md:flex items-center justify-between w-full h-[2rem] border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer text-md transition-colors duration-300 hover:text-purple-400">
              About me
            </a>
            <a href="#skills" className="cursor-pointer text-md transition-colors duration-300 hover:text-purple-400">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer text-md transition-colors duration-300 hover:text-purple-400">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer text-md transition-colors duration-300 hover:text-purple-400">
              Contact
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-4">
          {Socials.map((social) => (
            <a href={social.href} target="_blank" rel="noopener noreferrer">

            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              />
              </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 absolute focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>

        {/* Mobile Menu (Slide In) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[30px] left-0 w-full flex flex-col items-center py-4 shadow-lg md:hidden"
            >
              <div className="flex flex-col gap-4 h-half w-[15rem] items-center p-4 rounded-2xl bg-[rgba(9,22,29,0.95)] backdrop-blur-xl">
                <a
                  href="#about-me"
                  className="text-gray-200 hover:text-white text-sm py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About me
                </a>
                <a
                  href="#skills"
                  className="text-gray-200 hover:text-white text-sm py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-gray-200 hover:text-white text-sm py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-200 hover:text-white text-sm py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>


                {/* Social Icons in Mobile Menu */}
                <div className="flex flex-row gap-4 mt-3">
                  {Socials.map((social) => (
                    <Image
                      src={social.src}
                      alt={social.name}
                      key={social.name}
                      width={18}
                      height={18}
                      className="cursor-pointer hover:scale-110 transition"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Navbar;
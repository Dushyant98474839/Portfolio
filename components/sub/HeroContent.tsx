"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { IconCloudDemo} from "./IconCloud";


const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 lg:px-32 lg:mt-96 mt-80 w-full z-[20]"
    >
      {/* Left Section */}
      <div className="w-full flex flex-col gap-4 justify-center text-center lg:text-start">
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md md:text-lg sm:text-lg text-gray-100 max-w-[600px] lg:mx-0"
        >
          <span className="text-transparent bg-clip-text bg-white">
            Hi, this is{" "}
          </span>
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col text-4xl md:text-6xl sm:text-3xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto lg:mx-0"
        >
          <span>
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Dushyant Singh{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md md:text-md sm:text-sm md:text-base text-gray-100 max-w-[600px] mx-auto lg:mx-0"
        >
          I&apos;m a 3rd year CSE-Design Undergrad at IIIT-D. I'm a full-stack developer with experience in AI/ML. Check out my projects and skills!
        </motion.p>

        <div className="flex flex-row gap-4 justify-center lg:justify-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-4 cursor-pointer border border-[#7042f88b] opacity-[0.9] flex items-center justify-center max-w-[150px] mx-auto lg:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] ml-[-6px] mr-2 h-4 w-4" />
          <a href="https://docs.google.com/document/d/1-YieAXIm5Bnp-0O5j30RPzE9uMU0LjjM/edit?usp=sharing&ouid=116790925751314179849&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
          <h1 className="Welcome-text text-md md:text-md sm:text-sm">Resume</h1>
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-4 cursor-pointer border border-[#7042f88b] opacity-[0.9] flex items-center justify-center max-w-[150px] mx-auto lg:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] ml-[-6px] mr-2 h-4 w-4" />
          <a href="#contact">

          <h1 className="Welcome-text text-md md:text-md sm:text-sm ">Connect</h1>
          </a>
        </motion.div>
        </div>
      </div>

      {/* Right Section - Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-10 lg:mt-0"
      >
        {/* <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={250}
          width={250}
          className="hidden md:block absolute right-[-100px] max-w-[150px] sm:max-w-[200px] md:max-w-[250px] h-auto relative"
        /> */}

        {/* <IconCloudDemo /> */}

      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

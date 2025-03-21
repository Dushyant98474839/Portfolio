import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="hero">
      <video
        autoPlay
        muted
        loop
        className="absolute top-[-10px]  h-half w-full z-[1] object-cover "
      >
        {/* <source src="/blackhole.webm" type="video/webm" /> */}
        <source src="/spaceship.mp4" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
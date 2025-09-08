"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="pt-30">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h1 className="text-pink-300 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Hello, I'm {""}
            </span>
            <TypeAnimation
              sequence={[
                "Privilege",
                1000, 
                "a Web developer",
                1000,
                "a Mobile developer",
                1000,
                "a Full Stack developer",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I'm a passionate developer specializing in building exceptional
            digital experiences.Explore my projects and skills below.
          </p>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-blue-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-blue-200 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0 mb-8">
          <div className="rounded-full bg-[#3b3838] w-[450px] h-[450px] lg:w-[450px] lg:h-[450px] relative mx-auto">
            <Image
              src="/images/HeroImage.png"
              alt="Description of the image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-fit"
            width={220}
            height={200}
            />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default HeroSection;

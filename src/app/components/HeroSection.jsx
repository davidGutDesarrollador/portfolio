"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 via-red-400  hover:bg-slate-200 ">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "David Gutiérrez Rubio",
                1000,
                "Full-stack Developer",
                1000,
                "Big Data Analyst",
                1000,
                "Salesforce Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate about building efficient solutions in Full Stack,
            Salesforce, and Big Data. Turning ideas into technology.
          </p>
          <div>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-white px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-400 to-red-600 via-red-400  hover:bg-slate-200"
            >
              Hire me
            </button>
            <button
              onClick={() => (window.location.href = "/CV_David_Gutierrez.pdf")}
              className="text-white px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-400 to-red-600 via-red-400 hover:bg-slate-800 mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative"
          >
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import Searchbar from "./Searchbar";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const phrases = [
  "Think beyond limits.",
  "Build with purpose.",
  "Create with vision.",
  "Innovate fearlessly."
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">

      {/* Animated Heading */}
      <h1 className="text-5xl md:text-3xl relative font-bold text-gray-800 max-w-2xl mx-auto leading-snug">
        👋 Empowering your mind with tools, insights, and innovation to help you{" "}
        <span className="text-blue-600 inline-block">
          <TypeAnimation
            sequence={[
              "Think beyond limits.",
              2000,
              "Build with purpose.",
              2000,
              "Create with vision.",
              2000,
              "Innovate fearlessly.",
              2000,
            ]}
            wrapper="span"
            speed={45}
            deletionSpeed={40}
            repeat={Infinity}
            cursor = {true}
          />
        </span>

        {/* sketch image */}
        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>

      {/* Desktop paragraph */}
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        BrainBox is your go-to place to learn new things, test your skills, and unlock
        the creative power within you.{" "}
        <span className="text-blue-600">Start discovering your potential today!</span>
      </p>

      {/* Mobile paragraph */}
      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        BrainBox blends technology, creativity, and knowledge to help you achieve excellence.
      </p>

      <Searchbar />
    </div>
  );
};

export default Hero;

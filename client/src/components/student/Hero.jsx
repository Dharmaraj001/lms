import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import Searchbar from "./Searchbar";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full md:pt-40 pt-24 px-7 md:px-4 text-center relative overflow-hidden bg-gradient-to-b from-indigo-100/20 via-sky-200/50 to-teal-100/10">

      {/* Floating gradient glow elements */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 left-10 w-40 h-40 bg-blue-300/40 blur-[100px] rounded-full -z-10"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-10 right-10 w-56 h-56 bg-cyan-300/40 blur-[120px] rounded-full -z-10"
      />

      {/* Title with animation */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl md:text-5xl font-bold  text-gray-900 max-w-4xl leading-tight tracking-tight "
      >
        👋 Empower Your Mind,  
        <br className="hidden md:block" />
        <span className="text-blue-400 drop-shadow-sm">
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
            cursor={true}
          />
        </span>
      </motion.h1>

      {/* Desktop paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="md:block hidden text-gray-600 max-w-2xl mt-4 leading-relaxed text-lg"
      >
        We help you explore knowledge, build skills, and unlock your creative potential.{" "}
        <span className="font-semibold text-blue-600">
          Let’s transform your ideas into impact.
        </span>
      </motion.p>

      {/* Mobile paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="md:hidden text-gray-600 max-w-sm mt-3 text-base leading-relaxed"
      >
        Explore. Build. Grow. Your potential starts here.
      </motion.p>

      {/* Searchbar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.9 }}
        className="mt-10 w-full max-w-2xl"
      >
        <Searchbar />
      </motion.div>
    </section>
  );
};

export default Hero;

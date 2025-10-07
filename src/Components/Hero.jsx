import React from "react";
import { motion } from "framer-motion";
import img from "../assets/img.jpg";

const Hero = () => {
  return (
    <header id="about" className="w-screen h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Main card / container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl w-11/12 sm:w-3/4 lg:w-2/3 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center shadow-2xl border border-white/20 mt-28 md:mt-20"
      >
        {/* Left side content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight"
          >
            I am <span className="text-blue-400"> Touheed</span> Hussain
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-blue-300 text-lg sm:text-xl md:text-2xl font-semibold mb-4 tracking-wide"
          >
            I am a Frontend Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-white/70 text-sm sm:text-md md:text-lg leading-relaxed"
          >
            I build responsive and modern web applications with React, Tailwind CSS, and other cutting-edge frontend technologies. I love crafting clean, interactive, and user-friendly interfaces.
          </motion.p>
        </div>

        {/* Right side image */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="rounded-full p-1 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500"
          >
            <motion.img
              src={img}
              alt="Toheed Hussain"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover rounded-full shadow-2xl transform transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;

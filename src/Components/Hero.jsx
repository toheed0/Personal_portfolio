import React from "react";
import { motion } from "framer-motion";
import img from "../assets/img.jpg";

const Hero = () => {
  return (
    <header
      id="about"
      className="w-full min-h-screen relative overflow-hidden flex items-center justify-center 
      bg-gradient-to-b from-[#0a0f1f] via-[#0c1d3b] to-[#0a0f1f] px-4 pt-28"
    >
      {/* --- Aurora Background --- */}
      <div className="absolute inset-0">
        <div className="absolute w-[60vw] h-[60vw] bg-blue-600/20 blur-[150px] top-[-10%] left-[-10%] rounded-full"></div>
        <div className="absolute w-[50vw] h-[50vw] bg-purple-600/20 blur-[160px] bottom-[-10%] right-[-10%] rounded-full"></div>
      </div>

      {/* --- Floating Particles --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 0.8, 0], y: [-20, 0, -20] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
            className="absolute w-1 h-1 bg-white/70 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* --- Hero Card --- */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl w-full md:w-[85%] lg:w-[70%] 
        bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.6)]
        rounded-3xl p-6 md:p-10 flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12"
      >
        {/* --- Text Content --- */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            I am{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Touheed Hussain
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-blue-300 text-lg sm:text-xl md:text-2xl font-semibold mt-3"
          >
            MERN Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-white/70 mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            I develop full-stack, scalable, and high-performance web applications
            using MongoDB, Express, React, and Node.js. I focus on building modern UI,
            secure backend APIs, and smooth, professional user experiences with
            clean and optimized code.
          </motion.p>

          {/* --- Buttons --- */}
            <motion.a
              href="#projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="inline-block px-8 py-3 rounded-full text-white font-semibold text-lg
              bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:shadow-xl 
              hover:scale-105 transition-all duration-300 text-center w-full sm:w-auto"
            >
              View My Work
            </motion.a>
        </div>

        {/* --- Profile Image --- */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 blur-[80px] rounded-full opacity-40"></div>

            <motion.img
              src={img}
              alt="Touheed Hussain"
              draggable="false"
              className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 
              object-cover rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.6)]
              hover:scale-110 transition-all duration-500"
            />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;

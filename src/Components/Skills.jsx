import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { id: 1, name: "React", icon: <FaReact className="text-blue-400" /> },
  { id: 2, name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { id: 4, name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { id: 5, name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { id: 6, name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { id: 7, name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { id: 8, name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { id: 9, name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-24 
      bg-gradient-to-b from-[#0a0f1f] via-[#0c1d3b] to-[#0a0f1f]
      overflow-hidden"
    >
      {/* --- BACKGROUND AURORA GLOWS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[50vw] h-[50vw] bg-blue-600/20 blur-[150px] top-[5%] left-[10%] rounded-full"></div>
        <div className="absolute w-[45vw] h-[45vw] bg-purple-600/20 blur-[170px] bottom-[5%] right-[10%] rounded-full"></div>
      </div>

      {/* --- FLOATING PARTICLES --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, 0, -20],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 bg-white/70 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></motion.span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            My Tech Stack
          </span>
        </motion.h2>

        {/* SKILLS GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.15, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative p-6 rounded-3xl 
              bg-white/10 backdrop-blur-xl border border-white/20 
              shadow-[0_0_30px_rgba(0,0,0,0.5)]
              hover:border-blue-400 hover:shadow-[0_0_40px_rgba(0,0,100,0.6)]
              transition-all duration-300 flex flex-col items-center"
            >
              {/* Aura Ring */}
              <div className="absolute inset-0 bg-gradient-to-br 
              from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl opacity-0 
              group-hover:opacity-100 transition-all duration-500"></div>

              {/* Icon Circle */}
              <div className="w-20 h-20 flex items-center justify-center 
              rounded-full bg-white/10 backdrop-blur-xl border border-white/20
              group-hover:border-blue-400 shadow-lg">
                <span className="text-5xl">{skill.icon}</span>
              </div>

              <span className="text-white font-semibold text-lg mt-4 tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

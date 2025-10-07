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
      className="w-full py-20 bg-gradient-to-b from-indigo-900 via-blue-900 to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl sm:text-5xl font-extrabold mb-16"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
            >
              <span className="text-5xl mb-4">{skill.icon}</span>
              <span className="text-white font-semibold text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/ecom.PNG";
import img3 from "../assets/bus.PNG";
import img1 from "../assets/arch.jpeg";
import img4 from "../assets/m.png";

const projects = [
  {
    id: 1,
    title: "Architecture & Interior Design Website",
    description:
      "A high-end architecture & interior studio website with premium animations, smooth scroll, and luxury UI components.",
    image: img1,
    link: "https://hhhdesignstudio.com/",
  },
  {
    id: 2,
    title: "E-Commerce Web App",
    description:
      "A full-featured online store with product management, cart system, and responsive UI built using MERN Stack.",
    image: img2,
    link: "https://shop-me-ecommerce.netlify.app/",
  },
  {
    id: 3,
    title: "Business Website (React)",
    description:
      "A professional business landing website with clean layout, modern UI and smooth animations using React + Tailwind.",
    image: img3,
    link: "https://bussiness-react.netlify.app/",
  },
  {
    id: 4,
    title: "M-Collection E-Commerce Site",
    description:
      "I developed an eCommerce website named M-Collection using React, Tailwind CSS, and Redux Toolkit for a modern interface and smooth user experience. Its backend is built with Node.js, Express, and MongoDB (Mongoose) to ensure secure, fast, and efficient data management.",
    image: img4,
    link: "https://m-collection-59js.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0c1d3b] to-[#0a0f1f]"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[50vw] h-[50vw] bg-blue-600/20 blur-[150px] top-[10%] left-[5%] rounded-full"></div>
        <div className="absolute w-[45vw] h-[45vw] bg-purple-600/30 blur-[160px] bottom-[10%] right-[5%] rounded-full"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 0], y: [-10, 0, -10] }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 1.5,
            }}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></motion.span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-white"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            My Projects
          </span>
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              className="relative rounded-3xl overflow-hidden group 
                bg-white/10 backdrop-blur-xl border border-white/20
                shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-all duration-500 flex flex-col"
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br
                from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 
                transition-all duration-700 pointer-events-none"></div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-t-3xl
                  transform transition-transform duration-700 group-hover:scale-125"
                />
              </div>

              {/* Content */}
              <div className="relative p-6 flex flex-col h-[300px]">
                <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed flex-1 overflow-hidden">
                  <span className="line-clamp-4">{project.description}</span>
                </p>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full text-center px-6 py-2 rounded-full
      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
      text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

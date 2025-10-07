import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/ecom.PNG";
import img3 from "../assets/bus.PNG";
import img1 from "../assets/arch.jpeg";

const projects = [
  {
    id: 1,
    title: "Architecture and Inter Design Website",
    description:
      "A visually stunning architecture and interior design website built with React and Tailwind CSS, showcasing projects with modern, responsive layouts.",
    image: img1,
    link: "https://hhhdesignstudio.com/",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce app with shopping cart, payment integration, and product management.",
    image: img2,
    link: "https://shop-me-ecommerce.netlify.app/",
  },
  {
    id: 3,
    title: "Business React Website Project",
    description:
      "A modern, responsive business website built with React and Tailwind CSS to showcase services and company information professionally.",
    image: img3,
    link: "https://bussiness-react.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 bg-gradient-to-b from-indigo-900 via-blue-900 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl sm:text-4xl font-extrabold mb-12 text-center"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20 transform transition-transform duration-300 hover:scale-105 flex flex-col"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-64 object-cover rounded-t-3xl transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

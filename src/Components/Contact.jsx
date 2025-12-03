import React from "react";
import { FaPhoneAlt, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  {
    id: 1,
    name: "Phone",
    href: "tel:+923701475625",
    icon: <FaPhoneAlt />,
    color: "text-blue-400",
    display: "+92 370 1475625",
  },
  {
    id: 2,
    name: "Email",
    href: "mailto:toheedmughal370@gmail.com",
    icon: <FaEnvelope />,
    color: "text-red-400",
    display: "toheedmughal370@gmail.com",
  },
  {
    id: 3,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/touheed-hussain-30bb3b352",
    icon: <FaLinkedin />,
    color: "text-blue-400",
    display: "LinkedIn",
  },
  {
    id: 4,
    name: "WhatsApp",
    href: "https://wa.me/923044911039",
    icon: <FaWhatsapp />,
    color: "text-green-400",
    display: "WhatsApp",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0c1d3b] to-[#0a0f1f]"
    >
      {/* Aurora Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[60vw] h-[60vw] bg-blue-600/20 blur-[150px] top-[-10%] left-[-10%] rounded-full"></div>
        <div className="absolute w-[50vw] h-[50vw] bg-purple-600/20 blur-[160px] bottom-[-10%] right-[-10%] rounded-full"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-10, 0, -10],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 1.5,
            }}
            className="absolute w-1 h-1 bg-white/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></motion.span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-16 text-white"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Get in Touch
          </span>
        </motion.h2>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {contacts.map((contact) => (
            <motion.a
              key={contact.id}
              href={contact.href}
              target={
                contact.name !== "Phone" && contact.name !== "Email" ? "_blank" : ""
              }
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex flex-col items-center justify-center p-6
                bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.6)]
                border border-white/20 hover:border-gradient-to-r hover:from-blue-400 hover:to-purple-500
                transition-all duration-500 overflow-hidden group"
            >
              {/* Icon Glow */}
              <span
                className={`${contact.color} text-5xl mb-4 transition-transform duration-500 group-hover:scale-125`}
              >
                {contact.icon}
              </span>

              {/* Text */}
              <span className="text-white text-sm sm:text-base font-semibold text-center group-hover:text-blue-400 transition-colors duration-300">
                {contact.display}
              </span>

              {/* Neon Glow behind card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700 pointer-events-none"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

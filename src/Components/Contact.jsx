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
      className="w-full py-24 bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Floating particles (optional, premium feel) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-2 h-2 bg-blue-500 rounded-full absolute animate-ping" style={{ top: "20%", left: "10%" }} />
        <div className="w-2 h-2 bg-pink-500 rounded-full absolute animate-ping" style={{ top: "50%", left: "80%" }} />
        <div className="w-2 h-2 bg-green-400 rounded-full absolute animate-ping" style={{ top: "70%", left: "40%" }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl sm:text-5xl font-extrabold mb-16"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.id}
              href={contact.href}
              target={contact.name !== "Phone" && contact.name !== "Email" ? "_blank" : ""}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-10 backdrop-blur-2xl rounded-2xl shadow-lg border border-white/20 hover:shadow-xl hover:border-blue-400 transition-all duration-500 group overflow-hidden"
            >
              <span
                className={`${contact.color} text-4xl mb-4 group-hover:animate-bounce transition-transform duration-500`}
              >
                {contact.icon}
              </span>
              <span className="text-white text-sm font-semibold group-hover:text-blue-400 transition-colors duration-300 text-center">
                {contact.display}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "About", href: "#about" },
    { id: 2, name: "Projects", href: "#projects" },
    { id: 3, name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.5)]">
        <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-80"></div>

        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-white text-3xl font-extrabold tracking-wide flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Touheed
            </span>
            <span className="text-white">Hussain</span>
          </h1>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>

          {/* Nav Links */}
          <ul
            className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-10
    absolute lg:static top-full left-0 w-full lg:w-auto
    bg-black/70 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none
    px-6 py-6 lg:p-0
    transition-all duration-300
    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
    lg:max-h-full lg:opacity-100 lg:overflow-visible
  `}
          >
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)} // close menu on click
                  className="text-white/90 font-medium tracking-wide text-sm sm:text-base uppercase transition-all duration-300 hover:text-white"
                >
                  {link.name}
                </a>
                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

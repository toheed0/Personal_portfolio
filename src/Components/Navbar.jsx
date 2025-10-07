import React from "react";

const Navbar = () => {
  const navLinks = [
    { id: 1, name: "About", href: "#about" },
    { id: 2, name: "Projects", href: "#projects" },
    { id: 3, name: "Contact", href: "#contact" },
  ];

  return (
    <header  className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 shadow-2xl backdrop-blur-lg border-b border-white/20">
      <nav className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-4 transition-all duration-300">
        
        {/* Logo */}
        <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 lg:mb-0">
          Touheed<span className="text-blue-400"> Hussain</span>
        </h1>

        {/* Nav Links */}
        <ul className="flex flex-col lg:flex-row justify-center lg:justify-end items-center space-y-2 lg:space-y-0 lg:space-x-10 w-full lg:w-auto">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <a
                href={link.href}
                className="text-white font-medium tracking-wide text-sm sm:text-base uppercase transition-colors duration-300 hover:text-blue-400"
              >
                {link.name}
                {/* animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import Logo from "../img/logo-outbg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-3 lg:h-auto w-screen lg:fixed lg:top-0 lg:left-1/2 lg:-translate-x-1/2 z-50 lg:bg-white/70 lg:backdrop-blur-[8px]">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#main" className={`text-white text-lg font-bold lg:block ${isOpen ? "hidden" : "block"}`}>
          <img src={Logo} className="w-[400px] m-auto" alt="company logo" />
        </a>

        {/* Links */}
        <div className={`lg:flex lg:justify-center ${isOpen ? "block" : "hidden"} lg:w-full`}>
          <div className="text-lg flex flex-col lg:flex-row lg:space-x-8 lg:w-auto">
            <NavLink href="#youlp">What is YouLP?</NavLink>
            <NavLink href="#intern">Our Interns</NavLink>
            <NavLink href="#news">News & Insights</NavLink>
            <NavLink href="#footer">Contact</NavLink>
            <NavLink href="https://docs.google.com/forms/d/e/1FAIpQLSeNsqnY9bmrnoak1vnUBhPb7tQqxTD497HrkTpIAYY6zao70g/viewform" isExternal>Applications</NavLink>

          </div>
        </div>

        {/* Toggle Button for Mobile and Tablet */}
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className={`text-white focus:outline-none p-2 rounded-md ${isOpen ? "bg-blue-300" : "bg-blue-500"}`}>
            <img className="h-6 w-6" src={isOpen ? "arrow.png" : "menu.png"} alt={isOpen ? "open icon" : "closed icon"} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a href={href} className="text-[#343a40] no-underline hover:!text-[#5F73F1] font-semibold">
    {children}
  </a>
);

export default Navbar;

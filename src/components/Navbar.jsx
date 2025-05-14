import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const linkClass = (path) =>
    "px-4 py-2" +
    (location.pathname === path ? " font-bold underline" : "");

  return (
    <nav className="p-4 border-b flex gap-4 bg-white dark:bg-gray-800">
      <Link to="/" className={linkClass("/")}>Home</Link>
      <Link to="/about" className={linkClass("/about")}>About</Link>
      <Link to="/projects" className={linkClass("/projects")}>Projects</Link>
      <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
    </nav>
  );
}

export default Navbar;

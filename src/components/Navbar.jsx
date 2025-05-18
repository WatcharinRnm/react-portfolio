import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const linkClass = (path) =>
    "px-4 py-2 transition hover:text-primary" +
    (location.pathname === path ? " font-bold text-primary underline" : "");

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b bg-white dark:bg-gray-800 shadow-sm">
      <h1 className="text-xl font-semibold text-primary">Watcharin</h1>
      <div className="flex gap-4">
        <Link to="/" className={linkClass("/")}>Home</Link>
        <Link to="/about" className={linkClass("/about")}>About</Link>
        <Link to="/projects" className={linkClass("/projects")}>Projects</Link>
        <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "../pages/styles.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuClass = isMenuOpen ? "menu-open" : "menu-closed";

  const isActive = (path) => {
    return router.pathname === path;
  };

  const activeLinkStyle = {
    color: '#2c3e50',
    cursor: 'default'
  };
  
  return (
    <nav className="container mx-auto text-center">
      
      {/* MOBILE BURGER BUTTON */}
      <button
        className="navbar-toggler lg:hidden px-2 py-1 border border-transparent rounded mt-1 transition-transform transform hover:scale-110"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* MOBILE MENU */}
      <ul className={`lg:hidden ${menuClass} justify-evenly`}>

        <li
          className={`nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-0 ${
            isActive("/") ? "active" : ""
          }`}
        >
          <Link href="/" passHref>
          <span className="nav-link" style={isActive("/") ? activeLinkStyle : null}>ABOUT</span>
          </Link>{" "}
        </li>

        <li
          className={`nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-0 ${
            isActive("/projects") ? "active" : ""
          }`}
        >
          <Link href="/projects" passHref>
          <span className="nav-link" style={isActive("/projects") ? activeLinkStyle : null}>PROJECTS</span>
          </Link>
        </li>

        <li
          className={`nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-0 ${
            isActive("/writings") ? "active" : ""
          }`}
        >
          <Link href="/writings" passHref>
          <span className="nav-link" style={isActive("/writings") ? activeLinkStyle : null}>WRITINGS</span>
          </Link>
        </li>

        <li
          className={`nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-0 ${
            isActive("/contact") ? "active" : ""
          }`}
        >
          <Link href="/contact" passHref>
          <span className="nav-link" style={isActive("/contact") ? activeLinkStyle : null}>CONTACT</span>
          </Link>
        </li>

      </ul>

      {/* DESKTOP MENU */}
      <ul className="hidden lg:flex justify-evenly">

        <li
          className={`nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-1 ${
            isActive("/") ? "active" : ""
          }`}
        >
          <Link href="/" passHref>
          <span className="nav-link" style={isActive("/") ? activeLinkStyle : null}>ABOUT</span>
          </Link>{" "}
        </li>

        <li
          className={`nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-1 ${
            isActive("/projects") ? "active" : ""
          }`}
        >
          <Link href="/projects" passHref>
          <span className="nav-link" style={isActive("/projects") ? activeLinkStyle : null}>PROJECTS</span>
          </Link>
        </li>

        <li
          className={`nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-1 ${
            isActive("/writings") ? "active" : ""
          }`}
        >
          <Link href="/writings" passHref>
          <span className="nav-link" style={isActive("/writings") ? activeLinkStyle : null}>WRITINGS</span>
          </Link>
        </li>

        <li
          className={`nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-1 ${
            isActive("/contact") ? "active" : ""
          }`}
        >
          <Link href="/contact" passHref>
          <span className="nav-link" style={isActive("/contact") ? activeLinkStyle : null}>CONTACT</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;

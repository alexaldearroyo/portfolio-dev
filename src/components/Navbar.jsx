import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "../pages/styles.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Llamada al hook useRouter

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determina qué clase aplicar al menú solo en pantallas estrechas
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
      {/* Botón para pantallas pequeñas */}
      <button
        className="navbar-toggler lg:hidden px-2 py-1 border border-transparent rounded mt-1 transition-transform transform hover:scale-110"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menú para pantallas estrechas */}
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
        <li className="nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-0">
          <a className="nav-link" href="texts.html">
            WRITINGS
          </a>
        </li>
        <li className="nav-item-hover nav-item mt-4 mb-2 lg:mt-2 lg:mb-0">
          <a className="nav-link" href="more.html">
            CONTACT
          </a>
        </li>
      </ul>

      {/* Menú para pantallas anchas */}
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
        <li className="nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-1">
          <Link href="/writings" passHref>
            <span className="nav-link">WRITINGS</span>
          </Link>
        </li>
        <li className="nav-item-hover nav-item mt-4 mb-2 lg:mt-2 lg:mb-1">
          <a className="nav-link" href="more.html">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

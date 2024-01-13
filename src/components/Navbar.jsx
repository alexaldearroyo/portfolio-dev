import React, { useState } from 'react';
import '../pages/styles.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

      {/* Menú para pantallas grandes y pequeñas */}
      <ul className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex justify-between`}>
        <li className="nav-item mt-4 mb-5 lg:mt-2 lg:mb-0 lg:mr-12">
          <a className="nav-link active">ABOUT</a>
        </li>
        <li className="nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-0 lg:mr-12">
          <a className="nav-link" href="dev.html">PROJECTS</a>
        </li>
        <li className="nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-0 lg:mr-12">
          <a className="nav-link" href="texts.html">WRITINGS</a>
        </li>
        <li className="nav-item-hover nav-item mt-4 mb-5 lg:mt-2 lg:mb-0">
          <a className="nav-link" href="more.html">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

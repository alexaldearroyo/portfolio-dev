import React from 'react';

import Navbar from './Navbar';
import Terminal from './Terminal';
import MainContent from './MainContent';
import Footer from './Footer';

import "../pages/styles.css";
import "../pages/google-fonts.css";

const Layout = ({ children }) => {
    return (
        <div>
            <nav className="mx-auto text-center">
            <Navbar />
            </nav>
            {children}
            <Footer />
        </div>
    );
};

export default Layout;

import React from 'react';

import Navbar from './Navbar';
import Terminal from './Terminal';
import MainContent from './MainContent';

import "../pages/styles.css";
import "../pages/google-fonts.css";

const Layout = ({ children }) => {
    return (
        <div className="flex-wrapper">
            <nav className="mx-auto text-center">
            <Navbar />
            </nav>
            {children}
            {/* <div className="terminal">
                <Terminal />
            </div>
            <div className="centered-box">
                <MainContent />
            </div> */}
        </div>
    );
};

export default Layout;

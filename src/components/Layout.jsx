import React from 'react';

import Navbar from './Navbar';
import Terminal from './Terminal';
import MainContent from './MainContent';

import "../pages/styles.css";
import "../pages/google-fonts.css";

const flexWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 2,
    justifyContent: 'space-evenly',
  };

const Layout = ({ children }) => {
    return (
        <div style={flexWrapperStyle}>
            <nav className="mx-auto text-center">
            <Navbar />
            </nav>
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

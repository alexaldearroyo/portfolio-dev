import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="frame">
            <nav className="mx-auto text-center">
            <Navbar />
            </nav>
            <div className="flex-wrapper">
            {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import OtherApartments from "./OtherApartments";
import '../global.css';

const Layout = ({ children }) => {
    return (
        <div className="main-container">
            <Navbar />
            <OtherApartments />
            <div className="content-wrapper">
            {children}
            </div>

        <Footer />
        </div>
    );
};

export default Layout;

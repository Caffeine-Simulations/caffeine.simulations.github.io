import React from 'react';
import "./styles/AboutUs.css"
import Logo from "./Logo";

const AboutUs: React.FC = () => {
    return (
        <div className='AboutUs'>
            <h2>About Us</h2>
            <Logo />
            <p>A small group of devs dedicated to bringing high quality and fun mods to DCS World</p>
        </div>
    );
};

export default AboutUs;
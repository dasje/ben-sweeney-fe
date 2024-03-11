import React from "react";

import Contact from "../pages/Contact";

const Footer = () => {return (
    <div style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1
    }}>
        <Contact />
    </div>
)};

export default Footer;
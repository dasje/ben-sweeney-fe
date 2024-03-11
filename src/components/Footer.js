import React from "react";

import Contact from "../pages/Contact";

const Footer = () => {return (
    <div style={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 1
        // position: "fixed",
        // left: 0,
        // bottom: 0,
        // right: 0,
        // // align: 'center',
        // zIndex: 1
    }}>
        <Contact />
    </div>
)};

export default Footer;
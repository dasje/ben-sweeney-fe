import React, {useState} from "react";

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    return <div style={{width: width, height: height}}/>};

export default Header;
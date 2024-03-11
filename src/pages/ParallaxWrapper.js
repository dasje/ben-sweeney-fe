import React, {useState} from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxWrapper = (props) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    return (
        <div style={{width: width, height: height}}>
            <Parallax
                translateX={[`${width/4}px`, `${height/4}px`]}
                translateY={[`${width/4}px`, `${height/8}px`]}
                scale={[0.8, 1]}
                rotate={[-180, 180]}
                easing="easeInQuad"
            >
                {props.children}
            </Parallax>
        </div>
    )
};

export default ParallaxWrapper;
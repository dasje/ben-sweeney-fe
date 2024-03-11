import React, {useState} from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxWrapper = (props) => {

    return (
        <div style={{width: '99vw', height: '99vh'}}>
            <Parallax
                translateX={[0, 0]}
                translateY={[120, 45]}
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
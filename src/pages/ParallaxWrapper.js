import React, {useState} from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxWrapper = (props) => {

    return (
        <div style={{paddingTop: '10%', width: '99vw', height: '99vh'}}>
            <Parallax
                translateX={[0, 0]}
                translateY={[0, 150]}
                rotateZ={['turn']}
                scale={[2, 0.01]}
                rotate={[0, 0]}
                easing="easeInQuad"
            >
                {props.children}
            </Parallax>
        </div>
    )
};

export default ParallaxWrapper;
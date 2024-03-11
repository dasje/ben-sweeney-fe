import React from "react";

import details from '../details';
import Card from "../components/Card";
import ParallaxWrapper from "./ParallaxWrapper";

const About = () => {
    const aboutText = {
        backgroundColor: "#fb8b24",
        padding: 10,
        borderRadius: 'inherit',
        color: "white",
    }

    const containerStyles = {
        backgroundColor: "#e0e0de",
        borderRadius: 10,
        margin: 20,
        padding: 5,
      }

    return (
        <ParallaxWrapper>
            <Card
                height="40%"
                width="50%"
                title="About"
            >
                <div style={containerStyles}>
                    <div style={aboutText}>
                        {details.aboutText}
                    </div>
                </div>
                
            </Card>
        </ParallaxWrapper>
    )
};

export default About;
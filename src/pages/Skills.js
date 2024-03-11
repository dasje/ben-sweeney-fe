import React from "react";

import details from '../details';
import programmingLanguages from '../skillColors';
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import ParallaxWrapper from "./ParallaxWrapper";

const Skills = () => {
    return (
        <ParallaxWrapper>
            <Card
            height="40%"
            width="50%"
            title="Programming Skills"
        >
            {details.programmingLanguageSkills.map((v,k) => {
            return <ProgressBar
                key={k}
                skillName={v.language}
                skillColor={programmingLanguages[v.language]}
                completed={v.proficiency}
            />
            })}
        </Card>
        </ParallaxWrapper>
    )
};

export default Skills;
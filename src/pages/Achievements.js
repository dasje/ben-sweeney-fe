import React from "react";

import details from '../details';
import Card from "../components/Card";
import Tile from "../components/Tile";

const containerStyles = {
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    margin: 20,
    padding: 5,
  }

const educationStyle = {
    backgroundColor: "#9a031e",
    borderStyle: "solid",
    border: 100,
    borderRadius: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingRight: 20,
    paddingTop: 5,
}

const instituteStyle = (floatDirection, weight, fontColor, widthProportion) => {
    return {
        fontWeight: weight,
        textAlign: floatDirection,
        color: fontColor,
        letterSpacing: "3px",
        width: widthProportion,
        display: "inline-table"
    }  
}

const EducationRack = (props) => {
    const {instituteName, studied} = props;
    return (
        <div style={educationStyle}>
            <div style={instituteStyle("left","","#fb8b24", "40%")}>{instituteName}</div>
            <div style={instituteStyle("","","white", "")}>{studied}</div>
        </div>
    )
}

const ExperienceRack = (props) => {
    const {
        instituteName,
        years,
        role,
        tools,
        description
    } = props;

    return (
        <div style={educationStyle}>
                    <div style={instituteStyle("left","","#fb8b24", "40%")}>
                        <div>{instituteName}</div>
                    </div>
                    <div style={instituteStyle("right","","white", "")}>
                        <div>{role}</div>
                        <div>{years}</div>
                        <div>{tools}</div>
                        <div>{description}</div>
                    </div>
                </div>
    )
}


const Achievements = () => {
    
    return (
    
    <div>
        <Card
            height="40%"
            width="50%"
            title="Experience"
        >
            <div style={containerStyles}>
                {details.achievements.experience.map((v,k) => {
                        return <ExperienceRack
                            instituteName={v.instituteName}
                            years={v.years}
                            role={v.role}
                            tools={v.tools}
                            description={v.description}
                        />
                })}
            </div>    
        </Card>
        <Card
            height="40%"
            width="50%"
            title="Education"
        >
            <div style={containerStyles}>
                {details.achievements.education.map((v,k) => {
                return <EducationRack
                    instituteName={v.instituteName}
                    studied={v.studied}/>
                })}
            </div>
        </Card>
        <Card
            height="40%"
            width="50%"
            title="Courses"
        >
            <div style={containerStyles}>
                <div style={{display: "inline-table"}}>
                    {details.achievements.courses.map((v,k) => {
                    return <Tile
                        title={v.courseName}
                    >
                        {v.instituteName}
                    </Tile>
                    })}
                </div>
            </div>  
        </Card>
    </div>);
};

export default Achievements;
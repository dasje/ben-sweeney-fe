import React from "react";

import details from '../details';
import Card from "../components/Card";
import Tile from "../components/Tile";
import githubLogo from "../assets/icons/icons8-github-50.png";
import linkedInLogo from "../assets/icons/icons8-linkedin-50.png";

const Contact = () => {
    const containerStyles = {
        backgroundColor: "#e0e0de",
        borderRadius: 10,
        margin: 20,
        padding: 5,
      }
    const contactStyle = {
        backgroundColor: "#9a031e",
        borderStyle: "solid",
        border: 100,
        borderRadius: 10,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingRight: 20,
        paddingTop: 5,
        color: "white",
    }
    return (
        <Card
            height="40%"
            width="50%"
            title="Contact"
        >
            <div style={containerStyles}>
                <div style={contactStyle}>
                    <div style={{textAlign: "center"}}>
                        {details.contact.email}
                    </div>
                    <div style={{display: "flex"}}>
                        <div style={{margin: "auto"}}>
                            <div>{details.contact.street} {details.contact.number}</div>
                            <div>{details.contact.postcode} {details.contact.city}</div>
                            <div>{details.contact.country}</div>
                        </div>
                        <div style={{margin: "auto"}}>
                            <a href={details.contact.github} target="_blank" rel="noopener noreferrer">
                                <img alt="GitHub Logo" src={githubLogo} />
                            </a>
                            <a href={details.contact.linkedin} target="_blank" rel="noopener noreferrer">
                                <img alt="LinkedIn Logo" src={linkedInLogo} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
};

export default Contact;
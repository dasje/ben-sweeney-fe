import React from "react";
import "./Card.module.css";

const Card = (props) => {
    const { height, width, title } = props;

    const cardStyle = {
        height: height,
        width: width,
        backgroundColor: "rgba(15,76,92,0.9)",
        borderStyle: "solid",
        border: 100,
        borderRadius: 50,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingTop: 5,
    }

    const titleStyle = {
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#e36414",
        letterSpacing: "2px",
        textShadow: "2px 2px white",
    }


    return (
        <div style={cardStyle}>
            <div style={titleStyle}>
                <h1>{title}</h1>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
};

export default Card;


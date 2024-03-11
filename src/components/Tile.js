import React from "react";
import "./Card.module.css";

const Tile = (props) => {
    const { title } = props;

    const tileStyle = {
        height: "auto",
        width: "25%",
        backgroundColor: "#5f0f40",
        borderRadius: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        // paddingTop: 5,
        float: "left"
    }

    const titleStyle = {
        // fontWeight: 'bold',
        textAlign: 'center',
        color: "#e36414",
        letterSpacing: "3px",
    }


    return (
        <div style={tileStyle}>
            <div style={titleStyle}>
                <h4>{title}</h4>
            </div>
            <div style={{color: "white"}}>
                {props.children}
            </div>
        </div>
    )
};

export default Tile;


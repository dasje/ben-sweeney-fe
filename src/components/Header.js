import React from "react";
import Card from "./Card";

const Header = (props) => {
    const containerStyles = {
        backgroundColor: "#e0e0de",
        borderRadius: 10,
        padding: 5,
        
      }
    const contentStyle = {
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
    <div style={{
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1
    }}>
        <Card
                height="40%"
                width="95%"
        >
            <div style={containerStyles}>
                <div style={contentStyle}>
                    <h1 style={{margin: 'auto', textAlign: 'center', padding: 10}}>
                        Ben Sweeney
                    </h1>
                    <div style={{margin: 'auto', display: 'flex', width: '50%'}}>
                        {props.children}
                    </div>
                    
                </div>
                
            </div>
        </Card>
    </div>
)};

export default Header;
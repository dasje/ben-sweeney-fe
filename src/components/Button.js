import React, {useState} from "react";

const Button = (props) => {
    const {
        textToDisplay,
        click
    } = props;
    const [bgButtonColor, setBgButtonColor] = useState("#0f4c5c");
    const containerStyle = {
      backgroundColor: bgButtonColor,
      borderStyle: "solid",
      border: 100,
      borderRadius: 50,
      margin: "10px"
    }
  
    const titleStyle = {
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white",
        letterSpacing: "3px",
        paddingLeft: 20,
        paddingBottom: 5,
        paddingRight: 20,
        paddingTop: 5,
    }

    const moveMouseOver = (e) => {
      setBgButtonColor("white")
    }
    const moveMouseOff = (e) => {
      setBgButtonColor("#0f4c5c")
    }
    return <div
      style={containerStyle}
      onMouseOver={moveMouseOver}
      onMouseLeave={moveMouseOff}
      onClick={click}
    >
      <div style={titleStyle}>
        {textToDisplay}
      </div>
    </div>
    }

      

export default Button;

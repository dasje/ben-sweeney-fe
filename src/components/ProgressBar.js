import React from "react";

const ProgressBar = (props) => {
    const {skillName, skillColor, completed} = props;
    const containerStyles = {
      height: 20,
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 20,
      padding: 5,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: skillColor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
           <span style={labelStyles}>{`${skillName} ${completed}%`}</span>
        </div>
      </div>
    );
  };

  export default ProgressBar;
import React from 'react';

const Button = (props) => {
  return ( 

    <div className="button"
        type={props.type}
        style={props.style}
        onClick={props.onClick}
        text={props.text} /> 
  );
}


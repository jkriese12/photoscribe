import React from "react";
import Button from "react-bootstrap/Button";

const Button = () => {
    return (
        <Button>
            onClick={props.onClick} 
        </Button> 
    );
}

export default Button;

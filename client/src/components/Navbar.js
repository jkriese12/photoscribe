import React from 'react'

const Navbar = (props) => {
    return (
        <Navbar>
            <Navbar style={props.style}>{props.children}</Navbar>
        </Navbar>
    );
}

export default Navbar;

import React from 'react';
import logo from "./ps-logo.png";

const Navbar = () => {
    return ( 

        <Navbar navbar-light bg-light>
            <div class="container-fluid">
                <a class="navbar-brand" href="/login">
                {/* <img src={logo} alt="" width="30" height="30" class="d-inline-block align-text-top" /> */}
                PhotoScribe
                </a>
            </div>
        </Navbar>
    )
}

export default Navbar;


import React from 'react';
import { FaAddressCard } from "react-icons/fa";

const Navbar = () => {
    return ( 

        <Navbar navbar-light bg-light>
            <div class="container-fluid">
                <a class="navbar-brand" href="/login"><FaAddressCard />
                <h1><b>PhotoScribe</b></h1>
                </a>
            </div>
        </Navbar>
    )
}

export default Navbar;


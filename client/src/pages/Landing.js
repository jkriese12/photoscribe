import React from 'react'
import logo from "../components/Images/pslogo.jpg";

const Landing = () => {

    return ( 
        <>
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">PhotoScribe</a>
                <span class="navbar-brand"><a href="/login">Sign In</a></span>
            </div>
            </nav>
            <h1 className="text-center">Welcome to PhotoScribe</h1>
                <div className="logo">
                    <img src={logo} alt="photoscribe logo" /> 
                </div>
        </>
  
    );
} 

export default Landing;

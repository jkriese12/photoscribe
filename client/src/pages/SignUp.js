import React, { useState } from 'react';
import Container from "../components/Container";

const SignUp = ({ Signup, error }) => { 

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Signup(details);
    }

    return (

        <Container className="signup">
            <form onSubmit={submitHandler}>  
                <div className="form-inner"></div>
                    <h2>Create an account</h2>
                    {(error =! "") ? ( <div className="error">{error}</div>)  : ""}
                    <div className="form-group">
                        <label inputEmail="name">Email</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div> 
                    <div className="form-group">
                        <label inputPassword="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input className="btn btn-dark btn-block" type="submit" value="Sign Up"/>
            </form> 
            <p className="forgot-password text-right">
                Already registered <a herf="/login">sign in?</a>
            </p>
        </Container>
    );
}
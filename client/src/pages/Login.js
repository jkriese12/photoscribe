import React, { useState } from 'react';
import Container from "../components/Container";

const Login = ({ Login, error }) => { 

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (

        <Container className="login">
            <form onSubmit={submitHandler}>  
                <div className="form-inner"></div>
                    <h2></h2>
                    {(error =! "") ? ( <div className="error">{error}</div>)  : ""}
                    <div className="form-group">
                        <label inputName="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                    </div>
                    <div className="form-group">
                        <label inputEmail="name">Email</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div> 
                    <div className="form-group">
                        <label inputPassword="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" value="LOGIN"/>
            </form> 
            <p className="forgot-password text-right">
                Forgot <a herf="/signup">password?</a>
            </p>
        </Container>
        
      
    );
}

export default Login;

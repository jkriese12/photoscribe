import React, { useState } from 'react';
import "./LoginForm.css";

const LoginForm = ({ Login, error }) => { 

    const [details, setDetails] = useState({ email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return ( 
        <div className="root-container">
            <form className="form center"
            onSubmit={submitHandler}>  
                <div className="form-inner"></div>
                    <h3 className="text-center">Log In</h3>
                    {/* {(error =! "") ? ( <div className="error">{error}</div>)  : ""}         */}
                    
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="/signup">password?</a> 
                    </p>
                </form> 
        </div>
      
    );
}

export default LoginForm;

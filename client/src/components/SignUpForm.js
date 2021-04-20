import React, { useState } from 'react';
import "./SignUpForm.css";

const SignUpForm = ({ SignUp, error }) => { 

    const [details, setDetails] = useState({ name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        SignUp(details);
    }

    return ( 
        <div class="root-container">
            <form className="form"
            onSubmit={submitHandler}>  
                <div className="form-inner"></div>
                    <h3 className="text-center">Create An Account</h3>
                    {/* {(error =! "") ? ( <div className="error">{error}</div>)  : ""}      */}

                    <div className="form-group">
                        <label>Name</label>
                        <input type="name" className="form-control" placeholder="Enter name" id="name" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>    
                    
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
                        Already have an account? <a href="/login">Sign in here</a> 
                    </p>
                </form> 
        </div>
      
    );
}

export default SignUpForm;
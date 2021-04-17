import React, { Component } from "react";
import Container from "../components/Container";

export default class Login extends Component {
    render() {
        return ( 
            <Container style={{ marginTop: 100, marginRight: 300, marginLeft: 300 }}>
                <form id="login">
                    <h3 className="text-center">Log In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="signup">password?</a> 
                    </p>
                </form> 
            </Container>
        );
    }
}
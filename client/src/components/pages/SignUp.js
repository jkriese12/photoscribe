import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
    return ( 

       <Col md={{ span:6, offset:3 }} style={{ marginTop:100 }}>
            <Form>
                <h3>Create an account</h3>

                    <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>

                    <Button variant="dark" type="submit" block> Create Account</Button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">log in?</a>
                    </p>
            </Form> 
        </Col> 
    );     
} 

export default SignUp;






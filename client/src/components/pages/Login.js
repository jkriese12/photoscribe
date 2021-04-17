import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LogIn = () => {
    return (

       <Col md={{ span:6, offset:3 }} style={{ marginTop:200 }}>
            <Form>
                <h3>Log in</h3>

                <Form.Group controlId="id">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="id">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <Col xs="auto" className="my-1">
                    <Form.Check
                        type="checkbox"
                        id="customControlAutosizing"
                        label="Remember my preference"
                        custom
                    />
                </Col>

                <Button variant="dark" type="submit" block>LogIn</Button>
                <p className="forgot-password text-right">
                    Forgot <a href="/signup">password?</a>
                </p>
            </Form> 
        </Col>
    );
}  

export default LogIn;

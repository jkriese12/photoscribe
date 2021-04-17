import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Landing = () => {
    return (
        
       <Container>
            <Navbar bg="light">
                <Navbar.Brand href="/">PhotoScribe</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="/login">Sign In</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <Col md={{ span:6, offset:3 }} style={{ marginTop:200 }} className="text-center"> 
                    
                <Image src="./components/Images/pslogo.jpg" alt="photoscribe logo"/>  
                <h2>Welcome to PhotoScribe</h2>
            </Col>
        </Container>  
    );
}  

export default Landing;


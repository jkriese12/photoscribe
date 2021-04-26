import React from 'react'
import { Col, Row, Container } from "../components/Grid/Grid";
import Card from "../components.Card"
import LoginForm from "../components/LoginForm"; 
import {FaImage, FaLock, FaUserFriends } from "react-icons/fa";
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div>
            <Container fluid >
                <Row>
                    <div className="text-center">
                        <h3>Welcome to PhotoScribe, an easy to use desktop 
                        application to organize, detail and shart photos.</h3> 
                    </div>   
                </Row>
                <Row>
                </Row> 
                <Row>
                    <Col size="col-4">
                        <Card style={{cardImgTop: <FaImage />}}>
                            <div className="card-text">
                                <p>Great for family historians to easily label who is in old photos or share a photo's story.</p>
                            </div>
                        </Card> 
                    </Col>
                    <Col style="col-4"> 
                        <Card style={{cardImgTop: <FaLock />}}>
                            <div className="card-text">
                                <p>Great for family historians to easily label who is in old photos or share a photo's story.</p>
                            </div>
                        </Card>  
                    </Col>
                    <Col style="col-4"></Col>
                </Row>

                

                
               
            

               

            </Container>
        </div>
    )
}

export default LandingPage;

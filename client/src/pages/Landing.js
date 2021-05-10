import React from "react";
import { Link } from "react-router-dom";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import Footer from "../components/Footer";
import one from "../components/Images/one.png";
import two from "../components/Images/two.png";
import three from "../components/Images/three.png";
import tryitnow from "../components/Images/try-it-now2.jpg";
import "./styles/Landing.css";
import landing from "../components/Images/site_content.svg"
const LandingPage = () => {
  return (
    <div>
      <Container className="container">
        <Row>
          <div className="landing-title">
            <h2>Photoscribe</h2>
            <h5>
              <b>Organize, detail and share photos in 3 easy steps!</b>
            </h5>
          </div>
        </Row>
        <Row> 
          <div className="landing-svg"> 
            <img src={landing} alt="undraw content" />
          </div>
        </Row>
        <Row className="info">
          <Col size="col-4">
            <Card className="landing-card">
              <img src={one} color="#d7dbdd" alt="" />
              <div className="landing-card-text">
                <p>Choose a photo from your desktop pc or laptop device.</p>
              </div>
            </Card>
          </Col>
          <Col size="col-4">
            <Card className="landing-card">
              <img src={two} color="#d7dbdd" alt="" />
              <div className="landing-card-text">
                <p>
                  Bring your photo to life with details like who is in the photo or the year taken.
                </p>
              </div>
            </Card>
          </Col>
          <Col size="col-4">
            <Card className="landing-card">
              <img src={three} alt="" />
              <div className="landing-card-text">
                <p>Save it to a gallery and share with friends and family.</p>
              </div>
            </Card>
          </Col>
        </Row>
        <Link to="/signup">
          <Button className="landing-button">
            <img src={tryitnow} alt="try it" />
          </Button>
        </Link>
        <Row className="landing-redirect text-center">
          <Link to="/login">
            <h6>Already have an account? login here</h6>
          </Link>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default LandingPage;

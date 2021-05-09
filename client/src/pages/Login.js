import React from "react";
import LoginForm from "../components/LoginForm";
import Container from "../components/Container";
import Row from "../components/Row";
import Footer from "../components/Footer";
import "./styles/Login.css";
import girl_with_camera from "../components/Images/girl_with_camera.svg"

const Login = () => {
  return (
    <div>
      <Container className="login">
        <Row className="title-svg">
          <div className="title">
            <h3>Welcome Back!</h3>
          </div>
          <div className="login-svg"> 
            <img src={girl_with_camera} alt="undraw content" />
          </div>
        </Row>
        <Row className="form">
          <LoginForm />
        </Row>
        <Row className="redirect">
          <div>
            <p className="small">
              Don't have your account yet? <a href="/signup">sign up</a> here
            </p>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;

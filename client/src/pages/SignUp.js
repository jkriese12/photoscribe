import React from "react";
import Row from "../components/Row";
import Container from "../components/Container";
import SignUpForm from "../components/SignUpForm";
import Footer from "../components/Footer";
import "./styles/SignUp.css";
import snap_the_moment from "../components/Images/snap_the_moment.svg";
const SignUp = () => {
  return (
    <>
      <Container className="signup">
        <Row>
          <div className="signup-svg">
            <img src={snap_the_moment} alt="undraw content" />
          </div>
        </Row>
        <Row className="form">
          <SignUpForm />
        </Row>
        <Row className="redirect">
          <div>
            <p className="small">
              Already have an account?<a href="/login"> login</a> here
            </p>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;

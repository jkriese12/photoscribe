import React from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import { FaBackward, FaTh } from "react-icons/fa";
import Logout from "../components/Logout";
import Wrapper from "../components/Wrapper";
import "./styles/Email.css";
import EmailForm from "../components/EmailForm";
import undraw_share from "../components/Images/undraw_share.svg";

const Email = () => {
  const { albumName } = useParams();
  return (
    <div>
      <Container>
        <Wrapper className="header-wrapper"> 
          <Row className="nav-links small"> 
            <div className="back-to-work">
              <Link to={"/gallery/" + albumName} className="link">
                <FaBackward size="1em" color="#6c757d" /> View Gallery
              </Link>
            </div> 
            <div className="back-to-work">
              <Link to="/scribe" className="link">
                <FaBackward size="1em" color="#6c757d" /> Scribe New Photo
              </Link>
            </div>
            <div className="back-to-work">
              <Link to="/directory" target="blank" className="link">
                View Directory <FaTh size="1em" color="#6c757d" />
              </Link>
            </div>
            <Logout />  
          </Row> 
          <Row className="gallery-name">
            <h1 className="gallery-title">{albumName}</h1>
          </Row>
        </Wrapper>  
        <Wrapper  className="share">
          <Row className="share-svg"> 
            <div>
              <img src={undraw_share} alt="undraw content" />
            </div>
          </Row>
          <Row className="login-form-graphic">
            <div className="login-form">
              <EmailForm />
            </div>
          </Row>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Email;

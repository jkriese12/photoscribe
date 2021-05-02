import React, { useState } from 'react'; 
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import { FaBackward , FaTh, FaRegEnvelope } from "react-icons/fa";
import Logout from "../components/Logout";
import sendEmail from "../components/sendEmail";
import Wrapper from "../components/Wrapper"; 
import DirectoryCard from "../components/DirectoryCard";
import "./styles/Directory.css";


const Directory = () => {    

const array = []
       
   function galleryData(data) { 

      
       return (
           <DirectoryCard  {...data}/>
       )
   }
    return (
        <Container className="directory">
            <Wrapper className="wrapper"> 
                <Logout />
                <div className="dir-buttons small">
                    <div className="back-to-work">
                        <Link to="/" className="link"><FaBackward size="1em" color="#6c757d" /> Scribe New Photo</Link>
                    </div> 
                    <div className="back-to-work">
                        <Link to="/" className="link">Email Link <FaRegEnvelope size="1em" color="#6c757d" /></Link>
                    </div> 
                </div>         
                <Row>
                    <h2 className="title">Directory</h2>
                </Row>
            </Wrapper>
            <Row className="dirImages">
                {array.map(galleryData)}
            </Row>
        </Container>
    )
}

export default Directory;

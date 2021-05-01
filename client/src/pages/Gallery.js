import React, { useState } from 'react'; 
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import "./styles/Gallery.css";
import GalleryCardTemplate from "../components/GalleryCardTemplate";
import { FaBackward , FaTh, FaRegEnvelope } from "react-icons/fa";
import Logout from "../components/Logout";
import sendEmail from "../components/sendEmail";
import Wrapper from "../components/Wrapper";


const Gallery = () => {    

const array = []
       
   function galleryMap(card) { 

       const {dateTaken, photoLocation, synopsis, selectedFile } = card 
       return (
           <GalleryCardTemplate  {...card}/>
       )
   }
    return (
        <Container className="selectedGallery">
            <Wrapper className="wrapper"> 
                <Logout />
                <div className="gallery-buttons small">
                    <div className="back-to-work">
                        <Link to="/" className="link"><FaBackward size="1em" color="#6c757d" /> Scribe New Photo</Link>
                    </div> 
                    <div className="back-to-work">
                        <Link to="/" className="link">View Directory <FaTh size="1em" color="#6c757d" /></Link>
                    </div> 
                </div> 
                <sendEmail />
                    <div className="send-email small text-secondary">
                        <Link to="/" className="link">Email Link <FaRegEnvelope size="1em" color="#6c757d" /></Link>
                    </div> 
            <Row>
                <h2 className="gallery-title">Gallery Name</h2>
            </Row>
            </Wrapper>
            <Row className="galImages">
                {array.map(galleryMap)}
            </Row>
        </Container>
    )
}

export default Gallery;


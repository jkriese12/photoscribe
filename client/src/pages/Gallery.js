import React, { useState } from 'react'; 
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import "./styles/Gallery.css";
import GalleryCardTemplate from "../components/GalleryCardTemplate";
import { TiArrowBack , TiArrowForward } from "react-icons/ti";


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
            <div className="gallery-buttons">
                <div className="back-to-work">
                    <Link to="/"><TiArrowBack size="2em" color="#007bff" />Back</Link>
                </div> 
                <div className="back-to-work">
                    <Link to="/">View Directory<TiArrowForward size="2em" color="#007bff" /></Link>
                </div> 
            </div> 
            
            
            <Row>
                <h1 className="gallery-title">Gallery Name</h1>
            </Row> 
            <Row className="galImages">
                {array.map(galleryMap)}
            </Row>
        </Container>
    )
}

export default Gallery;


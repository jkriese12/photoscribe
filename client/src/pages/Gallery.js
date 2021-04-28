import React, { useState } from 'react'; 
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import "./styles/Gallery.css"
import GalleryImage from "../components/GalleryImage"

const Gallery = () => {   

const array = [{
    image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80",
    year: 2021,
    locaton: "Ohio",
    info: "This is a cat"
},
{
    image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80",
    year: 2021,
    locaton: "Ohio",
    info: "This is a cat"
},
{
    image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80",
    year: 2021,
    locaton: "Ohio",
    info: "This is a cat"
},
{
    image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80",
    year: 2021,
    locaton: "Ohio",
    info: "This is a cat"
},
{
     image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80",
    year: 2021,
    locaton: "Ohio",
    info: "This is a cat"
  
},
{
    image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80",
    year: 2021,
    locaton: "Ohio",
    info: "This is a cat"
}
]    
   function galleryMap(card) {
       const {image, year, location, info} = card 
       return (
           <GalleryImage  {...card}/>
       )
   }
    return (
        <Container className="selectedGallery"> 
            <button className="btn btn-primary btn-sm" ><Link to="/">View Directory</Link></button>
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


import React from 'react' 
import Container from "../components/Container";
import "./GalleryImage.css";

const GalleryImage = ({ image, year, location, info }) => {
    return ( 
        <Container >
            <div className="card mb-3">
                <div className="row g-0 myRow">

                    <div className="col-md-7">
                        <img className="galleryImage" src={image} alt="this is a card" />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <p className="card-text" id="mytext">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            
                        </div>
                    </div>
                </div>
            </div> 
        </Container>
       

    )
}

export default GalleryImage

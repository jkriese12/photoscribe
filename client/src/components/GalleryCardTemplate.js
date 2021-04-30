
import React from 'react';
import "./styles/GalleryCardTemplate.css";

function GalleryCard(props) { 

    return (  

        <div className="container">
            <div className="card mb-3">
                <div className="row no-gutters myRow">
                    <div className="col-md-6"> 
                        <img className="galleryImage" src={props.photo} alt="gallery" />
                    </div>
                    <div class="col-md-6">
                        <div className="card-body">
                            <p className="card-text">
                                {props.dateTaken},
                                {props.photoLocation},
                                {props.synopsis}.
                                {props.selectedFile}
                            </p>
                        </div>
                    </div>
                </div> 
            </div> 
            <div className="gallery-card-buttons">
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-sm btn-secondary">Send to Gallery</button>           
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-sm btn-secondary">Reset</button>   
            </div>    
        </div> 
                
    ); 
}

export default GalleryCard;

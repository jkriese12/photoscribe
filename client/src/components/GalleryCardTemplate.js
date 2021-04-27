import React from 'react';
import "./GalleryCardTemplate.css";

function GalleryCard(props) { 

    return (  

        <div className="container">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4"> 
                        <div className="img-square-wrapper">
                            <img className="" src={props.photo} alt="gallery" />
                        </div>
                    </div>
                    <div class="col-md-8">
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
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-sm btn-secondary">Send to Gallery</button>           
        </div> 
                
    );
}

export default GalleryCard;


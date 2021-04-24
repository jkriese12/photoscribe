import React from 'react';
import "./GalleryCardTemplate.css";

function GalleryCard(props) { 

    return (  

        <div className="card" style={{border: "none"}}> 
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img className="" src={props.photo} alt="photo gallery image" /> 
                                </div>
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
                </div>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-sm btn-secondary">Send to Gallery</button>
            </div>   
        </div>
    );
}

export default GalleryCard;


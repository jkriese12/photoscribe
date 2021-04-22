import React from 'react';
import "./GalleryCard.css";

function GalleryCard() { 

    return (  

        <div className="card"> 
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img className="" src={props.photo} alt="photo gallery card" /> 
                                </div>
                                <div className="card-body">
        
                                    <p className="card-text">
                                        {prop.dateTaken},
                                        {prop.photoLocation},
                                        {prop.synopsis}.
                                        {prop.selectedFile}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default GalleryCard;


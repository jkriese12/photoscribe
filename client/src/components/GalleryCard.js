import React from "react";
import "./GalleryCard.css"

const GalleryCard = (props) => {
    return ( 

        <div className="card text-left shadow">
            <div className="overflow">
               <img src={props.image} alt="" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary"></p> 
                <div class="input-group mb-3">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Add to Gallery</button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"></a></li>
                </ul>
                <input type="text" class="form-control" aria-label="Text input with dropdown button" />    
            </div>
            </div>
        </div>       
    );
}

export default GalleryCard;

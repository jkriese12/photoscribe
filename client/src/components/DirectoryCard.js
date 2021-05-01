import React from 'react'
import { Link } from "react-router-dom";
import "./styles/DirectoryCard.css"

const DirectoryCard = (props) => {
   return ( 

    <div>
      <div class="directory-card" >
        <img className="card-img-top" src={props.photo} alt="directory" />
        <div class="card-body">
          <h5 class="card-title">{props.galleryName}</h5>
        </div>
      </div>
      <div className="directory-buttons">
        <Link to="/" className="btn btn-sm btn-secondary link">View Gallery</Link>
      </div> 
    </div>
    
        
    );
}

export default DirectoryCard;
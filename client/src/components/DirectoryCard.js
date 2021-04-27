import React from 'react'
import "./DirectorCard.css"

const DirectoryCard = (props) => {
   return (
    <div> 
      <div className="card"> 
        <div className="img-square-wrapper">
          <img className="card-img-top" src={props.photo} alt="photo gallery image" />
            <div className="card-body">
              <p className="card-title">
               <h5>{props.title}</h5>     
              </p>
            </div>
        </div> 
      </div>
    </div>
        
    );
}

export default DirectoryCard;
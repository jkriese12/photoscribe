import React from 'react'
import "./Card.css"

const Card = (props) => {
   return (
 
    <div> 
      <div className="card"> 
        <img className="card-img-top" src={props.icon} alt="icon" />
            <div className="card-body">
              <div className="card-text">
               <p>{props.text}</p>     
            </div>
        </div> 
      </div>
    </div>
 
        
    );
}

export default Card;
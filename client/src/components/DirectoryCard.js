import React from 'react'
import "./DirectorCard.css"

const DirectoryCard = (props) => {
   return (
    <div
      className="card"
      style={{
        backgroundImage: props.image 
      }}>
    </div>
        
    );
}

export default DirectoryCard;
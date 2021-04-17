import React from "react";
import Card from "react-bootstrap/Card";

const AlbumCover = (props) => {
    return (
        <Card className="album-cover" 
            style={{ backgroundImage: props.image }}>
            
        </Card>
            
   
    );
}

export default AlbumCover;

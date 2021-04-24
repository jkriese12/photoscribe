import React, { useState } from 'react'; 
import { Link } from "react-router-dom";
import Grid from "./Grid"; 


const Gallery = (props) => {   

    const [details, setDetails] = useState({selectedGalleryName: "", selectedGalleryCards:[]}); 
   
    return (
        <div className="selectedGallery"> 
            <button className="btn btn-secondary btn-sm" ><Link to="/">View Directory</Link></button>
            <h1>{props.selectedGalleryName}</h1>
            <h5>(Hover over the photo to zoom)</h5>
            {/* <Grid /> */}
        </div>
    )
}

export default Gallery;


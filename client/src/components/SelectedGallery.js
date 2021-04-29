import React, { useState } from "react";  
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

const SelectedGallery = (props) => { 

const [selectedGalleryName, setSelectedGalleryName] = useState({
     name: "",
 }); 

// const dispatch = useDispatch();
// const submitHandler = (e) => {
//     e.preventDefault();

//     dispatch(createPost(details));
//   };

    return (  

        <form className="selected-gallery">
            <div className="form-group">
                <label htmlFor="selected-gallery-name">Selected Gallery:</label><br/>
                <text
                    type="name"
                 /> 
            </div><br/>
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-sm btn-secondary">View Gallery</button>
        </form> 
                     
    );
}

export default SelectedGallery;


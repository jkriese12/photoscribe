import React, { useState } from "react";  
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

import "./styles/CreateGalleryListForm.css";

const CreateGalleryListForm = (props) => { 

const [galleryName, setGalleryName] = useState({
     name: "",
 }); 

// const dispatch = useDispatch();
// const submitHandler = (e) => {
//     e.preventDefault();

//     dispatch(createPost(details));
//   };

    return (  

        <form className="create-name">
            <div className="form-group">
                <label htmlFor="gallery-name">Create a Gallery:</label><br/>
                <input
                    type="name"
                    placeholder="Name"
                    className="form-group"
                    // onSubmit={(e) => setDetails({  name : e.target.value })}
                    // value={details.name}
                 /> 
            </div> 
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-sm btn-secondary">Create</button>
        </form> 
                     
    );
}

export default CreateGalleryListForm;

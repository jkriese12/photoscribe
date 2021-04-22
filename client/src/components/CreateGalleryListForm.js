import React, { useState } from "react";  
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

import "./CreateGalleryListForm.css";

const CreateGalleryListForm = () => { 

const [galleryName, setGalleryName] = useState({
     name: "",
 }); 

const dispatch = useDispatch();
const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createPost(details));
  };

    return (  

        <form className="create-name">
            <div className="form-group">
                <label htmlFor="gallery-name">Create a Gallery</label>
                <input
                    type="name"
                    className="form-group"
                    placeholder="Gallery Name"
                    onSubmit={(e) => setDetails({  name : e.target.value })}
                    value={details.name}
                 /> 
            </div> 
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-secondary">Create</button>
        </form>                
    );
}

export default CreateGalleryListForm;

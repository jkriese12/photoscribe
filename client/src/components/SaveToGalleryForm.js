import React, { useState } from "react";  
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

import "./SaveToGalleryForm.css";

const SaveToGalleryForm = () => { 

  const [details, setDetails] = useState({
    dateTaken: "",
    photoLocation: "",
    synopsis: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createPost(details));
  };

  return ( 

    <form className="search">
      <div className="form-group">
        <label htmlFor="gallery">Gallery:</label>
        <input
          value={props.search}
          onChange={this.props.handleInputChange}
          name="gallery"/>
          <datalist id="gallery">
          {props.gallery.map(gallery => (
            <option value={gallery} key={gallery} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-secondary">
          Select Gallery
        </button>
      </div>
    </form>
  );
}

export default SaveToGalleryForm;


    

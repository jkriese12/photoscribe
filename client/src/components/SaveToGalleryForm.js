import React from "react";
import "./SaveToGalleryForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SaveToGalleryForm(props) {
  return ( 
    
    <form className="search">
      <div className="form-group">
        <label htmlFor="gallery">Gallery:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
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
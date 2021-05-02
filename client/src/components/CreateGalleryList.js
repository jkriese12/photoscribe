import React, { useState } from "react";
import "./styles/CreateGalleryList.css";

const CreateGalleryList = (props) => {
  const [newGallery, setNewGallery] = useState("");
  const selector = document.getElementById("gallery");
  const option = document.createElement("option");
  const submitToDropdown = (e) => {
    e.preventDefault();
    option.text = newGallery;
    selector.add(option);
  };
  return (
    <form className="create-name">
      <div className="form-group">
        <label htmlFor="gallery-name">Create a Gallery:</label>
        <br />
        <input
          type="name"
          placeholder="Name"
          className="form-group"
          onChange={(e) => {
            setNewGallery(e.target.value);
          }}
          value={newGallery}
        />
      </div>
      <button
        type="submit"
        onClick={submitToDropdown}
        className="btn btn-sm btn-secondary"
      >
        Create
      </button>
    </form>
  );
};

export default CreateGalleryList;

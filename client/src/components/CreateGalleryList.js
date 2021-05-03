import React from "react";
import "./styles/CreateGalleryList.css";

const CreateGalleryList = ({ newGallery, setNewGallery }) => {
  const selector = document.getElementById("gallery");
  const option = document.createElement("option", { key: "test" });
  // Sending created gallery name to dropdown selection
  const submitToDropdown = (e) => {
    e.preventDefault();
    option.text = newGallery;
    selector.add(option);
  };
  return (
    <form className="create-name">
      <div className="form-group">
        <label htmlFor="gallery-name">Add new Gallery to list:</label>
        <br />
        <input
          type="name"
          placeholder="Name"
          className="form-group"
          onChange={(e) => {
            setNewGallery(e.target.value);
          }}
          value={newGallery}
          maxLength="14"
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

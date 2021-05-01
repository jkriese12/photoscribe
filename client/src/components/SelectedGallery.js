import React from "react";

const SelectedGallery = ({ details }) => {
  return (
    <form className="selected-gallery">
      <div className="form-group">
        <label htmlFor="selected-gallery-name">
          Selected Gallery: {details.albumName}
        </label>
        <br />
        <text type="name" />
      </div>
      <br />
      <button
        type="submit"
        // onClick={props.handleFormSubmit}
        className="btn btn-sm btn-secondary"
      >
        View Gallery
      </button>
    </form>
  );
};

export default SelectedGallery;

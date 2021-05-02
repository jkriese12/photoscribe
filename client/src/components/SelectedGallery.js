import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/SelectedGallery.css";

const SelectedGallery = ({ details }) => {
  const history = useHistory();
  return (
    <div className="selected-gallery">
      <div className="form-group">
        <label htmlFor="selected-gallery-name">
          Selected Gallery: {details.albumName}
        </label>
        <br />
        <text type="name" />
      </div>
      <br />
      <button
        onClick={() => history.push("/gallery/" + details.albumName)}
        className="btn btn-sm btn-secondary"
      >
        View
      </button>
    </div>
  );
};

export default SelectedGallery;

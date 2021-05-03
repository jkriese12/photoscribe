import React from "react";
import { Link } from "react-router-dom";
import "./styles/SelectedGallery.css";

const SelectedGallery = ({ details }) => {
  return (
    <div className="selected-gallery">
      <div className="form-group">
        <Link to={"/gallery/" + details.albumName} target="blank">
          <button className="btn btn-sm btn-secondary">
            View Selected Gallery: {details.albumName}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SelectedGallery;

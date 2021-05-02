import React from "react";
import { deletePhoto } from "../actions/posts";
import { useDispatch } from "react-redux";
import "./styles/GalleryCardTemplate.css";

function GalleryCard({ data }) {
  const dispatch = useDispatch();


  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row no-gutters myRow">
          <div className="col-md-6">
            <img className="galleryImage" src={data.selectedFile} alt="gallery" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <p className="card-text">
                {data.dateTaken}
                <br />
                {data.photoLocation}
                <br />
                {data.synopsis}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-card-buttons">
        <button
          type="submit"
          className="btn btn-sm btn-secondary"
          onClick={() => dispatch(deletePhoto(data._id))}
        >
          Delete Photo
        </button>
      </div>
    </div>
  );

}

export default GalleryCard;

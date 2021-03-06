import React from "react";
import { deletePhoto } from "../actions/posts";
import { useDispatch } from "react-redux";
import "./styles/GalleryCardTemplate.css";

function GalleryCard({ data }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="card galleryCard">
        <div className="row no-gutters galleryRow">
          <div className="col-6">
            <img className="galleryImage" src={data.selectedFile} alt="gallery"/>
          </div>
          <div className="col-6">
            <div className="card-body">
              <p className="card-text galleryText">
                <b>Year:</b>&nbsp;&nbsp;{data.dateTaken}
                <br/> 
                <b>Location:</b>&nbsp;&nbsp;{data.photoLocation}
                <br/>
                <b>Details:</b>&nbsp;&nbsp;{data.synopsis}
              </p>
            </div>
          </div>
          <div className="gallery-card-button">
            <button
              type="submit"
              className="btn btn-sm btn-light"
              onClick={() => dispatch(deletePhoto(data._id))}
            >
              Remove
            </button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;

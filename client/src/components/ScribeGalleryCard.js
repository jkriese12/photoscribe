import React from "react";
import "./styles/GalleryCardTemplate.css";

function ScribeGalleryCard({ details, cropData }) {
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row no-gutters myRow">
          <div className="col-md-6">
            <img className="galleryImage" src={cropData} alt="gallery" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <p className="card-text">
                Year: {details.dateTaken}
                <br />
                Location:{details.photoLocation}
                <br />
                {details.synopsis}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="gallery-card-buttons">
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-sm btn-secondary">Send to Gallery</button>           
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-sm btn-secondary">Reset</button>   
            </div> */}
    </div>
  );
}

export default ScribeGalleryCard;

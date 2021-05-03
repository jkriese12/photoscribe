import React from "react";
import "./styles/GalleryCardTemplate.css";

function ScribeCardPreview({ details, setDetails, cropData, submitHandler, reset }) {
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row no-gutters myRow">
          <div className="col-md-6">
            <img
              className="galleryImage"
              id="test"
              src={cropData}
              onLoad={(e) => setDetails({ ...details, selectedFile: e.target.src })}
              alt="gallery"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <p className="card-text">
                <b>Year Taken:</b> {details.dateTaken}
                <br />
                <b style={{ marginBottom: 10 }}>Location:</b> {details.photoLocation}
                <br />
                <br />
                <b>Details:</b> {details.synopsis}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-card-buttons">
        <button
          type="submit"
          onClick={submitHandler}
          className="btn btn-sm btn-secondary"
        >
          Send to Gallery
        </button>
        <button type="submit" onClick={reset} className="btn btn-sm btn-secondary">
          Reset Card
        </button>
      </div>
    </div>
  );
}

export default ScribeCardPreview;

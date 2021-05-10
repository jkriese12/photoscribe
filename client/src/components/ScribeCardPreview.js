import React from "react";
import "./styles/ScribeCardPreview.css";

function ScribeCardPreview({ details, setDetails, cropData, submitHandler, reset }) {
  return (
    <div>
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
              <div className="card-text">
                <b>Year:</b>&nbsp;&nbsp;{details.dateTaken}
                <br/> 
                <b>Location:</b>&nbsp;&nbsp;{details.photoLocation}
                <br/>
                <b>Details:</b>&nbsp;&nbsp;{details.synopsis}
              </div>
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
};

export default ScribeCardPreview;

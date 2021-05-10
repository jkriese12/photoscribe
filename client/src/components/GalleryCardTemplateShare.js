import React from "react";
import "./styles/GalleryCardTemplate.css";

function GalleryCardTemplateShare({ data }) {
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters myRow">
          <div className="col-md-6">
            <img className="galleryImage" src={data.selectedFile} alt="gallery" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <div className="card-text">
                <b>Year:</b>&nbsp;{data.dateTaken}
                <br/> 
                <b>Location:</b>&nbsp;{data.photoLocation}
                <br/>
                <b>Details:</b>&nbsp;{data.synopsis}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCardTemplateShare;

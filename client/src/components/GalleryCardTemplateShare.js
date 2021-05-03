import React from "react";
import "./styles/GalleryCardTemplate.css";

function GalleryCardTemplateShare({ data }) {
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
                <b>Year Taken:</b> {data.dateTaken}
                <br />
                <b style={{ marginBottom: 10 }}>Location:</b> {data.photoLocation}
                <br />
                <b style={{ marginLeft: 60 }}>Details</b>
                <br />
                {data.synopsis}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCardTemplateShare;

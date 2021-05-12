import React from "react";
import "./styles/GalleryCardTemplateShare.css";

function GalleryCardTemplateShare({ data }) {
  return (
    <div>
      <div className="card mb-3 shareCard">
        <div className="row no-gutters shareRow">
          <div className="col-md-6">
            <img className="shareImage" src={data.selectedFile} alt="gallery" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <div className="card-text shareText">
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

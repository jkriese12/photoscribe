import React from "react";
import ImageCropper from "../components/ImageCropper";
import ScribeForm from "../components/ScribeForm";

const Scribe = () => {
  return ( 
    
    <div className="container">
      <div className="row">
        <div className="col">
          <ImageCropper />
        </div>
        <div className="col">
          <ScribeForm />
        </div>
      </div>

      <div className="row">

        <div className="col-4">Create a Gallery Form</div>

        <div className="col-7">Image and Text Render Save to Gallery dropdown</div>
      </div>
    </div>
  );
};

export default Scribe;

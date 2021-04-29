import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./imagecropper.css";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export const Crop = () => {
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      // Need to pass this data to the back end object creation
      console.log(image);
    }
  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        <input type="file" onChange={onChange} />
        {/* <button className="btn btn-sm btn-secondary"></button> */}
        <br />
        <br />
        <Cropper
          style={{ height: 400, width: "100%" }}
          zoomTo={1}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          guides={true}
          minCropBoxHeight={7}
          minCropBoxWidth={7}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={true} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
      </div>
      <div className="box-container">
        <br />
        <div className="box" style={{ width: "50%", float: "right" }}>
          <p>Preview</p>
          <button
            className="btn btn-sm btn-secondary"
            style={{ float: "right" }}
            onClick={getCropData}
          >
            Crop Image
          </button>
          <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "300px", marginBottom: 10 }}
          />
        </div>
        <div
          className="box"
          style={{ width: "50%", float: "right", height: "300px", marginBottom: 10 }}
        >
          <div>
            <span>Crop</span>
          </div>
          <img style={{ width: "auto", height: "300px" }} src={cropData} alt="cropped" />
        </div>
      </div>
      <br style={{ clear: "both" }} />
    </div>
  );
};

export default Crop;

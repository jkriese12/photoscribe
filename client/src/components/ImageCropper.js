import React from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./styles/imagecropper.css";

export const Crop = ({ image, setImage, setCropData, cropper, setCropper }) => {
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
    }
  };
  const rotate = () => {
    cropper.rotate(90);
  };
  return (
    <div>
      <div style={{ width: "100%" }}>
        <input type="file" accept="image/jpeg" onChange={onChange} />
        {/* <button className="btn btn-sm btn-secondary"></button> */}
        <br />
        <br />
        <Cropper
          style={{ height: 290, width: "100%" }}
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
          <div
            className="img-preview"
            style={{ width: "65%", float: "left", height: "185px", marginBottom: 10 }}
          />
        </div>

        <div className="box-buttons">
          <button
            className="btn btn-sm btn-secondary"
            style={{ float: "left" }}
            onClick={getCropData}
          >
            Crop Image
          </button>
          <br />
          <button
            className="btn btn-sm btn-secondary"
            style={{ float: "left" }}
            onClick={rotate}
          >
            Rotate Image
          </button>
        </div>

        {/* <div className="box" style={{ width: "50%", float: "right", height: "300px", marginBottom: 10, padding: 10 }}>
        <div>
          <span>Cropped Image</span>
        </div>
        <img style={{ width: "auto", height: "300px", padding: 15 }} src={cropData} alt="cropped" />
      </div> */}
      </div>
      <br style={{ clear: "both" }} />
    </div>
  );
};

export default Crop;

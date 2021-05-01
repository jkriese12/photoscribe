import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

import "./styles/GalleryCardText.css";

const GalleryCardText = () => {
  const [details, setDetails] = useState({
    dateTaken: "",
    photoLocation: "",
    synopsis: "",
    albumName: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createPost(details));
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="FormControlInput1" className="form-label">
            Photo Year
          </label>
          <input
            type="email"
            className="form-control"
            id="FormControlInput1"
            onChange={(e) => setDetails({ ...details, dateTaken: e.target.value })}
            value={details.dateTaken}
          />
        </div>
        <div>
          <label htmlFor="FormControlInput2" className="form-label">
            Photo Location
          </label>
          <input
            type="email"
            className="form-control"
            id="FormControlInput2"
            onChange={(e) => setDetails({ ...details, photoLocation: e.target.value })}
            value={details.photoLocation}
          />
        </div>
        <div>
          <label htmlFor="FormControlTextarea1" className="form-label">
            Photo Details
          </label>
          <textarea
            className="form-control"
            id="FormControlTextarea1"
            rows="8"
            onChange={(e) => setDetails({ ...details, synopsis: e.target.value })}
            value={details.synopsis}
          ></textarea>
        </div>
      </form>
      <br />

      <button type="submit" className="btn btn-secondary btn-sm" onClick={submitHandler}>
        Add Text{" "}
      </button>
    </div>
  );
};

export default GalleryCardText;

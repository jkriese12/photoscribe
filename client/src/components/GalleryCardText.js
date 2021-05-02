import React from "react";
import "./styles/GalleryCardText.css";

const GalleryCardText = ({ details, setDetails }) => {
  return (
    <div className="form-container">
      <form>
        <div>
          <label htmlFor="FormControlInput1" className="form-label">
            Photo Year
          </label>
          <input
            type="number"
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
            rows="9"
            onChange={(e) => setDetails({ ...details, synopsis: e.target.value })}
            value={details.synopsis}
          ></textarea>
        </div>
      </form>
      <br />
    </div>
  );
};

export default GalleryCardText;

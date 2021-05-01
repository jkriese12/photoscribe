import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

const GalleryList = () => {
  const [details, setDetails] = useState({
    name: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="gallery">Gallery List:</label>
        {/* <input
          // value={props.search}
          // onChange={this.props.handleInputChange}
          name="gallery"
        /> */}
        <datalist id="gallery">
          {/* {props.gallery.map((gallery) => (
            <option value={gallery} key={gallery} />
          ))} */}
          <option value="test" />
        </datalist>
      </div>
    </form>
  );
};

export default GalleryList;

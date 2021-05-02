import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles/CreateGalleryList.css";

const CreateGalleryList = (props) => {
  const [galleryName, setGalleryName] = useState({
    name: "",
  });

  const posts = useSelector((state) => state.posts);

  const galleryArray = [{ name: "test" }];

  // const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    galleryArray.push(galleryName);
    console.log(galleryArray);
  };

  return (
    <div>
      <form className="create-name" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="gallery-name">Create a Gallery:</label>
          <br />
          <input
            type="name"
            placeholder="Name"
            className="form-group"
            onChange={(e) => setGalleryName({ name: e.target.value })}
            value={galleryName.name}
          />
        </div>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-sm btn-secondary"
        >
          Create
        </button>
      </form>
      <div>{galleryName.name}</div>
      <div>
        {posts.map((data) => (
          <div key={data._id}>
            {data.photos.map((arrayData) => (
              <div key={arrayData._id}>{arrayData.albumName}</div>
            ))}
            <img src={data.selectedFile} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default CreateGalleryList;
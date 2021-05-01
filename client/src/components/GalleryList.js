import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import { useDispatch } from "react-redux";
const GalleryList = ({ details, setDetails }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="gallery">Gallery List:</label>

        <select
          id="gallery"
          onChange={(e) => setDetails({ ...details, albumName: e.currentTarget.value })}
        >
          <option></option>
          {posts.map((data) =>
            data.photos.map((arrayData) => (
              <option key={arrayData._id}>{arrayData.albumName}</option>
            ))
          )}
        </select>
      </div>
    </form>
  );
};

export default GalleryList;

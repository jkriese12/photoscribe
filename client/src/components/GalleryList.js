import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";

const GalleryList = ({ details, setDetails }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts);
  const unique = [...new Set(posts.map((a) => a.albumName))];
  console.log(posts);
  console.log(unique);

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="gallery">Gallery List:</label>

        <select
          id="gallery"
          onChange={(e) => setDetails({ ...details, albumName: e.currentTarget.value })}
        >
          <option></option>
          {unique.map((data) => (
            <option>{data}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default GalleryList;

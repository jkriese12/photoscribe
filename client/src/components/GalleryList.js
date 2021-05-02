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

  return (
    <form>
      <label>Choose your Gallery</label>
      <select
        id="gallery"
        class="custom-select"
        onChange={(e) => setDetails({ ...details, albumName: e.currentTarget.value })}
      >
        <option></option>
        {unique.map((data) => (
          <option>{data}</option>
        ))}
      </select>
    </form>
  );
};

export default GalleryList;

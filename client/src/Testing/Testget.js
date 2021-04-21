import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import { useDispatch } from "react-redux";
const Testget = () => {
  const [photos, setPhotos] = useState([]);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [setPhotos]);

  console.log(posts);
  console.log(posts[1]);
  return (
    <div>
      <h1>Testing...</h1>
      <img src="" />
    </div>
  );
};

export default Testget;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import { useDispatch } from "react-redux";
const Testget = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  console.log(posts[0]);
  return (
    <div>
      <h1>Testing...</h1>
      <img src="" />
    </div>
  );
};

export default Testget;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPostsGallery } from "../actions/posts";
import { useDispatch } from "react-redux";
const TestGalleryGet = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsGallery());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default TestGalleryGet;

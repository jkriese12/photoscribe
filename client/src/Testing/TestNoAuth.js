import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsGalleryNoAuth } from "../actions/posts";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router";
const TestNoAuth = () => {
  const dispatch = useDispatch();
  const { id, albumName } = useParams();
  useEffect(() => {
    dispatch(getPostsGalleryNoAuth(id, albumName));
  }, [dispatch]);
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <div>
      <h1>Test</h1>
      <div>
        {posts.map((data) => (
          <div>
            Year Taken: {data.dateTaken}
            <br />
            Location: {data.photoLocation}
            Synopsis: {data.synopsis} !!!!!!!!!!!!!
          </div>
        ))}
      </div>
      <button>Make your own account</button>
    </div>
  );
};

export default TestNoAuth;

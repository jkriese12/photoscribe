import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsGallery } from "../actions/posts";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router";
const TestGalleryGet = () => {
  const dispatch = useDispatch();
  const { albumName } = useParams();
  useEffect(() => {
    dispatch(getPostsGallery(albumName));
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestGalleryGet;

import React, { useState, useEffect } from "react";
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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(posts);
  console.log(posts[0]);
  const userId = user.result._id;
  return (
    <div>
      <h1>Test</h1>
      <div>
        {posts.map((data) => (
          <div>
            Year Taken: {data.dateTaken}
            <br />
            Location: {data.photoLocation}
            Synopsis: {data.synopsis}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          const url = "localhost:3000/go/" + user.result._id + "/" + posts[0].albumName;
          alert(url);
        }}
      >
        Send to friend
      </button>
    </div>
  );
};

export default TestGalleryGet;

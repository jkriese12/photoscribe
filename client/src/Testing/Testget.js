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

  return (
    <div>
      {posts.map((data) => (
        <div key={data._id}>
          {data.photos.map((arrayData) => (
            <div
              key={arrayData._id}
              onClick={() => {
                alert(arrayData.synopsis);
              }}
            >
              {arrayData.albumName}
            </div>
          ))}
          <img src={data.selectedFile} />
        </div>
      ))}
    </div>
  );
};

export default Testget;

// const data = arrayData;
// let galleryPosts = arrayData
//   .filter(function (gallery) {
//     return gallery.albumName === data.albumName;
//   })
//   .map(function (gallery) {
//     return gallery.synopsis;
//   });
// console.log(arrayData);

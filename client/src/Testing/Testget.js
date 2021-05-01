import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Testget = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts);
  const array = posts.map((item) => item.photos.map((arrayData) => arrayData));
  const arrayU = array
    .map((item) => item.albumName)
    .filter((item, idx) => array.indexOf(item) == idx);
  console.log(posts);
  console.log(array);
  console.log(arrayU);
  // Array.prototype.unique = function () {
  //   return Array.from(new Set(this));
  // };
  // console.log(array.unique());
  return (
    <div>
      {posts.map((data) => (
        <div key={data._id}>
          {data.photos.map((arrayData) => (
            <Link to={"/gets/" + arrayData.albumName} key={arrayData._id}>
              {arrayData.albumName}
            </Link>
          ))}
          <img src={data.selectedFile} />
        </div>
      ))}
    </div>
  );
};

export default Testget;

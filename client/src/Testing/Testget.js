import React from "react";
import { useSelector } from "react-redux";

const Testget = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div>
      {posts.map((data) => (
        <div key={data._id}>
          {data.photos.map((arrayData) => (
            <div key={arrayData._id}>{arrayData.synopsis}</div>
          ))}
          <img src={data.selectedFile} />
        </div>
      ))}
    </div>
  );
};

export default Testget;

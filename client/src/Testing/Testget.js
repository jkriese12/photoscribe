import React from "react";
import { useSelector } from "react-redux";

const Testget = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  console.log(posts[1]);

  return (
    <div>
      {posts.map((data) => (
        <div key={data._id}>
          {data.synopsis}, {data.dateTaken}, {data.photoLocation}{" "}
          <img src={data.selectedFile} />
        </div>
      ))}
    </div>
  );
};

export default Testget;

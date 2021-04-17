// GET COMPONENT
import { useSelector } from "react-redux";

const posts = useSelector((state) => state.posts);
console.log(posts);
// Might get error for CORS. If so refer to vid

// POST COMPONENT (FORM)
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "./actions/posts";
const [postData, setPostData] = useState({
  photoTitle: "",
  peopleInPhoto: "",
  dateTaken: "",
  synopsis: "",
  selectedFile: "",
});
const dispatch = useDispatch();
// OnChange listener for each individual textfield
<input
  onChange={(event) => setPostData({ ...postData, photoTitle: event.target.value })}
  name="photoTitle"
  value={postData.photoTitle}
/>;
<input
  onChange={(event) => setPostData({ ...postData, peopleInPhoto: event.target.value })}
  name="peopleInPhoto"
  value={postData.peopleInPhoto}
/>;
<input
  onChange={(event) => setPostData({ ...postData, dateTaken: event.target.value })}
  name="dateTaken"
  value={postData.dateTaken}
/>;
<input
  onChange={(event) => setPostData({ ...postData, synopsis: event.target.value })}
  name="synopsis"
  value={postData.synopsis}
/>;

<div>
  <FileBase
    type="file"
    multiple={false}
    onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
  />
</div>;
// Button click handler for creating a post
const submitForm = (event) => {
  event.preventDefault;
  dispatch(createPost(postData));
};

const clearForm = () => {};

import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";
const Testpost = () => {
  const [postData, setPostData] = useState({
    photoTitle: "",
    peopleInPhoto: "",
    dateTaken: "",
    synopsis: "",
    photoLocation: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const submitForm = (event) => {
    dispatch(createPost(postData));
  };
  return (
    <div>
      <input
        onChange={(event) => setPostData({ ...postData, photoTitle: event.target.value })}
        name="photoTitle"
        value={postData.photoTitle}
      />
      ;
      <input
        onChange={(event) =>
          setPostData({ ...postData, peopleInPhoto: event.target.value })
        }
        name="peopleInPhoto"
        value={postData.peopleInPhoto}
      />
      ;
      <input
        onChange={(event) => setPostData({ ...postData, dateTaken: event.target.value })}
        name="dateTaken"
        value={postData.dateTaken}
      />
      ;
      <input
        onChange={(event) => setPostData({ ...postData, synopsis: event.target.value })}
        name="synopsis"
        value={postData.synopsis}
      />
      ;
      <input
        onChange={(event) =>
          setPostData({ ...postData, photoLocation: event.target.value })
        }
        name="photoLocation"
        value={postData.photoLocation}
      />
      ;
      <div>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
        />
      </div>
      <button onClick={submitForm}>Submit</button>;
    </div>
  );
};

export default Testpost;

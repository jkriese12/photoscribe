import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsGallery, deletePhoto } from "../actions/posts";
import { useDispatch } from "react-redux";
import emailjs from "emailjs-com";
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
  console.log(user);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2m4srbf",
        "template_fka8dwi",
        e.target,
        "user_sLV4I5uSuLAnTgqv2zukV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

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
            <img src={data.selectedFile} />
            <button
              onClick={() => {
                dispatch(deletePhoto(data._id));
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          const url = "localhost:3000/go/" + user.result._id + "/" + albumName;
          alert(url);
        }}
      >
        Send to friend
      </button>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>URL</label>
        <input
          type="url"
          name="link"
          value={`localhost:3000/go/${user.result._id}/${albumName}`}
        />
        <label>Email</label>
        <input type="email" name="to-email" />
        <label>Message</label>
        <textarea name="user" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default TestGalleryGet;

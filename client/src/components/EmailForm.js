import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
const EmailForm = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const { albumName } = useParams();
  const history = useHistory();
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
          history.push("/gallery/" + albumName);
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong.. Please try again later");
        }
      );
  }
  return (
    <div className="container">
      <form className="form center" onSubmit={sendEmail}>
        <h3 className="text-center">Share Your Gallery!</h3>
          <div className="form-group">
            <input
              type="hidden"
              name="link"
              className="form-control"
              id="email"
              value={`https://photoscribe.herokuapp.com/gallery/${user.result._id}/${albumName}`}
            />
          </div>
          <div className="form-group">
            <input
              type="hidden"
              name="from_name"
              className="form-control"
              id="email"
              value={user.result.name}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="to-email"
              className="form-control"
              placeholder="Enter email"
              id="email"
            />
          </div>

          <div className="form-group">
            <label>Add a note</label>
            <input
              type="text"
              name="user"
              className="form-control"
              placeholder="Add a note"
              id="password"
            />
          </div>
          <br />
          <button type="submit" value="send" className="btn btn-primary btn-block">
            Send
          </button>
      </form>
      <br />
    </div>
  );
};

export default EmailForm;

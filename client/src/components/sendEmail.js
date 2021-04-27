import React from "react";
import emailjs from "emailjs-com";

// import "./ContactUs.css";

export default function ContactUs() {
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
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="text" name="from-name" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="text" name="to-name" />
      <label>Message</label>
      <textarea name="link" />
      <input type="submit" value="Send" />
    </form>
  );
}

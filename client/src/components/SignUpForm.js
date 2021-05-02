import React, { useState } from "react";
import "./styles/SignUpForm.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from "../actions/auth";
const SignUpForm = ({ SignUp, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signUp(details, history));
  };

  return (
    <div className="container">
      <form className="singup-form" onSubmit={submitHandler}>
        <div className="form-inner"></div>
        <h3 className="text-center">Create An Account</h3>
        {/* {(error =! "") ? ( <div className="error">{error}</div>)  : ""}      */}

        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
            value={details.password}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
      <br />
      <div>
        <p className="small">
          Already have an account?<a href="/login"> login</a> here
        </p>
      </div>
      {/* <div>{userName}</div> */}
    </div>
  );
};

export default SignUpForm;

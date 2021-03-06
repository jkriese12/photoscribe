import React, { useState } from "react";
import "./styles/LoginForm.css";
// import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn } from "../actions/auth";
const LoginForm = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  // Setting up hooks for imports
  const dispatch = useDispatch();
  const history = useHistory();
  // Handles submit for non google login
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(details, history));
  };
  // Google functions
  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;

  //   try {
  //     dispatch({ type: "AUTH", data: { result, token } });
  //     history.push("/scribe");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const googleFailure = () => {
  //   console.log("Google Sign In unsuccessful");
  // };

  return (
    <form className="login-form" onSubmit={submitHandler}>
      <h3 className="text-center">Log In</h3>

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

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="customCheck1" />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>

      {/* <GoogleLogin
        clientId="782624440107-ro26a2oc9duk8ok81lkd18kduknln1r2.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Google Sign-In
          </button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      /> */}
    </form>
  );
};

export default LoginForm;

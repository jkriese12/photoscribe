import React, { useState } from "react";
import "./SignUpForm.css";
// import { GoogleLogin } from "react-google-login";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
const SignUpForm = ({ SignUp, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  //   const dispatch = useDispatch();
  //   const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();

    SignUp(details);
  };

  //   const googleSuccess = async (res) => {
  //     const result = res?.profileObj;
  //     const token = res?.tokenId;

  //     try {
  //       dispatch({ type: "AUTH", data: { result, token } });
  //       history.push("/scribe");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const googleFailure = () => {
  //     console.log("Google Sign In unsuccessful");
  //   };
  // Showing correct username logic
  //   const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  //   console.log(user);
  //   useEffect(() => {
  //     const token = user?.token;
  //     //JWT
  //     setUser(JSON.parse(localStorage.getItem("profile")));
  //   });
  return (
    <div class="root-container">
      <form className="form" onSubmit={submitHandler}>
        <div className="form-inner"></div>
        <h3 className="text-center">Create An Account</h3>
        {/* {(error =! "") ? ( <div className="error">{error}</div>)  : ""}      */}

        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter name"
            id="name"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
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
            placeholder="Enter password"
            id="password"
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
            value={details.password}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
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
              Google Sign-in
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        /> */}
        <p className="forgot-password text-right">
          Already have an account? <a href="/login">Sign in here</a>
        </p>
      </form>
      {/* <div>{userName}</div> */}
    </div>
  );
};

export default SignUpForm;

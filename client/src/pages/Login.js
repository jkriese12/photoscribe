import React, { Component } from "react";
import Container from "../components/Container";

export default class Login extends Component {
  render() {
    return (
      <Container style={{ marginTop: 100, marginRight: 300, marginLeft: 300 }}>
        <form id="login">
          <h3 className="text-center">Log In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
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
          <p className="forgot-password text-right">
            Forgot <a href="signup">password?</a>
          </p>
        </form>
      </Container>
    );
  }
}
// import React from "react";
// import Container from "../components/Container";
// import GoogleLogin from "react-google-login";
// import { useDispatch } from "react-redux";
// const Login = () => {
//   const dispatch = useDispatch();
//   const googleSuccess = async (res) => {
//     console.log(res);
//     const result = res?.profileObj;
//     const token = res?.tokenId;

//     try {
//       dispatch({ type: "AUTH", data: { result, token } });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const googleFailure = () => {
//     console.log(" Google Sign in unsuccessful");
//   };

//   return (
//     <Container style={{ marginTop: 100, marginRight: 300, marginLeft: 300 }}>
//       <form id="login">
//         <h3 className="text-center">Log In</h3>

//         <div className="form-group">
//           <label>Email address</label>
//           <input type="email" className="form-control" placeholder="Enter email" />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input type="password" className="form-control" placeholder="Enter password" />
//         </div>

//         <div className="form-group">
//           <div className="custom-control custom-checkbox">
//             <input type="checkbox" className="custom-control-input" id="customCheck1" />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>

//         <button type="submit" className="btn btn-primary btn-block">
//           Submit
//         </button>
//         <GoogleLogin
//           clientId="782624440107-ro26a2oc9duk8ok81lkd18kduknln1r2.apps.googleusercontent.com"
//           render={(renderProps) => (
//             <button
//               type="submit"
//               className="btn btn-primary btn-block"
//               onClick={renderProps.onClick}
//               disabled={renderProps.disabled}
//             >
//               Google Sign in
//             </button>
//           )}
//           onSuccess={googleSuccess}
//           onFailure={googleFailure}
//         />
//         <p className="forgot-password text-right">
//           Forgot <a href="signup">password?</a>
//         </p>
//       </form>
//     </Container>
//   );
// };

// export default Login;

import React, { Component } from "react";
import Container from "../components/Container";

export default class SignUp extends Component {
  render() {
    return (
      <Container style={{ marginTop: 100, marginRight: 300, marginLeft: 300 }}>
        <form id="signup">
          <h3 className="text-center">Sign Up</h3>

          <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>

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

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
      </Container>
    );
  }
}
// import React from "react";
// import Container from "../components/Container";
// const SignUp = () => {
//   return (
//     <Container style={{ marginTop: 100, marginRight: 300, marginLeft: 300 }}>
//       <form id="signup">
//         <h3 className="text-center">Sign Up</h3>

//         <div className="form-group">
//           <label>First name</label>
//           <input type="text" className="form-control" placeholder="First name" required />
//         </div>

//         <div className="form-group">
//           <label>Last name</label>
//           <input type="text" className="form-control" placeholder="Last name" required />
//         </div>

//         <div className="form-group">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary btn-block">
//           Sign Up
//         </button>
//         <p className="forgot-password text-right">
//           Already registered <a href="/login">sign in?</a>
//         </p>
//       </form>
//     </Container>
//   );
// };

// export default SignUp;

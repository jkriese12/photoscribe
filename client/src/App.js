import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";

import Logout from "./components/Logout";
import Landing from "./pages/Landing";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Scribe from "./pages/Scribe";
import Gallery from "./pages/Gallery";
import Testget from "./Testing/Testget";
import TestGalleryGet from "./Testing/TestGalleryGet";
import TestNoAuth from "./Testing/TestNoAuth";

function App() {
  const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("profile") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
  return (
    <div>
      <Router>
        <Navbar />
        <Logout />

        <Switch>
          <>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <AuthenticatedRoute path="/scribe" component={Scribe} />
            <Route path="/get" component={Testget} />
            <AuthenticatedRoute path="/gallery/:albumName" component={Gallery} />

            <Route exact path="/gets/:albumName" component={TestGalleryGet} />
            <Route exact path="/go/:id/:albumName" component={TestNoAuth} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Scribe from "./pages/Scribe";
import Gallery from "./pages/Gallery";
import Directory from "./pages/Directory";
import GalleryShare from "./pages/GalleryShare";
import Email from "./pages/Email";

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
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
  const AlreadyLoggedIn = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("profile") ? (
          <Redirect
            to={{
              pathname: "/scribe",
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <>
            <AlreadyLoggedIn exact path="/" component={Landing} />
            <AlreadyLoggedIn path="/login" component={Login} />
            <AlreadyLoggedIn path="/signup" component={SignUp} />
            <AuthenticatedRoute exact path="/scribe" component={Scribe} />
            <AuthenticatedRoute exact path="/gallery/" component={Scribe} />
            <AuthenticatedRoute exact path="/gallery/:albumName" component={Gallery} />
            <AuthenticatedRoute exact path="/directory" component={Directory} />
            <AuthenticatedRoute exact path="/email/:albumName" component={Email} />
            <Route exact path="/gallery/:id/:albumName" component={GalleryShare} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

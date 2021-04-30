import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Logout from "./components/Logout";
import Landing from "./pages/Landing"

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Scribe from "./pages/Scribe";
import Gallery from "./pages/Gallery";
import Testget from "./Testing/Testget";

import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";

import TestGalleryGet from "./Testing/TestGalleryGet";
import TestNoAuth from "./Testing/TestNoAuth";
import PrivateRoute from "./components/PrivateRoute";

function App() {
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
            <Route path="/scribe" component={Scribe} />

            <Route path="/get" component={Testget} /> 
            <Route path="/gallery" component={Gallery} />

            <PrivateRoute path="/get">
              <Testget />
            </PrivateRoute>
            <Route exact path="/gets/:albumName" component={TestGalleryGet} />
            <Route exact path="/go/:id/:albumName" component={TestNoAuth} />

            <Route path="/gallery" component={Gallery} />

          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

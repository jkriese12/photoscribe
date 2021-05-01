import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing"

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Scribe from "./pages/Scribe";
import Gallery from "./pages/Gallery";
import Directory from "./pages/Directory";
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
        <Switch>
          <>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/scribe" component={Scribe} />

            <Route path="/get" component={Testget} /> 
            <Route path="/gallery" component={Gallery} />
            <Route path="/directory" component={Directory} />
            <PrivateRoute path="/get">
              <Testget />
            </PrivateRoute>
            <Route exact path="/gets/:albumName" component={TestGalleryGet} />
            <Route exact path="/go/:id/:albumName" component={TestNoAuth} />

          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

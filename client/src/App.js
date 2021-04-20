import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Scribe from "./pages/Scribe";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/scribe" component={Scribe} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

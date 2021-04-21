import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginForm from "./components/LoginForm";

import SignUpForm from "./components/SignUpForm";
import Scribe from "./pages/Scribe";
import Testget from "./Testing/Testget";
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
        <Switch>
          <>
            <Route exact path="/" component={LoginForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/scribe" component={Scribe} />
            <Route path="/get" component={Testget} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

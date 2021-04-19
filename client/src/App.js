import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Scribe from "./pages/Scribe";
import Testpost from "./pages/Testpost";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Testget from "./pages/Testget";
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
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/scribe" component={Scribe} />
            <Route path="/test" component={Testpost} />
            <Route path="/testget" component={Testget} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

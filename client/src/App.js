import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Scribe from "./pages/Scribe";
import GalleryTemplate from "./components/GalleryTemplate";
import Testget from "./Testing/Testget";
import TestGalleryGet from "./Testing/TestGalleryGet";
import TestNoAuth from "./Testing/TestNoAuth";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <>
            <Route exact path="/" component={LoginForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/scribe" component={Scribe} />
            <Route path="/get" component={Testget} />
            <Route exact path="/gets/:albumName" component={TestGalleryGet} />
            <Route exact path="/go/:id/:albumName" component={TestNoAuth} />

            <Route path="/gallery" component={GalleryTemplate} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

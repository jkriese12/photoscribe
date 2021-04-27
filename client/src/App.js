import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Scribe from "./pages/Scribe";
import GalleryTemplate from "./components/GalleryTemplate";
import Testget from "./Testing/Testget";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Router> 
        <Navbar />
        <Switch>
          <>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/scribe" component={Scribe} />
            <Route path="/get" component={Testget} /> 
            <Route path="/gallery" component={GalleryTemplate} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

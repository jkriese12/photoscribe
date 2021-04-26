import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
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
            <Route exact path="/" component={LoginForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/scribe" component={Scribe} />
            <Route path="/get" component={Testget} /> 
            <Route path="/gallery" component={GalleryTemplate} />
            <Route path="/landing" component={LandingPage} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

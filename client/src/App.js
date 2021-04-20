import React from "react";
// estlint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Scribe from "./pages/Scribe";

function App() {
  return (
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
  );
}

export default App;

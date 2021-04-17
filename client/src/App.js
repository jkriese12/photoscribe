import React from "react"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";


function App() {
  return (
    <div> 
      <Router> 
        <Switch>
          <> 
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} /> 
          <Route path="/signup" component={SignUp} /> 
          </>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;

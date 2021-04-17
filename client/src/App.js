import React from "react"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"; 
import Scribe from "./pages/Scribe";

function App() {
  return (
    <div> 
      <Router> 
        <Switch>
          <> 
          <Route exact path="/" component={Landing} />
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

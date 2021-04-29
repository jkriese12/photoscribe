import React, { useState } from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <Route
      {...rest}
      render={() => {
        return user === true ? children : <Redirect to="/scribe" />;
      }}
    />
  );
};

export default PrivateRoute;

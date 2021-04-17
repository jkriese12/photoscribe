import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);
  return (
    <div>
      <h1>Photoscribe... Coming soon</h1>
    </div>
  );
}

export default App;

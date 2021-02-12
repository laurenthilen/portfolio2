import React from "react";
import { Route } from "react-router-dom";
import Projects from "./components/Projects";
import Project from "./components/Project";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Route exact path="/" component={Projects} />
      <Route exact path="/projects/:id" component={Project} />
    </div>
  );
}

export default App;

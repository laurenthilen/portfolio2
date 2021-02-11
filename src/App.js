import React from "react";
import { Route } from "react-router-dom";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Route exact path="/" component={Projects} />
      <Route exact path="/projects/:id" component={Project} />

      <Footer />
    </div>
  );
}

export default App;

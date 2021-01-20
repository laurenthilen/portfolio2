import { Route } from "react-router-dom";
import projects from "./data/projects";
import Projects from "./components/Projects";
import Project from "./components/Project";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Projects projects={projects} />
      </Route>
      <Route path="/projects/:id" component={Project} />

      <div className="blurr-box-container">
        <footer className="blurr-box">
          <h1>Apps go here</h1>
        </footer>
      </div>
    </div>
  );
}

export default App;

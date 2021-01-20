import projects from "./data/projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lauren Emick</h1>
      </header>

      <div className="projects-container">
        {
          projects.map(project => {
            return (
              <div className="project">
                <img className="project-img" src={project.imgURL} alt={project.name} />
                <p>{project.name}</p>
              </div>
            )
          })
        }
      </div>

      <div className="blurr-box-container">
        <footer className="blurr-box">
          <h1>Apps go here</h1>
        </footer>
      </div>
    </div>
  );
}

export default App;

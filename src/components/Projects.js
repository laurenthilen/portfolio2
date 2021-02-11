import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const Projects = () => {

    return (
        <div className="projects-container">
            {
                projects.map(project => (
                    <Link className="project-link" key={project.id} to={`/projects/${project.id}`} target="_blank">
                        <div className="project-icon">
                            <img className="project-img" src={project.imgURL} alt={project.name} />
                            <p className="project-name">{project.name}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Projects;
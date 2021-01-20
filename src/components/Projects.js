import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const Projects = () => {

    return (
        <div className="projects-container">
        {
            projects.map(project => (
                <Link key={project.id} to={`/projects/${project.id}`}>
                    <div className="project">
                        <img className="project-img" src={project.imgURL} alt={project.name} />
                        <p>{project.name}</p>
                    </div>
                </Link>
            ))
        }
        </div>
    );
};

export default Projects;
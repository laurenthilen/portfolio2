import React from "react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import Footer from "./Footer";

const Projects = () => {

    return (
        <div>
            <div className="projects-container">
                {
                    projects.map(project => (
                        <Link className="project-link" key={project.id} to={`/projects/${project.id}`}>
                            <div className="project-icon">
                                <img className="projects-img" src={project.imgURL} alt={project.name} />
                                <p className="projects-name">{project.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
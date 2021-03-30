import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";

const Project = () => {
    const { id } = useParams();
    const project = projects.filter(p => JSON.stringify(p.id) === id);

    return (
        <div>
            {
                <Link className="project-link" to={"/"}>
                    <FontAwesomeIcon style={{ margin:"30px 0 0 30px" }} icon={faChevronLeft} size="2x" />
                </Link>
            }
            <div className="project-container">
                {
                    project.map(project => (
                        <div className="project">
                            <img className="project-img" src={project.imgURL} alt={project.name} />
                            <div className="project-content">
                                <h2>{project.name}</h2>
                                <p>{project.languages}</p>
                                <p>{project.description}</p>
                                <div className="project-btns">
                                    <Button href={project.websiteURL} target="_blank" rel="noreferrer">
                                        Website
                                    </Button>
                                    <Button href={project.repo} target="_blank" rel="noreferrer">
                                        Repo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Project;
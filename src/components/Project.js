import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";

const Project = () => {
    const { id } = useParams();
    const project = projects.filter(p => JSON.stringify(p.id) === id);
    console.log(project)

    return (
        <div>
        {
            project.map(project => (
                <div>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                </div>
            ))
        }
        </div>
    );
};

export default Project;
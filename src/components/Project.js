import React from 'react';
import { projects } from '../data';


// Here we are importing a CSS file as a dependency
import '../styles/Project.css';

function Project() {
  return (
    <div id='projects'>
    {projects.map((project) => (
      <div id="projectCard">
          <h1>
              {project.title}
            </h1>
            <h2>
              {project.subtitle}
            </h2>
            <a href={`${project.deployLink}`} target="_blank">Deployed App</a>
            <a href={`${project.gitLink}`} target= "_blink">GitHub Repo</a>
            <img
            alt="gallery"
            src={project.image}
          />
            <p>{project.description}</p>
        </div>
    ))}
  </div>
  );
}

export default Project;

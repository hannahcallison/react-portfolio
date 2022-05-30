import React from 'react';
import { projects } from '../data';


// Here we are importing a CSS file as a dependency
import '../styles/Project.css';

function Project() {
  return (
    <div id='projects'>
      {projects.map((project) => (
        <div id="projectCard">
          <img
            alt="gallery"
            src={project.image}
          />
          <div class='projectTitle'>
          <h1>
            {project.title}
          </h1>
          <h2>
            {project.subtitle}
          </h2>
          </div>
          <div class='projectLink'>
          <a href={`${project.gitLink}`} target="_blink"><img src={require('../assets/github.png')} width='30' height='30'></img></a>
          <br></br>
          <a href={`${project.deployLink}`} target="_blank"><img src={require('../assets/rocket.png')} width='60' height='60'></img></a>
          </div>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Project;

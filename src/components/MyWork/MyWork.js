import React from 'react';
import { projects } from '../../data';


// Here we are importing a CSS file as a dependency
import '../MyWork/MyWork.css';

function Project() {
  return (
    <div id='projects'>
      {projects.map((project) => (
        <div id="projectCard">
          <img
            src={project.image}
            alt="project screenshots"
          />
          <div className='projectTitle'>
          <h1>
            {project.title}
          </h1>
          <h2>
            {project.subtitle}
          </h2>
          </div>
          <div className='projectLink'>
          <a href={`${project.gitLink}`} target="_blank" rel="noreferrer"><img src='../assets/github.png' alt="" width='30' height='30'></img></a>
          <br></br>
          <a href={`${project.deployLink}`} target="_blank"  rel="noreferrer"><img src='..//assets/rocket.png' alt="" width='60' height='60'></img></a>
          </div>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Project;

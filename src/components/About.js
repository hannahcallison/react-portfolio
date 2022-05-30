import React from 'react';

// Here we are importing a CSS file as a dependency
import '../styles/About.css';

function About() {
  return (
    <section id='about'>
      <div id='profPic'>
        <img src={require('../assets/profilepic.png')} alt='Hannah Callison Profile Picture' />
      </div>
      <div id='profAbout'>
        <p>A passionate biologist with a newfound love for coding. Hoping one day to combine forces and make a positive impact on the biotech industry.
          Currently, working in hospitality as an experienced Wine Educator with a demonstrated history in the restaurant industry. Skilled in People Management, Communication, Teamwork, Customer Interaction, and Team Management. Strong operations professional with a Bachelor's degree focused in Biology/Biological Sciences from Arizona State University.
        </p>
        <a href="#projects">My Work</a>
        <a href="#contact">Contact Me</a>
      </div>
    </section>
  );
}

export default About;
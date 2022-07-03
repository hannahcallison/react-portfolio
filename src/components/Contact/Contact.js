import React from "react";
// Here we are importing a CSS file as a dependency
import '../Contact/Contact.css';

function Contact () {
    return (
      <nav className="contact">
        <a href="tel:+4152941148">415.294.1148</a>
        <a href="mailto:hgcallison7@gmail.com">hgcallison7@gmail.com</a>
        <a href="https://github.com/hannahcallison" target="_blank" rel="noreferrer">GitHub</a>
        <a href="#projects">My Work</a>
        <a href="https://www.linkedin.com/in/hannahcallison" target="_blank" rel="noreferrer">LinkedIn</a>
        <a id='resume' href="../assets/HCResume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    );
  }
  
  export default Contact;


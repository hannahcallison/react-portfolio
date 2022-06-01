import React from 'react';

// Here we are importing a CSS file as a dependency
import '../Footer/Footer.css';

function Footer() {
    return (
      <nav className='footer' id="contact">
        <a href="tel:+4152941148">415.294.1148</a>
        <a href="mailto:hgcallison7@gmail.com">hgcallison7@gmail.com</a>
        <a href="https://github.com/hannahcallison" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/hannahcallison" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="../assets/HCRes.pdf" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    );
  }
  
  export default Footer;
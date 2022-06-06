import React from "react";
// Here we are importing a CSS file as a dependency
import '../ContactForm/ContactForm.css';

function ContactForm() {
  return (
    <div className="contactContainer" id="contactMe">
      <form>
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" placeholder="Your last name.." />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email.." />

        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Say hi!" />

        <button id="contactBtn" type="submit">Send</button>
      </form>
    </div>
  )
};

export default ContactForm;

import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About'
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
import ContactForm from './components/ContactForm/ContactForm';

import './styles/App.css';


function App() {

  return (
    <div className="App">
      <Header />
      <Contact />
      <About />
      <MyWork />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

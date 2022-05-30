import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer'

import './styles/App.css';


function App() {
  return (
    <main>
      <Header />
      <Contact />
      {/* <Navigation /> */}
      <About />
      <Project />
      <Footer />
    </main>
  );
}

export default App;

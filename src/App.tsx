import React from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
    <Home />
    <Navbar />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;

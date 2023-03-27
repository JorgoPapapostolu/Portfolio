import React from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
    <Home />
    <Navbar />
    <About />
    <Contact />
    </div>
  );
}

export default App;

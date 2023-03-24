import React from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';



function App() {
  return (
    <div className="App">
    <Home />
    <Navbar />
    <About />
    </div>
  );
}

export default App;

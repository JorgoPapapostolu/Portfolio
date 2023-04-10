import React from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
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

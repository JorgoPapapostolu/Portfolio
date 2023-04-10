import React, { useRef } from 'react';
import Logo from '../img/Logo.png';

export default function Navbar() {
  const homeRef = useRef<HTMLLIElement>(null);
  const aboutRef = useRef<HTMLLIElement>(null);
  const projectsRef = useRef<HTMLLIElement>(null);
  const contactRef = useRef<HTMLLIElement>(null);

  const handleScrollToRef = (ref: React.RefObject<HTMLLIElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navigation-bar">
      <img src={Logo} alt="Logo" className='navigationLogo'/>
      <ul className="navigationList">
        <li
          className="navigation navigation--active"
          id="nav-home"
          onClick={() => handleScrollToRef(homeRef)}
          ref={homeRef}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className="navigation"
          id="nav-about"
          onClick={() => handleScrollToRef(aboutRef)}
          ref={aboutRef}
        >
          <a href="#about">Info</a>
        </li>
        <li
          className="navigation"
          id="nav-projects"
          onClick={() => handleScrollToRef(projectsRef)}
          ref={projectsRef}
        >
          <a href="#projects">Projekte</a>
        </li>
        <li
          className="navigation"
          id="nav-contact"
          onClick={() => handleScrollToRef(contactRef)}
          ref={contactRef}
        >
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}

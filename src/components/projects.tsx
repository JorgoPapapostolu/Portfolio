import React, { useState } from "react";
import StartPage from "../img/projects/Start.jpg";
import MainPage from "../img/projects/Main-Page.jpg";

export default function Projects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 2) % 2);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
  };

  return (
    <div className="projects" id="projects">
      <div className="hidden">
        <h2 className="projects-heading">PROJEKTE</h2>
        <div className="slideshow-container">
          <div className="image-container">
            <div className="slide">
              <img
                className="mySlides"
                src={currentSlide === 0 ? StartPage : MainPage}
                alt={currentSlide === 0 ? "StartPage" : "MainPage"}
              />
              <button className="prev-button" onClick={prevSlide}>
                &#10094;
              </button>
              <button className="next-button" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>

          <div className="text-container">
            <p className="bigTextDowntown">
              Wir wollen mit unserer App „
              <span className="highlightDowntown">downtown</span>“ einen
              geschützten Raum erschaffen, der durch einen Video-Chat sowie
              eigenem Profil und Text-Chat, selbstständiges Verabreden für
              Menschen mit Trisomie 21 möglich macht.
            </p>
            <p>
              Unser Projekt wird in Zukunft von einem Verein genutzt
              werden. In der Applikation soll es den rund fünfzehn Mitgliedern
              aus Bonn und den über vierzig entfernt lebenden
              Korrespondenten:innen möglich gemacht werden, sich in einem
              geschützten Raum zu verabreden, auszutauschen und eigene Kontakte
              auch über digitale Medien pflegen zu können. 
              <br /> <br />
              <span className="highlightDowntown">Um die App zu erkunden, verwenden Sie bitte folgendene Anmeldedaten: 
              </span><br /> <br />
              <span className="highlightDowntown">Email:</span> downtown-test@gmail.com <br />
              <span className="highlightDowntown">Password:</span> downtown
            </p>
            <a
              href="https://frontend-downtown.vercel.app/"
              className="downtown-button"
              target="_blank"
              rel="noreferrer"
            >
              Zur Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

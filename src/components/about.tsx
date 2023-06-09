import portrait from "../img/portrait.png";
import javascript from "../img/techstack/javascript.png";
import css from "../img/techstack/css.png";
import express from "../img/techstack/express.png";
import git from "../img/techstack/git.png";
import htmllogo from "../img/techstack/htmllogo.png";
import mongo from "../img/techstack/mongo.png";
import node from "../img/techstack/node.png";
import postgresql from "../img/techstack/postgresql.png";
import react from "../img/techstack/react.png";
import sql from "../img/techstack/sql.png";
import typescript from "../img/techstack/typescript.png";
import PDF from "../img/Lebenslauf.pdf";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="hidden">
        <h2 className="about-heading">ÜBER MICH</h2>
        <div className="about-content">
          <div className="profile">
            <img src={portrait} alt="portrait" className="portrait" />
            <p className="profile-description">
              Ich habe mich entschlossen, meinen Karriereweg zu ändern und
              meiner Leidenschaft für die Softwareentwicklung zu folgen. Dafür
              habe ich einen sicheren Job in der Automobilbranche gekündigt und
              habe Zeit und Geld in eine umfassende Weiterbildung zum Full-Stack
              Web & App Developer investiert.
              <br />
              <br />
              Durch diese Investition in meine berufliche Zukunft möchte ich
              meine Fähigkeiten erweitern und mich auf neue Möglichkeiten im
              Bereich der Softwareentwicklung vorbereiten.
              <br />
              <a href={PDF} download="Lebenslauf.pdf" className="download-button">
              CV ANSEHEN
            </a>
            </p>
          </div>
          <div className="skills">
            <div className="skills-row delayedFour fade-inFour">
              <div className="skillitem hidden">
                <img src={htmllogo} alt="html" />
                <div className="skill-name">HTML</div>
              </div>
              <div className="skillitem hidden">
                <img src={css} alt="css" />
                <div className="skill-name">CSS</div>
              </div>
              <div className="skillitem hidden">
                <img src={git} alt="git" />
                <div className="skill-name">GIT</div>
              </div>
            </div>

            <div className="skills-row delayedFive fade-inFive">
              <div className="skillitem hidden">
                <img src={javascript} alt="javascript" />
                <div className="skill-name">JAVASCRIPT</div>
              </div>
              {/* <div className="skillitem hidden">
                <img src={typescript} alt="typescript" />
                <div className="skill-name">TYPESCRIPT</div>
              </div> */}
              <div className="skillitem hidden">
                <img src={react} alt="react" />
                <div className="skill-name">REACT</div>
              </div>
              <div className="skillitem hidden">
                <img src={node} alt="nodeJS" />
                <div className="skill-name">NODE.JS</div>
              </div>
              <div className="skillitem hidden">
                <img src={express} alt="express" />
                <div className="skill-name">EXPRESS.JS</div>
              </div>
            </div>

            <div className="skills-row delayedSix fade-inSix">
              <div className="skillitem hidden">
                <img src={sql} alt="sql" />
                <div className="skill-name">SQL</div>
              </div>
              <div className="skillitem hidden">
                <img src={mongo} alt="mongo" />
                <div className="skill-name">MONGODB</div>
              </div>
              <div className="skillitem hidden">
                <img src={postgresql} alt="postgresql" />
                <div className="skill-name">POSTGRESQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

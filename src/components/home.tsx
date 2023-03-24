import LogoGIF from "../img/Logo.gif";

export default function Home() {
  return (
    <div className="hero">
      <div className="heading">
        <div className="font-link">
          <p className="drop-in">
            Hello, I'm <span>Jorgos</span>.
          </p>
          <img src={LogoGIF} alt="signature" className="drop-in-2 delayed" />
        </div>
        <a href="#about" className="aboutLink">
          <div className="mehrButton">Find out more</div>
        </a>
      </div>
    </div>
  );
}

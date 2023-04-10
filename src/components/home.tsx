import LogoGIF from "../img/Logo.gif";

export default function Home() {
  return (
    <div className="hero" id="home">
      <div className="heading">
        <div className="font-link">
          <p className="drop-in">
            Hallo, ich bin <span>Jorgos</span>.
          </p>
          <img src={LogoGIF} alt="signature" className="drop-in-2 delayed" />
        </div>
        <a href="#about" className="aboutLink">
          <div className="mehrButton">Mehr erfahren</div>
        </a>
      </div>
    </div>
  );
}

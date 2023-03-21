export default function Navbar() {
    return(
<nav className="navigation-bar">
  <ul className="navigationList">
    <li className="navigation navigation--active" id="nav-home">
      <a href="/">Home</a>
    </li>
    <li className="navigation" id="nav-about">
      <a href="#about">About</a>
    </li>
    <li className="navigation" id="nav-projects">
      <a href="#projects">Projects</a>
    </li>
    <li className="navigation" id="nav-contact">
      <a href="#contact">Contact</a>
    </li>
  </ul>
</nav>
    )
}
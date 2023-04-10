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
  return (
    <div className="projects" id="projects">
      <div className="hidden">
        <h2 className="projects-heading">PROJECTS</h2>
      </div>
    </div>
  );
}

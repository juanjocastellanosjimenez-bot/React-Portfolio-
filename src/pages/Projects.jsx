import { projects } from "../data.js";
import Img from "../components/Img.jsx";

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <Img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p><strong>My role:</strong> {project.role}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

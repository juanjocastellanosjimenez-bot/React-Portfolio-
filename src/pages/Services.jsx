import { services } from "../data.js";
import Img from "../components/Img.jsx";

export default function Services() {
  return (
    <section>
      <h1>Services</h1>
      <div className="grid">
        {services.map((service) => (
          <article key={service.title} className="card">
            <Img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

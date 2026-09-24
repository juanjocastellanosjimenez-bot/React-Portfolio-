import { education } from "../data.js";

export default function Education() {
  return (
    <section>
      <h1>Education</h1>
      <ol className="timeline">
        {education.map((item) => (
          <li key={item.school}>
            <h2>{item.credential}</h2>
            <p>{item.school}</p>
            <p className="dates">{item.dates}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

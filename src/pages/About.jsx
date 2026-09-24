import { profile } from "../data.js";
import Img from "../components/Img.jsx";

export default function About() {
  return (
    <section className="about">
      <Img className="portrait" src={profile.photo} alt={`Portrait of ${profile.legalName}`} />
      <div>
        <h1>{profile.legalName}</h1>
        <p>{profile.bio}</p>
        <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">Download my resume (PDF)</a>
      </div>
    </section>
  );
}

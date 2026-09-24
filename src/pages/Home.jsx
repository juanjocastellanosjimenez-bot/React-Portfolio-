import { Link, useLocation } from "react-router-dom";
import { profile } from "../data.js";

export default function Home() {
  // The contact form redirects here and passes the sender's name in router state.
  const { state } = useLocation();
  return (
    <section className="hero">
      {state?.sender && <p className="notice" role="status">Thanks {state.sender}, your message was captured.</p>}
      <h1>Hi, I'm {profile.firstName}.<br />{profile.headline}</h1>
      <p className="mission"><strong>Mission:</strong> {profile.mission}</p>
      <div className="actions">
        <Link className="btn" to="/about">Meet me</Link>
        <Link className="btn ghost" to="/projects">See my projects</Link>
      </div>
    </section>
  );
}

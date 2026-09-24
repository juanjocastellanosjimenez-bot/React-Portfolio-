import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../data.js";

const emptyForm = { firstName: "", lastName: "", phone: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const navigate = useNavigate();

  // Keep each field in state as the user types.
  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  // Capture the data (logged for now, no server yet) and redirect to the Home page.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact form submission:", form);
    navigate("/", { state: { sender: form.firstName } });
  };

  return (
    <section className="contact">
      <div className="panel">
        <h1>Contact me</h1>
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
        <p>{profile.location}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>First name<input name="firstName" value={form.firstName} onChange={handleChange} required /></label>
        <label>Last name<input name="lastName" value={form.lastName} onChange={handleChange} required /></label>
        <label>Contact number<input name="phone" type="tel" value={form.phone} onChange={handleChange} /></label>
        <label>Email address<input name="email" type="email" value={form.email} onChange={handleChange} required /></label>
        <label>Message<textarea name="message" rows="5" value={form.message} onChange={handleChange} required /></label>
        <button className="btn" type="submit">Send message</button>
      </form>
    </section>
  );
}

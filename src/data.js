// All portfolio content lives here so pages stay simple.
// TODO: replace every value marked [ ] with your real details from your CV.
export const profile = {
  firstName: "Juan",
  legalName: "Juan [Last Name]",
  headline: "I build web apps and AI tools.",
  mission: "Turn ideas into clear, useful software, and keep learning while I ship it.",
  bio: "I am a Software Engineering – AI student at Centennial College in Toronto. I was born in Colombia and speak English and Spanish. I like building websites, working with data, and I love soccer.",
  photo: "/images/profile.jpg",
  resume: "/resume/Juan_Resume.pdf",
  email: "[your.email@example.com]",
  phone: "[(000) 000-0000]",
  location: "Toronto, Ontario, Canada",
};

export const projects = [
  { title: "Sabor Colombiano", image: "/images/sabor-colombiano.jpg",
    role: "Solo developer for COMP125 web development.",
    outcome: "A multi-page Colombian restaurant site with jQuery, AJAX search, a GIPHY API feed, Cypress tests and a drag-and-drop jigsaw puzzle." },
  { title: "ZeroWaste Bites", image: "/images/zerowaste-bites.jpg",
    role: "Group member for COMP225 software requirements engineering.",
    outcome: "Specified an AI app that reduces food waste, with UML state and sequence diagrams, use case tables and SRS sections." },
  { title: "AI Portfolio Site", image: "/images/ai-portfolio.jpg",
    role: "Designer and developer for COMP213.",
    outcome: "A multi-page site with Chart.js visualizations and JavaScript demos that simulate AI ideas." },
];

export const education = [
  { school: "Centennial College, Toronto", credential: "Software Engineering – AI [credential name]", dates: "[Start year] to [Expected year]" },
  { school: "[High school name], Colombia", credential: "[High school diploma]", dates: "[Start year] to [End year]" },
];

export const services = [
  { title: "Web development", image: "/images/service-web.jpg", text: "Responsive websites and React apps, built cleanly and tested." },
  { title: "AI and Python projects", image: "/images/service-ai.jpg", text: "Data exploration, small AI demos and Python scripts." },
  { title: "Desktop apps in C#", image: "/images/service-desktop.jpg", text: "Windows Forms tools built with object-oriented design." },
  { title: "Linux and network setup", image: "/images/service-linux.jpg", text: "Raspberry Pi servers, SSH, file sharing and firewall rules." },
];

const skills = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/html5.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/css3.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/tailwindcss.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/bootstrap.svg" },
  { name: "JavaScript (ES6+)", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/javascript.svg" },
  { name: "jQuery", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/jquery.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg" },
  { name: "Vite", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/vite.svg" },
  { name: "Node.js", logo: "https://tse1.mm.bing.net/th?id=OIP.LJtM3-xO2hKLEyuu0BSotgHaC8&pid=Api&P=0&h=180" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/express.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/php.svg" },
  { name: "REST APIs", logo: "https://static.vecteezy.com/system/resources/previews/007/607/460/non_2x/api-icon-design-illustration-free-vector.jpg" },
  { name: "JSON Server", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/json.svg" },
  { name: "WebSockets", logo: "https://tse1.mm.bing.net/th?id=OIP.3HHPvqjSjQM7eJATq_QCOgHaHa&pid=Api&P=0&h=180" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mysql.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/postgresql.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mongodb.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/firebase.svg" },
  { name: "Puppeteer", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/puppeteer.svg" },
  { name: "C (Algorithms, Data Structures)", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/c.svg" },
  { name: "UML", logo: "https://tse4.mm.bing.net/th?id=OIP.u2itAc25IbiWDOvqmBv-4QHaHa&pid=Api&P=0&h=180" },
  { name: "NPM", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/npm.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/git.svg" },
  { name: "Apache", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/apache.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/typescript.svg" },
  { name: "JWT", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/jsonwebtokens.svg" },
  { name: "Bcrypt", logo: "https://tse1.mm.bing.net/th?id=OIP.z7S9hZDYhxk208RoTNvPGQAAAA&pid=Api&P=0&h=180" }

];

const skillsContainer = document.getElementById("skills-container");

skills.forEach((skill) => {
  const skillCard = document.createElement("div");
  skillCard.classList.add("skill-card");

  const skillLogo = document.createElement("img");
  skillLogo.src = skill.logo;
  skillLogo.alt = `${skill.name} logo`;
  skillLogo.classList.add("skill-logo");

  const skillName = document.createElement("div");
  skillName.classList.add("skill-name");
  skillName.innerText = skill.name;

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = `${skill.name} - A powerful technology in modern web development.`;

  skillCard.appendChild(skillLogo);
  skillCard.appendChild(skillName);
  skillCard.appendChild(tooltip);

  skillsContainer.appendChild(skillCard);
});

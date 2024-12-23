const skillGroups = [
  {
    groupName: "Basics",
    skills: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/html5.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/css3.svg" },
    ]
  },
  {
    groupName: "UI Libraries",
    skills: [
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/tailwindcss.svg" },
      { name: "Bootstrap CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/bootstrap.svg" },
      { name: "Shadcn UI", logo: "https://tse4.mm.bing.net/th?id=OIP.uzZT_Gwd2PH7Mkz5Q_VcUgAAAA&pid=Api&P=0&h=180" },
      { name: "Daizy UI", logo: "https://skillhub.gallerycdn.vsassets.io/extensions/skillhub/daisy-ui-latest-snippets/0.0.1/1691390254091/Microsoft.VisualStudio.Services.Icons.Default" },
    ]
  },
  {
    groupName: "UX Scripting",
    skills: [
      { name: "JavaScript (ES6+)", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/javascript.svg" },
      { name: "jQuery", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/jquery.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/typescript.svg" },
    ]
  },
  {
    groupName: "Frontend Frameworks",
    skills: [
      { name: "React", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg" },
      { name: "Vite", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/vite.svg" },
      { name: "Next", logo: "https://i.pinimg.com/originals/e3/82/52/e3825274a94bafc3f0282cae29c19972.png" },
    ]
  },
  {
    groupName: "Backend Frameworks",
    skills: [
      { name: "Node.js", logo: "https://www.svgrepo.com/show/314392/node.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/express.svg" },
      { name: "Django", logo: "https://tse2.mm.bing.net/th?id=OIP.ln0AOuaHUxqg1TEizXifOAHaHa&pid=Api&P=0&h=180" },
    ]
  },
  {
    groupName: "Databases",
    skills: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mysql.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/postgresql.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mongodb.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/firebase.svg" },
      { name: "Cassandra", logo: "https://static.cdnlogo.com/logos/c/63/cassandra.svg" },
    ]
  },
  {
    groupName: "Others",
    skills: [
      { name: "REST APIs", logo: "https://static.vecteezy.com/system/resources/previews/007/607/460/non_2x/api-icon-design-illustration-free-vector.jpg" },
      { name: "JSON Server", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/json.svg" },
      { name: "NPM", logo: "https://tse3.mm.bing.net/th?id=OIP.0zsBtC1UjIg9gR2ZZ0WxxAAAAA&pid=Api&P=0&h=180" },
      { name: "JSX", logo: "https://tse4.mm.bing.net/th?id=OIP.pY9LH293rwDdeW0_kWwGjgHaHa&pid=Api&P=0&h=180" },
      { name: "JSON", logo: "https://cdn-icons-png.flaticon.com/512/136/136443.png" },
      { name: "Redux", logo: "https://tse1.mm.bing.net/th?id=OIP.4rKN-lg10i5F2bx_dqttoAHaHa&pid=Api&P=0&h=180" },
      { name: "Zustand", logo: "https://img.stackshare.io/service/11559/zustand.png" },
    ]
  },
  {
    groupName: "Version Controlling",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/git.svg" },
      { name: "GitHub", logo: "https://tse1.mm.bing.net/th?id=OIP.Vn8Aa5ypdPND2xyceZIAdAHaHS&pid=Api&P=0&h=180" },
    ]
  },
  {
    groupName: "Tools & Security",
    skills: [
      { name: "JWT", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/jsonwebtokens.svg" },
      { name: "Bcrypt", logo: "https://tse1.mm.bing.net/th?id=OIP.z7S9hZDYhxk208RoTNvPGQAAAA&pid=Api&P=0&h=180" },
    ]
  },
  {
    groupName: "Web Scraping and Automation",
    skills: [
      { name: "Puppeteer", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/puppeteer.svg" },
      ]
  },
  
];

const skillsContainer = document.getElementById("skills-container");

skillGroups.forEach(group => {
  const groupContainer = document.createElement("div");
  groupContainer.classList.add("skill-group");

  const groupTitle = document.createElement("h3");
  groupTitle.innerText = group.groupName;
  groupTitle.classList.add("group-title");

  const skillsList = document.createElement("div");
  skillsList.classList.add("skills-list");

  group.skills.forEach(skill => {
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

    skillsList.appendChild(skillCard);
  });

  groupContainer.appendChild(groupTitle);
  groupContainer.appendChild(skillsList);

  skillsContainer.appendChild(groupContainer);
});

const skillGroups = [

  {
    groupName: "Frontend",
    skills: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/html5.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/css3.svg" },
      { name: "Bootstrap CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/bootstrap.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/tailwindcss.svg" },
      { name: "JavaScript (ES6+)", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/javascript.svg" },
      { name: "jQuery", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/jquery.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg" },
      { name: "Shadcn UI", logo: "https://tse4.mm.bing.net/th?id=OIP.uzZT_Gwd2PH7Mkz5Q_VcUgAAAA&pid=Api&P=0&h=180" },
      { name: "Daizy UI", logo: "https://skillhub.gallerycdn.vsassets.io/extensions/skillhub/daisy-ui-latest-snippets/0.0.1/1691390254091/Microsoft.VisualStudio.Services.Icons.Default" },
      { name: "Vite", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/vite.svg" },
      { name: "Flowbite UI", logo: "https://flowbite.s3.amazonaws.com/brand/logo-light/mark/flowbite-logo.png" },
      { name: "Zustand", logo: "https://img.stackshare.io/service/11559/zustand.png" },
      { name: "Redux", logo: "https://tse1.mm.bing.net/th?id=OIP.4rKN-lg10i5F2bx_dqttoAHaHa&pid=Api&P=0&h=180" },
      { name: "Next", logo: "https://i.pinimg.com/originals/e3/82/52/e3825274a94bafc3f0282cae29c19972.png" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/typescript.svg" },
    ]
  },
  {
    groupName: "Backend",
    skills: [
      { name: "Node.js", logo: "https://www.svgrepo.com/show/314392/node.svg" },
      { name: "REST APIs", logo: "https://static.vecteezy.com/system/resources/previews/007/607/460/non_2x/api-icon-design-illustration-free-vector.jpg" },
      { name: "JSON Server", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/json.svg" },
      { name: "JWT", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/jsonwebtokens.svg" },
      { name: "Bcrypt", logo: "https://tse1.mm.bing.net/th?id=OIP.z7S9hZDYhxk208RoTNvPGQAAAA&pid=Api&P=0&h=180" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/express.svg" },
     ]
  },
  {
    groupName: "Databases",
    skills: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mysql.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/firebase.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mongodb.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/postgresql.svg" },
      { name: "Supabase", logo: "https://companieslogo.com/img/orig/supabase-554aca1c.png?t=1701239800&download=true" },
      { name: "MariaDB", logo: "https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_black-transparent.png" },
      { name: "Cassandra", logo: "https://static.cdnlogo.com/logos/c/63/cassandra.svg" },

    ]
  },
  {
    groupName: "Others",
    skills: [
     { name: "NPM", logo: "https://tse3.mm.bing.net/th?id=OIP.0zsBtC1UjIg9gR2ZZ0WxxAAAAA&pid=Api&P=0&h=180" },
      { name: "JSX", logo: "https://tse4.mm.bing.net/th?id=OIP.pY9LH293rwDdeW0_kWwGjgHaHa&pid=Api&P=0&h=180" },
      { name: "JSON", logo: "https://cdn-icons-png.flaticon.com/512/136/136443.png" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/git.svg" },
      { name: "GitHub", logo: "https://tse1.mm.bing.net/th?id=OIP.Vn8Aa5ypdPND2xyceZIAdAHaHS&pid=Api&P=0&h=180" },
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
    tooltip.innerText = `${skill.name} - Internet Technology.`;

    skillCard.appendChild(skillLogo);
    skillCard.appendChild(skillName);
    skillCard.appendChild(tooltip);

    skillsList.appendChild(skillCard);
  });

  groupContainer.appendChild(groupTitle);
  groupContainer.appendChild(skillsList);

  skillsContainer.appendChild(groupContainer);
});

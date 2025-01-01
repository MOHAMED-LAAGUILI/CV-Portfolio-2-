const skillGroups = [
  {
    groupName: "Frontend",
    skills: [
      { name: "HTML", logo: "https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg" },
      { name: "Bootstrap CSS", logo: "https://github.com/devicons/devicon/raw/master/icons/bootstrap/bootstrap-original.svg" },
      { name: "Tailwind CSS", logo: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" },
      { name: "JavaScript (ES6+)", logo: "https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg" },
      { name: "jQuery", logo: "https://github.com/devicons/devicon/raw/master/icons/jquery/jquery-original.svg" },
      { name: "React", logo: "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg" },
      { name: "Shadcn UI", logo: "https://tse4.mm.bing.net/th?id=OIP.uzZT_Gwd2PH7Mkz5Q_VcUgAAAA&pid=Api&P=0&h=180" }, // Placeholder for now
      { name: "Daizy UI", logo: "https://skillhub.gallerycdn.vsassets.io/extensions/skillhub/daisy-ui-latest-snippets/0.0.1/1691390254091/Microsoft.VisualStudio.Services.Icons.Default" }, // Placeholder for now
      { name: "Vite", logo: "https://tse2.mm.bing.net/th?id=OIP.wf8ivLs6ExVeBxZ7R26nHwAAAA&pid=Api&P=0&h=180" },
      { name: "Flowbite UI", logo: "https://flowbite.s3.amazonaws.com/brand/logo-light/mark/flowbite-logo.png" },
      { name: "Zustand", logo: "https://img.stackshare.io/service/11559/zustand.png" },
      { name: "Redux", logo: "https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg" },
      { name: "Next.js", logo: "https://github.com/devicons/devicon/raw/master/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg" },
      { name: "ThreeJS", logo: "https://tse1.mm.bing.net/th?id=OIP.nHP10Bd6QZpoDWY1A5uHkAHaHd&pid=Api&P=0&h=180" },
    ],
  },
  {
    groupName: "Backend",
    skills: [
      { name: "Node.js", logo: "https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-original.svg" },
      { name: "REST APIs", logo: "https://cdn-icons-png.flaticon.com/512/7983/7983502.png" }, // Placeholder for now
      { name: "JSON Server", logo: "https://github.com/devicons/devicon/raw/master/icons/json/json-original.svg" },
      { name: "JWT", logo: "https://jwt.io/img/pic_logo.svg" },
      { name: "Bcrypt", logo: "https://stackjava.com/wp-content/uploads/2018/03/bcrypt-logo.jpg" }, // Placeholder for now
      { name: "Express.js", logo: "https://github.com/devicons/devicon/raw/master/icons/express/express-original.svg" },
    ],
  },
  {
    groupName: "Databases",
    skills: [
      { name: "MySQL", logo: "https://github.com/devicons/devicon/raw/master/icons/mysql/mysql-original.svg" },
      { name: "Firebase", logo: "https://github.com/devicons/devicon/raw/master/icons/firebase/firebase-plain.svg" },
      { name: "MongoDB", logo: "https://github.com/devicons/devicon/raw/master/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", logo: "https://cf.appdrag.com/dashboard-openvm-clo-b2d42c/uploads/supabase-TAiY.png" }, // Placeholder for now
      { name: "MariaDB", logo: "https://github.com/devicons/devicon/raw/master/icons/mariadb/mariadb-original.svg" },
      { name: "Cassandra", logo: "https://tse2.mm.bing.net/th?id=OIP.mhPclQfU64GpU6wOsql98AHaE9&pid=Api&P=0&h=180" }, // Placeholder for now
    ],
  },
  {
    groupName: "Stack",
    skills: [
      { name: "Basic", logo: "https://thumbs.dreamstime.com/b/vector-collection-web-development-shield-signs-html-css-javascript-isolated-icons-white-background-38571884.jpg" }, // Placeholder for now
      { name: "MERN", logo: "https://www.tridentspark.com/wp-content/uploads/2023/07/mern-stack-icon-1.png" }, // Placeholder for now
      { name: "PERN", logo: "https://repository-images.githubusercontent.com/141744474/1ce68080-769e-11ea-8f62-d743905db95e" }, // Placeholder for now
    ],
  },
  {
    groupName: "Others",
    skills: [
      { name: "NPM", logo: "https://github.com/devicons/devicon/raw/master/icons/npm/npm-original-wordmark.svg" },
      { name: "YARN", logo: "https://tse3.mm.bing.net/th?id=OIP.m9u-T43srIyuGcR0r8wlAAHaHa&pid=Api&P=0&h=180" },
      { name: "JSX", logo: "https://tse2.mm.bing.net/th?id=OIP.lBy7OnDqF59ZMsvRi75ULwAAAA&pid=Api&P=0&h=180" }, // Placeholder for now
      { name: "JSON", logo: "https://github.com/devicons/devicon/raw/master/icons/json/json-original.svg" },
      { name: "Git", logo: "https://github.com/devicons/devicon/raw/master/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg" },
      { name: "Puppeteer", logo: "https://www.svgrepo.com/show/354228/puppeteer.svg" }, // Placeholder for now
      { name: "Docker", logo: "https://github.com/devicons/devicon/raw/master/icons/docker/docker-original.svg" },
      { name: "Canva", logo: "https://pnghq.com/wp-content/uploads/canvas-logo-png-png-transparent-elements-download-38292-768x768.png" },
      { name: "Figma", logo: "https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0-1080x1080.png" },
    ],
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

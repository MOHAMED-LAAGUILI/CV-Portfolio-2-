// Data arrays for education, experience, and certificates
const educationData = [
  {
    title: "Online Education",
    year: "2023 - Present - Ksar El Kebir",
    description: "Continuously learning diving deep into the Computer Engineering & development",
  },
  {
    title: "MIAGE Private School",
    year: "2021/2023 - Ksar El Kebir",
    description: "Computer Engineering Diploma in Software and Intelligent Systems",
  },
  {
    title: "Ahmad Errachidi HighSchool",
    year: "2020/2021 - Ksar El Kebir",
    description: "Bac Science Physics",
  },
  {
    title: "El Mansour Dahbi HighSchool",
    year: "2019/2020 - Ksar El Kebir",
    description: "Bac Lettre",
  }
];

const experienceData = [
  {
    title: "Full-stack Web Developer – Freelance",
    period: "02/2024 - Present – Ksar El Kebir",
    tasks: [
      "Developed responsive and scalable web applications using React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS and much more.",
    ],
  },
  {
    title: "IT Assistant Internship",
    period: "10/2023 – 01/2024 – Tangier",
    tasks: [
      "Collaborated with the IT team to develop official company websites and address employees' technical issues.",
    ],
  },
  
  {
    title: "Internship 2 at the Municipality – IT department",
    period: "06/2023 – 07/2023 – Ksar El Kebir",
    tasks: [
      "Created a website for managing car fleets using HTML, CSS, JavaScript, PHP, and MySQL.",
    ],
  },
  {
    title: "Internship 1 at the Municipality – IT department",
    period: "07/2022 – 08/2022 – Ksar El Kebir",
    tasks: [
      "Created a desktop application for managing employee contacts using VB.NET, MySQL Server, and Excel.",
    ],
  },
];

const certificatesData = [
  "Command Line in Terminal (Open Classrooms)",
  "Setup Development Environment (Open Classrooms)",
  "Front-End Development (Open Classrooms)",
  "Bootstrap Framework (Open Classrooms)",
  "SQL Fundamentals (Great Learning)",
  "Prix D'excellence - Meilleur Projet (MIAGE)",
  "Prix D'excellence - Meilleur Candidat (MIAGE)",
];

// Utility function for rendering sections
const createSectionItem = (container, htmlContent) => {
  const div = document.createElement("div");
  div.classList.add("resume-item");
  div.innerHTML = htmlContent;
  container.appendChild(div);
};

// Render education section
const renderEducation = () => {
  const educationSection = document.getElementById("education-section");
  educationData.forEach((item) => {
    const content = `
      <h4>${item.title}</h4>
      <h5 class="resume-year">${item.year}</h5>
      <p>${item.description}</p>
    `;
    createSectionItem(educationSection, content);
  });
};

// Render experience section
const renderExperience = () => {
  const experienceSection = document.getElementById("experience-section");
  experienceData.forEach((item) => {
    const content = `
      <h4>${item.title}</h4>
      <h5>${item.period}</h5>
      <ul>
        ${item.tasks.map((task) => `<li>${task}</li>`).join("")}
      </ul>
    `;
    createSectionItem(experienceSection, content);
  });
};

// Render certificates section
const renderCertificates = () => {
  const certificatesSection = document.getElementById("certificates-section");
  const ul = document.createElement("ul");
  certificatesData.forEach((cert) => {
    const li = document.createElement("li");
    li.textContent = cert;
    ul.appendChild(li);
  });
  certificatesSection.appendChild(ul);
};

// Call functions to render content
renderEducation();
renderExperience();
renderCertificates();

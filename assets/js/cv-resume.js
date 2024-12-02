const educationData = [
  {
    title: "El Mansour Dahbi HighSchool – Ksar El Kebir",
    year: "2019 - 2020",
    description: "Bac Lettre",
  },
  {
    title: " Ahmad Errachidi HighSchool – Ksar El Kebir",
    year: "2020 - 2021",
    description: " Bac Sience Physics",
  },
  {
    title: " MIAGE Private School – Ksar El Kebir",
    year: "2021 - 2023",
    description: " Computer engineering Diploma in software and intelligent systems",
  },
];

const experienceData = [
    {
        title: "Internship 1 at the Municipality – IT department",
        period: " 07/2022 – 08/2022 – ksar el kebir",
        tasks: [
          `I created a desktop application for managing employee contacts. with Vb.net
            and mysqlServer and Excel`,
          // `other task`,
          // `other task`,
        ],
      },
      {
        title: " Internship 2 at the Municipality – IT department",
        period: "06/2023 – 07/2023 – ksar el kebir",
        tasks: [
          ` I created a website for managing car fleets with HTML-CSS-JS-PHP-MySql`,
          // `other task`,
          // `other task`,
        ],
      },
      {
        title: "IT Assistant  Internship",
        period: "10/2023 – 01/2024 – Tangier",
        tasks: [
          `Collaborated with the IT team to oversee the development of official company websites
            and address employees' technical needs and issues`,
          // `other task`,
          // `other task`,
        ],
      },    
  {
    title: "Full-stack developer – Freelance ",
    period: "02/2024 – 12/2024 – Ksar El kebir",
    tasks: [
      `Developed responsive and scalable web applications using React, Next.js,
        Node.js, Express, MongoDB, Tailwind CSS, and delivering tailored, full
        stack solutions for freelance projects.`,
      // `other task`,
      // `other task`,
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
  "Prix D'excellence - Meilleur Candidat",
];

// Function to render education, experience, and certificates
const renderEducation = () => {
  const educationSection = document.getElementById("education-section");
  educationData.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("resume-item");
    div.innerHTML = `
        <h4>${item.title}</h4>
        <h5>${item.year}</h5>
        <p>${item.description}</p>
      `;
    educationSection.appendChild(div);
  });
};

const renderExperience = () => {
  const experienceSection = document.getElementById("experience-section");
  experienceData.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("resume-item");
    div.innerHTML = `
        <h4>${item.title}</h4>
        <h5>${item.period}</h5>
        <ul>
          ${item.tasks.map((task) => `<li>${task}</li>`).join("")}
        </ul>
      `;
    experienceSection.appendChild(div);
  });
};

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

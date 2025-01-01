// Data arrays for education, experience, and certificates with images for logos
const educationData = [
  {
    title: "Online Education",
    year: "2023 – Present | 🌍 Worldwide",
    description: "Exploring Computer Engineering and Development through continuous learning.",
    logo: "https://img.freepik.com/premium-vector/online-school-logo-learning-logo-design-vector_567288-21.jpg?w=2000" // Add image path here
  },
  {
    title: "MIAGE Private School",
    year: "2021 – 2023 | 🇲🇦 - Ksar El Kebir",
    description: "Earned a Computer Engineering Diploma specializing in Software and Intelligent Systems.",
    logo: "https://groupemiage.net/wp-content/uploads/2017/03/New-MIAGE-Logo-VSimple.png" // Add image path here
  },
  {
    title: "Ahmad Errachidi High School",
    year: "2020 – 2021 | 🇲🇦 - Ksar El Kebir",
    description: "Completed Bac Science Physics with distinction.",
    logo: "https://i.pinimg.com/originals/62/f6/d3/62f6d31b45aa26e8ff54f13d90dfd489.png" // Add image path here
  },
  {
    title: "El Mansour Dahbi High School",
    year: "2019 – 2020 | 🇲🇦 - Ksar El Kebir",
    description: "Completed Bac Letter with academic excellence.",
    logo: "https://i.pinimg.com/originals/62/f6/d3/62f6d31b45aa26e8ff54f13d90dfd489.png" // Add image path here
  },
];

const experienceData = [
  {
    title: "Backend Web Developer – VNB-IT (Internship, Remote)",
    period: "Dec 2024 – Feb 2025 | 🇫🇷 France",
    tasks: [
      "Collaborated with a large startup team to build E-commerce Websites and Learning Management Systems using Node.js, Express, Postgres, React, and CSS.",
    ],
    companyLogo: "https://media.licdn.com/dms/image/v2/D4E0BAQELx8g5Piywaw/company-logo_100_100/company-logo_100_100/0/1719255400025/vnb_it_logo?e=1743638400&v=beta&t=kSSrVs-dmccbihjgoBbH0HroBDqYJpdDLSIXZW_jVMI" // Add image path here
  },
  {
    title: "Full-stack Web Developer – Freelance (Upwork/Fiverr)",
    period: "Feb 2024 – Dec 2024 | 🇲🇦 Ksar El Kebir",
    tasks: [
      "Developed responsive and scalable web applications with React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS.",
    ],
    companyLogo: "https://tse1.mm.bing.net/th?id=OIP.telhc6vYeQKSILP1FqmXAAHaEK&pid=Api&P=0&h=180" // Add image path here
  },
  {
    title: "IT Assistant – System Base (Internship)",
    period: "Oct 2023 – Jan 2024 | 🇲🇦 Tangier",
    tasks: [
      "Contributed to official company website development and resolved technical issues for employees.",
    ],
    companyLogo: "https://media.licdn.com/dms/image/v2/D560BAQGlHPGdYx5rCQ/company-logo_100_100/company-logo_100_100/0/1688081550883?e=1743638400&v=beta&t=gHFhA4kl4lPn3jMiqF252VlB0SIi5VP7eWBxxwkDkZU" // Add image path here
  },
  {
    title: "Municipality IT Department – Internship 2",
    period: "Jun 2023 – Jul 2023 | 🇲🇦 Ksar El Kebir",
    tasks: [
      "Developed a fleet management website using HTML, CSS, JavaScript, PHP, and MySQL.",
    ],
    companyLogo: "https://www.argyrets.com/assets/img/communes/commune_ksar_el_kebir.jpg" // Add image path here
  },
  {
    title: "Municipality IT Department – Internship 1",
    period: "Jul 2022 – Aug 2022 | 🇲🇦 Ksar El Kebir",
    tasks: [
      "Built a desktop application for employee contact management using VB.NET, MySQL Server, and Excel.",
    ],
    companyLogo: "https://www.argyrets.com/assets/img/communes/commune_ksar_el_kebir.jpg" // Add image path here
  },
];

const certificatesData = [
  {
    title: "Command Line in Terminal",
    url: "https://openclassrooms.com",
    logo: "https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180" // Add image path here
  },
  {
    title: "Setup Development Environment",
    url: "https://openclassrooms.com",
    logo: "https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180" // Add image path here
  },
  {
    title: "Front-End Development",
    url: "https://openclassrooms.com",
    logo: "https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180" // Add image path here
  },
  {
    title: "Bootstrap Framework",
    url: "https://openclassrooms.com",
    logo: "https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180" // Add image path here
  },
  {
    title: "SQL Fundamentals",
    url: "https://olympus.mygreatlearning.com",
    logo: "https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180" // Add image path here
  },
  {
    title: "Prix D'excellence – Best Project (MIAGE)",
    url: "https://groupemiage.net",
    logo: "https://groupemiage.net/wp-content/uploads/2017/03/New-MIAGE-Logo-VSimple.png" // Add image path here
  },
  {
    title: "Prix D'excellence – Top Candidate (MIAGE)",
    url: "https://groupemiage.net",
    logo: "https://groupemiage.net/wp-content/uploads/2017/03/New-MIAGE-Logo-VSimple.png" // Add image path here
  },
];

// Utility function to create a structured resume section
const createSectionItem = (container, htmlContent) => {
  const div = document.createElement("div");
  div.classList.add("resume-item");
  div.innerHTML = htmlContent;
  container.appendChild(div);
};

// Render Education Section
const renderEducation = () => {
  const section = document.getElementById("education-section");
  educationData.forEach(({ title, year, description, logo }) => {
    const content = `
      <div class="resume-subsection">
        <img src="${logo}" alt="${title} Logo" class="logo-img-education" />
        <h4>${title}</h4>
        <p class="year">${year}</p>
        <p>${description}</p>
      </div>`;
    createSectionItem(section, content);
  });
};

// Render Experience Section
const renderExperience = () => {
  const section = document.getElementById("experience-section");
  experienceData.forEach(({ title, period, tasks, companyLogo }) => {
    const content = `
      <div class="resume-subsection">
        <img src="${companyLogo}" alt="${title} Logo" class="logo-img-experience" />
        <h4>${title}</h4>
        <p class="year">${period}</p>
        <ul>${tasks.map((task) => `<li>${task}</li>`).join("")}</ul>
      </div>`;
    createSectionItem(section, content);
  });
};

// Render Certificates Section
const renderCertificates = () => {
  const section = document.getElementById("certificates-section");
  const content = `
    <div class="resume-subsection">
      <ul>${certificatesData.map((cert) => `
        <li>
          <a href="${cert.url}" target="_blank">
            <img src="${cert.logo}" alt="${cert.title} Logo" class="logo-img" />
            ${cert.title}
          </a>
        </li>`).join("")}
      </ul>
    </div>`;
  section.innerHTML = content;
};

// Initialize rendering
renderEducation();
renderExperience();
renderCertificates();

// Education data
const educationData = [
  {
    title: "El Mansour Dahbi High School",
    year: "2019 – 2020 | 🇲🇦 - Ksar El Kebir",
    description: "Completed Bac Letter with academic excellence.",
    logo: "https://i.pinimg.com/originals/62/f6/d3/62f6d31b45aa26e8ff54f13d90dfd489.png",
  },
  {
    title: "Ahmad Errachidi High School",
    year: "2020 – 2021 | 🇲🇦 - Ksar El Kebir",
    description: "Completed Bac Science Physics with distinction.",
    logo: "https://i.pinimg.com/originals/62/f6/d3/62f6d31b45aa26e8ff54f13d90dfd489.png",
  },
  {
    title: "MIAGE Private School",
    year: "2021 – 2023 | 🇲🇦 - Ksar El Kebir",
    description: "Earned a Computer Engineering Diploma specializing in Software and Intelligent Systems.",
    logo: "https://groupemiage.net/wp-content/uploads/2017/03/New-MIAGE-Logo-VSimple.png",
  },
];

// Experience data
const experienceData = [
  {
    title: "Municipality IT Department – Internship 1",
    period: "Jul 2022 – Aug 2022 | 🇲🇦 Ksar El Kebir",
    tasks: [
      "Built a desktop application for employee contact management using VB.NET, MySQL Server, and Excel.",
      "Designed an intuitive user interface with CRUD functionalities for efficient data management.",
      "Implemented an automated backup system to prevent data loss.",
      "Created data reports and visualization dashboards to aid in decision-making.",
      "Provided training sessions for employees on using the new contact management system.",
    ],
    companyLogo: "https://www.argyrets.com/assets/img/communes/commune_ksar_el_kebir.jpg",
  },
  {
    title: "Municipality IT Department – Internship 2",
    period: "Jun 2023 – Jul 2023 | 🇲🇦 Ksar El Kebir",
    tasks: [
      "Developed a fleet management website using HTML, CSS, JavaScript, PHP, and MySQL.",
      "Implemented user authentication and role-based access control to secure the system.",
      "Designed and optimized database schemas to handle large-scale fleet data efficiently.",
      "Integrated Google Maps API for real-time tracking of municipal vehicles.",
      "Conducted testing and debugging to ensure a smooth user experience before deployment.",
    ],
    companyLogo: "https://www.argyrets.com/assets/img/communes/commune_ksar_el_kebir.jpg",
  },
  {
    title: "IT Assistant – System Base (Internship)",
    period: "Oct 2023 – Jan 2024 | 🇲🇦 Tangier",
    tasks: [
      "Contributed to official company website development and resolved technical issues for employees.",
      "Assisted in server maintenance and performed troubleshooting for network-related issues.",
      "Configured and optimized software tools to improve workflow efficiency within the company.",
      "Provided technical support to non-technical staff and conducted IT training sessions.",
      "Assisted in migrating company data to cloud storage and implementing cybersecurity best practices.",
    ],
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabyWX0PhD2aOMpJcZYFOpYYpA1IAUunuokg&s",
  },
  {
    title: "Full-stack Web Developer – Freelance (Remote)",
    period: "Feb 2024 – ongoing | 🇲🇦 Kenitra",
    tasks: [
      "Developed responsive and scalable web applications with React, InertiaJS, Laravel, MySQL, and Tailwind CSS.",
      "Implemented RESTful APIs endpoints to optimize data exchange between frontend and backend.",
      "Integrated third-party payment gateways and authentication systems to enhance application security.",
      "Optimized database queries and caching mechanisms to improve performance and scalability.",
      "Collaborated with clients to gather requirements, design UI/UX, and deploy applications to production environments.",
    ],
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztai4h0flpAsLZy8zwgVRzRV8dtan9c3atMzSIKzwTn3kBaioH0BJCjPhKSmX7-CCK7s&usqp=CAU",
  },
];

// Certificates data
const certificatesData = [
  {
    title: "Command Line in Terminal",
    url: "https://openclassrooms.com",
    logo: "https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180",
  },
  {
    title: "Setup Development Environment",
    url: "https://openclassrooms.com",
    logo: "https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180",
  },
  {
    title: "Front-End Development",
    url: "https://openclassrooms.com",
    logo: "https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180",
  },
  {
    title: "Bootstrap Framework",
    url: "https://openclassrooms.com",
    logo: "https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180",
  },
  {
    title: "SQL Fundamentals",
    url: "https://olympus.mygreatlearning.com",
    logo: "https://d9jmtjs5r4cgq.cloudfront.net/images/branding/greatlearning-brand-v1-2.svg",
  },
  {
    title: "Best Final Year Project #1 (MIAGE)",
    url: "https://groupemiage.net",
    logo: "https://groupemiage.net/wp-content/uploads/2017/03/New-MIAGE-Logo-VSimple.png",
  },
  {
    title: "#1 Top Candidate 2021-2023 (MIAGE)",
    url: "https://groupemiage.net",
    logo: "https://groupemiage.net/wp-content/uploads/2017/03/New-MIAGE-Logo-VSimple.png",
  },
];

// Render Education Section
function renderEducation() {
  const educationSection = document.getElementById("education-section");
  educationSection.innerHTML = '';
  
  educationData.forEach((item, index) => {
    const educationItem = document.createElement("div");
    educationItem.classList.add("timeline-item", "fade-in");
    educationItem.style.animationDelay = `${index * 0.2}s`;
    
    educationItem.innerHTML = `
      <div class="timeline-header">
        <img src="${item.logo}" alt="${item.title} Logo" class="timeline-logo" />
        <div class="timeline-content">
          <h4 class="timeline-title">${item.title}</h4>
          <p class="timeline-period"><i class="bi bi-calendar-check"></i> ${item.year}</p>
          <p class="timeline-description">${item.description}</p>
        </div>
      </div>
    `;
    
    educationSection.appendChild(educationItem);
  });
}

// Render Experience Section
function renderExperience() {
  const experienceSection = document.getElementById("experience-section");
  experienceSection.innerHTML = '';
  
  experienceData.forEach((item, index) => {
    const experienceItem = document.createElement("div");
    experienceItem.classList.add("timeline-item", "fade-in");
    experienceItem.style.animationDelay = `${index * 0.2}s`;
    
    const tasksList = item.tasks.map(task => `<li>${task}</li>`).join("");
    
    experienceItem.innerHTML = `
      <div class="timeline-header">
        <img src="${item.companyLogo}" alt="${item.title} Logo" class="timeline-logo" />
        <div class="timeline-content">
          <h4 class="timeline-title">${item.title}</h4>
          <p class="timeline-period"><i class="bi bi-calendar-check"></i> ${item.period}</p>
          <ul class="timeline-tasks">${tasksList}</ul>
        </div>
      </div>
    `;
    
    experienceSection.appendChild(experienceItem);
  });
}

// Render Certificates Section
function renderCertificates() {
  const certificatesSection = document.getElementById("certificates-section");
  certificatesSection.innerHTML = '';
  
  certificatesData.forEach((item, index) => {
    const certificateCard = document.createElement("div");
    certificateCard.classList.add("certificate-card", "fade-in");
    certificateCard.style.animationDelay = `${index * 0.1}s`;
    
    certificateCard.innerHTML = `
      <img src="${item.logo}" alt="${item.title} Logo" />
      <a href="${item.url}" target="_blank" title="${item.title}">${item.title}</a>
    `;
    
    certificatesSection.appendChild(certificateCard);
  });
}

// Intersection Observer for animations
function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
  });
}

// Initialize the resume when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderEducation();
  renderExperience();
  renderCertificates();
  
  // Setup animations with Intersection Observer for better performance
  setupIntersectionObserver();
});
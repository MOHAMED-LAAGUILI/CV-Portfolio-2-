const skills = [
    { name: "HTML - CSS", percentage: 85, icons: ["fa-html5", "fa-css3-alt"], colors: ["#db671a", "#1c5fd4"] },
    { name: "JavaScript (ES6+)", percentage: 70, icons: ["fa-js"], colors: ["#cdc70e"] },
    { name: "React (Vite/Next.js)", percentage: 65, icons: ["fa-react"], colors: ["#4e80d6"] },
    { name: "Node.js (Express)", percentage: 60, icons: ["fa-node-js"], colors: ["#4e80d6"] },
    { name: "Tailwind CSS", percentage: 65, icons: [], colors: [] },
    { name: "PHP", percentage: 50, icons: ["fa-php"], colors: ["#5c60cc"] },
    { name: "MySQL", percentage: 70, icons: ["fas fa-database"], colors: ["#EA8C10"] },
    { name: "MongoDB", percentage: 50, icons: ["fas fa-database"], colors: ["#00684A"] },
    { name: "Web Automation (Puppeteer)", percentage: 40, icons: [], colors: [] },
    { name: "NPM & Git", percentage: 60, icons: ["fa-git", "fa-npm"], colors: ["#f68709", "#d8400e"] },
    { name: "C (Algorithms, Data Structures)", percentage: 50, icons: [], colors: [] },
  ];
  
  const skillsContainer = document.getElementById("skills-container");
  
  skills.forEach((skill, index) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-lg-6";
  
    const progressDiv = document.createElement("div");
    progressDiv.className = "progress";
  
    const skillSpan = document.createElement("span");
    skillSpan.className = "skill";
  
    skill.icons.forEach((icon, idx) => {
      const iconElem = document.createElement("i");
      iconElem.className = `fa-brands ${icon}`;
      iconElem.style.color = skill.colors[idx];
      iconElem.style.fontSize = "30px";
      skillSpan.appendChild(iconElem);
    });
  
    skillSpan.innerHTML += ` ${skill.name} <i class="val">${skill.percentage}%</i>`;
  
    const progressBarWrap = document.createElement("div");
    progressBarWrap.className = "progress-bar-wrap";
  
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuenow", skill.percentage);
    progressBar.setAttribute("aria-valuemin", "0");
    progressBar.setAttribute("aria-valuemax", "100");
    progressBar.style.width = `${skill.percentage}%`;
  
    progressBarWrap.appendChild(progressBar);
    progressDiv.appendChild(skillSpan);
    progressDiv.appendChild(progressBarWrap);
    colDiv.appendChild(progressDiv);
  
    if (index % 2 === 0) {
      // Add a new row for every two items
      const rowDiv = document.createElement("div");
      rowDiv.className = "row skills-content";
      skillsContainer.appendChild(rowDiv);
    }
    skillsContainer.lastElementChild.appendChild(colDiv);
  });
  
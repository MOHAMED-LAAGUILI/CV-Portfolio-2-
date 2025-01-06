const servicesData = [
  {
    title: "Web Development",
    icon: "bxl-chrome",
    color: "#0078ff",
    description: "Beautiful, interactive websites (Front & Back end).",
  },
  {
    title: "Maintenance",
    icon: "bx-cog",
    color: "purple",
    description: "Ensure your site is always up-to-date and running smoothly.",
  },
  {
    title: "SEO",
    icon: "bxl-stripe",
    color: "#343a40",
    description: "Boost your website's visibility with essential SEO.",
  },
  {
    title: "Design",
    icon: "bx-slideshow",
    color: "#e83e8c",
    description: "Logo, branding & other services.",
  },
  {
    title: "Consulting",
    icon: "bx-brain",
    color: "#28a745",
    description: "Expert advice to enhance your project strategies.",
  },
];

const renderServices = () => {
  const servicesSection = document.getElementById("services-section");

  if (!servicesSection) {
    console.error("Error: Element with id 'services-section' not found.");
    return;
  }

  servicesData.forEach((service, index) => {
    const { title, icon, color, description } = service;

    if (!title || !icon || !color || !description) {
      console.warn(`Incomplete service data at index ${index}. Skipping...`);
      return;
    }

    const colDiv = document.createElement("div");
    colDiv.classList.add("col");
    colDiv.setAttribute("data-aos", "zoom-in");
    colDiv.setAttribute("data-aos-delay", `${(index + 1) * 100}`);

    colDiv.innerHTML = `
      <div class="icon-box" style="--primary: ${color};">
        <div class="icon">
          <i class="bx ${icon}"></i>
        </div>
        <h4>${title}</h4>
        <p>${description}</p>
      </div>
    `;

    servicesSection.appendChild(colDiv);
  });
};

renderServices();

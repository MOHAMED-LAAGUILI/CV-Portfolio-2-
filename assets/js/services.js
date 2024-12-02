const servicesData = [
    {
      title: "Web Development",
      icon: "bxl-chrome",
      color: "#dc3545",
      description: "Beautiful, interactive websites (Front & Back end)."
    },
    {
      title: "SEO",
      icon: "bxl-stripe",
      color: "#343a40",
      description: "Boost your website's visibility with essential SEO."
    },
    {
      title: "Design",
      icon: "bx-slideshow",
      color: "#e83e8c",
      description: "Logo, branding, and graphic design services."
    },
    {
      title: "Consulting",
      icon: "bx-brain",
      color: "#28a745",
      description: "Expert advice to enhance your project strategies."
    }
  ];

  // Function to render services
  const renderServices = () => {
    const servicesSection = document.getElementById("services-section");
    servicesData.forEach((service, index) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-lg-3", "col-md-6", "d-flex", "align-items-stretch");
      colDiv.setAttribute("data-aos", "zoom-in");
      colDiv.setAttribute("data-aos-delay", `${(index + 1) * 100}`);
      
      colDiv.innerHTML = `
        <div class="icon-box shadow-sm p-4 rounded-3 text-center transition-transform hover-scale" style="border-left: 5px solid ${service.color};">
          <div class="icon mb-3">
            <i class="bx ${service.icon}" style="font-size: 50px; color: ${service.color};"></i>
          </div>
          <h4><a href="#" class="text-dark">${service.title}</a></h4>
          <p class="text-muted">${service.description}</p>
        </div>
      `;
      
      servicesSection.appendChild(colDiv);
    });
  };

  // Call the renderServices function to populate the services section
  renderServices();
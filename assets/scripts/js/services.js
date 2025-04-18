const servicesData = [
    {
      title: "Web Development",
      icon: "bi bi-browser-chrome",
      color: "#0078ff",
      description: "Beautiful, interactive websites (Front & Back end).",
    },
    {
      title: "Maintenance",
      icon: "bi bi-gear",
      color: "purple",
      description:
        "Ensure your site is always up-to-date and running smoothly.",
    }, 
    {
      title: "SEO",
      icon: "bi bi-google",
      color: "#343a40",
      description: "Boost your website's visibility with essential SEO.",
    },
    {
      title: "Design",
      icon: "bi bi-file-earmark-slides",
      color: "#e83e8c",
      description: "Logo, branding & other services.",
    },
    {
      title: "Consulting",
      icon: "bi bi-people",
      color: "#28a745",
      description: "Expert advice to enhance your project strategies.",
    },
  ],
  renderServices = () => {
    const e = document.getElementById("services-section");
    e &&
      servicesData.forEach((i, t) => {
        const { title: o, icon: n, color: s, description: r } = i;
        if (!(o && n && s && r)) return;
        const c = document.createElement("div");
        c.classList.add("col"),
          c.setAttribute("data-aos", "zoom-in"),
          c.setAttribute("data-aos-delay", "" + 100 * (t + 1)),
          (c.innerHTML = `\n      <div class="icon-box" style="--primary: ${s};">\n        <div class="icon">\n          <i class="bx ${n}"></i>\n        </div>\n        <h4>${o}</h4>\n        <p>${r}</p>\n      </div>\n    `),
          e.appendChild(c);
      });
  };
renderServices();

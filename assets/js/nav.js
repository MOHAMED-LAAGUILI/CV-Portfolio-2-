
  // Define navigation items
  const navItems = [
    { href: "#hero", icon: "./assets/img/favicon.ico", label: "Home", isImage: true },
    { href: "#about", icon: "bx bx-user", label: "About Me", isImage: false },
    { href: "#achievements", icon: "bi bi-trophy", label: "Achievements", isImage: false },
    { href: "#skills", icon: "bi bi-stack", label: "Skills", isImage: false },
    { href: "#resume", icon: "bi bi-file-earmark-arrow-down", label: "CV - Resume", isImage: false },
    { href: "#services", icon: "bx bx-crosshair", label: "Services", isImage: false },
    { href: "#portfolio", icon: "bi bi-window-stack", label: "Portfolios", isImage: false },
    { href: "#testimonials", icon: "bx bx-comment", label: "Others Opinions", isImage: false },
    { href: "#contact", icon: "bi bi-send", label: "Contact Me", isImage: false },
  ];

  // Get the navigation menu element
  const navMenu = document.getElementById("nav-menu");

  // Generate navigation items dynamically
  navItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${item.href}" class="nav-link scrollto">
        ${item.isImage ? `<img src="${item.icon}" class="rounded-pill floating-img" width="48px" alt="${item.label}" />` : `<i class="${item.icon}"></i>`}
        <span>${item.label}</span>
      </a>
    `;
    navMenu.appendChild(li);
  });


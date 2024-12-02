
  // Define navigation items
  const navItems = [
    { href: "#hero", icon: "./assets/img/favicon.ico", label: "Home", isImage: true },
    { href: "#about", icon: "bx bx-user", label: "About Me", isImage: false },
    { href: "#achivements", icon: "bx bx-file-blank", label: "Achivement", isImage: false },
    { href: "#skills", icon: "bx bx-file-blank", label: "Skills", isImage: false },
    { href: "#resume", icon: "bx bx-file-blank", label: "CV - My Resume", isImage: false },
    { href: "#services", icon: "bx bx-crosshair", label: "My Services", isImage: false },
    { href: "#portfolio", icon: "bx bx-crosshair", label: "Portfolios", isImage: false },
    { href: "#testimonials", icon: "bx bx-comment", label: "Other Opinions", isImage: false },
    { href: "#contact", icon: "bx bx-envelope", label: "Contact Me", isImage: false },
  ];

  // Get the navigation menu element
  const navMenu = document.getElementById("nav-menu");

  // Generate navigation items dynamically
  navItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${item.href}" class="nav-link scrollto">
        ${item.isImage ? `<img src="${item.icon}" class="rounded-pill floating-img" width="50px" alt="${item.label}" />` : `<i class="${item.icon}"></i>`}
        <span>${item.label}</span>
      </a>
    `;
    navMenu.appendChild(li);
  });


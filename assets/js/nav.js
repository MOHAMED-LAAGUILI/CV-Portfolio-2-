
  // Define navigation items
  const navItems = [
    { href: "#hero", icon: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/512x512", label: "Home", isImage: true },
    { href: "#about", icon: "bx bx-user", label: "About", isImage: false },
    { href: "#achievements", icon: "bi bi-trophy", label: "Achievements", isImage: false },
    { href: "#skills", icon: "bi bi-stack", label: "Skills", isImage: false },
    { href: "#resume", icon: "bi bi-file-earmark-arrow-down", label: "Resume", isImage: false },
    { href: "#services", icon: "bx bx-crosshair", label: "Services", isImage: false },
    { href: "#portfolio", icon: "bi bi-window-stack", label: "Projects", isImage: false },
    { href: "#testimonials", icon: "bx bx-comment", label: "Testimonials", isImage: false },
    { href: "#contact", icon: "bi bi-send", label: "Contact", isImage: false },
    { href: "404.html", icon: "bi bi-emoji-frown", label: "404 page", isImage: false },

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


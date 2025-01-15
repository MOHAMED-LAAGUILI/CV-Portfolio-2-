
const navItems = [
    {
      href: "#hero",
      icon: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/512x512",
      label: "ML",
      isImage: !0,
    },
    { href: "#about", icon: "bi bi-person-vcard", label: "About", isImage: !1 },
    {
      href: "#achievements",
      icon: "bi bi-trophy",
      label: "Achievements",
      isImage: !1,
    },
    { href: "#skills", icon: "bi bi-stack", label: "Skills", isImage: !1 },
    {
      href: "#resume",
      icon: "bi bi-file-earmark-arrow-down",
      label: "Resume",
      isImage: !1,
    },
    {
      href: "#services",
      icon: "bi bi-crosshair",
      label: "Services",
      isImage: !1,
    },
    {
      href: "#portfolio",
      icon: "bi bi-window-stack",
      label: "Projects",
      isImage: !1,
    },
    {
      href: "#testimonials",
      icon: "bi bi-chat-left-text",
      label: "Testimonials",
      isImage: !1,
    },
    { href: "#contact", icon: "bi bi-send", label: "Contact", isImage: !1 },
    { href: "404.html", icon: "bi bi-emoji-frown", label: "404", isImage: !1 },
  ],
  navMenu = document.getElementById("nav-menu");
navItems.forEach((e) => {
  const i = document.createElement("li");
  (i.innerHTML = `\n    <a href="${e.href}" class="nav-link scrollto">\n      ${
    e.isImage
      ? `<img src="${e.icon}" class="rounded-pill floating-img" width="48px" alt="${e.label}" loading="lazy" title="M logo" style="transform: translateX(-15px);"  aria-label="M logo"/>`
      : `<i class="${e.icon}"></i>`
  }\n      <span>${e.label}</span>\n    </a>\n  `),
    navMenu.appendChild(i);
});
const navLinks = document.querySelectorAll(".nav-link.scrollto");
navLinks.forEach((e) => {
  e.addEventListener("click", function () {
    navLinks.forEach((e) => e.classList.remove("active")),
      this.classList.add("active");
  });
});
const sections = document.querySelectorAll("section"),
  observer = new IntersectionObserver(
    (e) => {
      e.forEach((e) => {
        const i = e.target,
          s = document.querySelector(`.nav-link.scrollto[href="#${i.id}"]`);
        e.isIntersecting
          ? s.classList.add("active")
          : s.classList.remove("active");
      });
    },
    { threshold: 0.5 }
  );
sections.forEach((e) => observer.observe(e));

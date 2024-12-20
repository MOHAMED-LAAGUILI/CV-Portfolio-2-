// socialLinks.js
const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100014521591779",
      className: "facebook shadow",
      iconClass: "bi-facebook",
      target: "_blank",
    },
    {
      href: "https://www.linkedin.com/in/mohamedlaaguili2001/",
      className: "linkedin shadow",
      iconClass: "bi-linkedin",
      target: "_blank",
    },
    {
      href: "https://www.github.com/MOHAMED-LAAGUILI",
      className: "github shadow",
      iconClass: "bi-github",
      target: "_blank",
    },
    {
      href: "#hero",
      className: "codepen shadow",
      iconClass: "fa-brands fa-codepen",
    },
    {
      href: "#hero",
      className: "youtube shadow",
      iconClass: "fa-brands fa-youtube",
    },
    {
      href: "#hero",
      className: "instagram shadow",
      iconClass: "fa-brands fa-instagram",
    },
  ];
  
  const renderSocialLinks = (links, containerId) => {
    const container = document.getElementById(containerId);

    links.forEach(({ href, className, iconClass, target }) => {
      const link = document.createElement("a");
      link.href = href;
      link.className = className;
      if (target) link.target = target;

      const icon = document.createElement("i");
      icon.className = iconClass;

      link.appendChild(icon);
      container.appendChild(link);
    });
  };

  // Call the function to render links
  renderSocialLinks(socialLinks, "social-links-container");
  
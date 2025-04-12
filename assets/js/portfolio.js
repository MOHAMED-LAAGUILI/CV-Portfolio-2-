const portfolioItems = [
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/MERN-Ecommerce-App",
    title: "MERN E-commerce App",
    description: "Full-stack e-commerce site, responsive and complete",
    link: "./404.html",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/MERN-Ecommerce-App",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Express-ChatApp",
    title: "React Express ChatApp",
    description: "Real-time chat app with session support",
    link: "./404.html",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Express-ChatApp",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Redux-Ecommerce-App",
    title: "React Redux E-commerce",
    description: "Enhanced e-commerce with Redux for state management",
    link: "https://react-redux-ecommerce-app-hvhb.vercel.app/",
    demoLink: "<i class='bi bi-eye'></i>",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Redux-Ecommerce-App",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Movies-Api-Sites",
    title: "Movies/Tv Shows Api",
    description: "A Movies/Tv Shows Site to See and find all specs about",
    link: "https://react-movie-tmdb-api-app.vercel.app",
    demoLink: "<i class='bi bi-eye'></i>",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Movie-TMDBApi-App",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-next-clerk-sanity-ecommerce",
    title: "Modern E-commerce Site",
    description: "E-commerce made with next clerk stripe & sanity",
    link: "https://react-next-clerk-sanity-ecommerce.vercel.app",
    demoLink: "<i class='bi bi-eye'></i>",
    githubLink:
      "https://github.com/MOHAMED-LAAGUILI/React-Next-Clerk-Sanity-Ecommerce",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-weather-api",
    title: "Weather App",
    description: "made with react and context api styled with tailwind",
    link: "https://react-weather-api-app-ashy.vercel.app",
    demoLink: "<i class='bi bi-eye'></i>",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/react-weather-api-app",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/storyteller-openai-ts-gpt-script",
    title: "Ai Story Teller",
    description:
      "AI powered with agents streams live interaction uses model gpt-4o to convert words to sketch",
    link: "https://storyteller-openai-ts-gpt-script.vercel.app",
    demoLink: "<i class='bi bi-eye'></i>",
    githubLink:
      "https://github.com/MOHAMED-LAAGUILI/storyteller-openai-ts-gpt-script",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-vite-tailwind-start-template2",
    title: "Business Template for startups",
    description:
      "Business Template for startups made with React and tailwind modern design and enhanced With SEO and PWA",
    link: "https://react-vite-tailwind-start-template2.vercel.app/",
    demoLink: "<i class='bi bi-eye'></i>",
    githubLink:
      "https://github.com/MOHAMED-LAAGUILI/React-Vite-Tailwind-StartTemplate2",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/vite-tailwind-ui-template",
    title: "One UI |UI Template",
    description:
      "One UI provides a comprehensive set of tools and components to help you build beautiful, responsive, and accessible user interfaces.",
    link: "https://one-ui-v2.vercel.app/",
    demoLink: "<i class='bi bi-eye'></i>",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/ONE-UI",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/work-flow-editor",
    title: "Work Flow Editor",
    description:
      "",
    link: "https://work-flow-editor.vercel.app/",
    demoLink: "<i class='bi bi-eye'></i>",
  },
];
function generatePortfolioSection() {
  const t = document.createElement("section");
  (t.id = "portfolio"),
    (t.className = "portfolio section"),
    (t.innerHTML =
      '\n      <div class="container section-title" data-aos="fade-up">\n        <h2>\n          <img src="https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/blob" alt="Blob" class="blob-image" loading="lazy" title="blob gif">\n          Portfolio\n        </h2>\n        <p class="text-muted">A showcase of my Public Personal projects</p>\n      </div>\n      <div class="container">\n        <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200"></div>\n        <span id="my-portfolio-button">\n          <i class="bi bi-window-stack"></i> Other Projects Are Private ...\n        </span>\n      </div>\n    ');
  const e = t.querySelector(".row.isotope-container");
  portfolioItems.forEach(
    ({
      image: t,
      title: i,
      description: o,
      link: a,
      demoLink: s,
      githubLink: n,
    }) => {
      const c = document.createElement("div");
      (c.className = "col-lg-4 col-md-6 portfolio-item isotope-item"),
        (c.innerHTML = `\n        <img src="${t}" class="img-fluid" alt="${i}">\n        <div class="portfolio-info">\n          <h4>${i}</h4>\n          <p>${o}</p>\n          ${
          "Unavailable" !== s
            ? `<a href="${a}" title="Live Demo" class="details-link" target="_blank">${s}</a>`
            : ""
        }\n          <a href="${n}" title="GitHub Repository" class="details-link" target="_blank">\n            <i class="bi bi-github"></i>\n          </a>\n        </div>\n      `),
        e.appendChild(c);
    }
  );
  const i = document.querySelector("#portfolio-container");
  i ? i.appendChild(t) : document.body.appendChild(t);
}
generatePortfolioSection();

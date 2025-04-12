const portfolioItems = [
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/MERN-Ecommerce-App",
    title: "MERN E-commerce App",
    description: "Full-stack e-commerce site, responsive and complete",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/MERN-Ecommerce-App",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Express-ChatApp",
    title: "React Express ChatApp",
    description: "Real-time chat app with session support",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Express-ChatApp",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Redux-Ecommerce-App",
    title: "React Redux E-commerce",
    description: "Enhanced e-commerce with Redux for state management",
    demoLink: "https://react-redux-ecommerce-app-hvhb.vercel.app/",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Redux-Ecommerce-App",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Movies-Api-Sites",
    title: "Movies/Tv Shows Api",
    description: "A Movies/Tv Shows Site to See and find all specs about",
    demoLink: "https://react-movie-tmdb-api-app.vercel.app",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Movie-TMDBApi-App",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-next-clerk-sanity-ecommerce",
    title: "Modern E-commerce Site",
    description: "E-commerce made with next clerk stripe & sanity",
    demoLink: "https://react-next-clerk-sanity-ecommerce.vercel.app",
    githubLink:
      "https://github.com/MOHAMED-LAAGUILI/React-Next-Clerk-Sanity-Ecommerce",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-weather-api",
    title: "Weather App",
    description: "made with react and context api styled with tailwind",
    demoLink: "https://react-weather-api-app-ashy.vercel.app",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/react-weather-api-app",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/storyteller-openai-ts-gpt-script",
    title: "Ai Story Teller",
    description:
      "AI powered with agents streams live interaction uses model gpt-4o to convert words to sketch",
    demoLink: "https://storyteller-openai-ts-gpt-script.vercel.app",
    githubLink:
      "https://github.com/MOHAMED-LAAGUILI/storyteller-openai-ts-gpt-script",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-vite-tailwind-start-template2",
    title: "Business Template for startups",
    description:
      "Business Template for startups made with React and tailwind modern design and enhanced With SEO and PWA",
    demoLink: "https://react-vite-tailwind-start-template2.vercel.app/",
    githubLink:
      "https://github.com/MOHAMED-LAAGUILI/React-Vite-Tailwind-StartTemplate2",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/vite-tailwind-ui-template",
    title: "One UI |UI Template",
    description:
      "One UI provides a comprehensive set of tools and components to help you build beautiful, responsive, and accessible user interfaces.",
    demoLink: "https://one-ui-v2.vercel.app/",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/ONE-UI",
  },
  {
    image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/work-flow-editor",
    title: "Work Flow Editor",
    description: "A React + Tailwind visual editor for building and managing dynamic workflows using React Flow.",
    demoLink: "https://work-flow-editor.vercel.app/",
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
      image: img,
      title,
      description,
      demoLink,
      githubLink,
    }) => {
      const item = document.createElement("div");
      item.className = "col-lg-4 col-md-6 portfolio-item isotope-item";
  
      item.innerHTML = `
        <img src="${img}" class="img-fluid" alt="${title}">
        <div class="portfolio-info">
          <h4>${title}</h4>
          <p>${description}</p>
          <div class="portfolio-links">
            ${demoLink ? `<a href="${demoLink}" title="Live Demo" class="details-link" target="_blank"> <i class='bi bi-eye'></i> </a>` : ""}
            ${githubLink ? `<a href="${githubLink}" title="GitHub Repository" class="details-link" target="_blank"><i class="bi bi-github"></i></a>` : ""}
          </div>
        </div>
      `;
  
      e.appendChild(item);
    }
  );
  
  const i = document.querySelector("#portfolio-container");
  i ? i.appendChild(t) : document.body.appendChild(t);
}
generatePortfolioSection();

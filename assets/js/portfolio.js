
  const portfolioItems = [
    {
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/MERN-Ecommerce-App",
      title: "MERN E-commerce App",
      description: "Full-stack e-commerce site, responsive and complete",
      link: "./404.html",
      demoLink: "Unavailable",
      githubLink: "https://github.com/MOHAMED-LAAGUILI/MERN-Ecommerce-App",

    },
    {
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Express-ChatApp",
      title: "React Express ChatApp",
      description: "Real-time chat app with session support",
      link: "./404.html",
      demoLink: "Unavailable",
      githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Express-ChatApp",
    },
    {
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Redux-Ecommerce-App",
      title: "React Redux E-commerce",
      description: "Enhanced e-commerce with Redux for state management",
      link: "https://react-redux-ecommerce-app-hvhb.vercel.app/",
      demoLink: "<i class='bi bi-eye'></i>",
      githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Redux-Ecommerce-App",
    },
    {
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/Next-Shadcn-AdminDashboard",
      title: "Next Dashboard",
      description: "Admin Dashboard, built with ShadCn UI & Next",
      link: "https://next-shadcn-admin-dashboard-ochre.vercel.app/",
      demoLink: "<i class='bi bi-eye'></i>",
      githubLink: "https://github.com/MOHAMED-LAAGUILI/Next-Shadcn-AdminDashboard",
    },
    {
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Movies-Api-Sites",
      title: "Movies/Tv Shows Api",
      description: "A Movies/Tv Shows Site to See and find all specs about",
      link: "https://react-movie-tmdb-api-app.vercel.app",
      demoLink: "<i class='bi bi-eye'></i>",
      githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Movie-TMDBApi-App",
    },
    {
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-next-clerk-sanity-ecommerce",
      title: "Modern Responsive E-commerce Site",
      description: "E-commerce made with react next clerk stripe and sanity",
      link: "https://react-next-clerk-sanity-ecommerce.vercel.app",
      demoLink: "<i class='bi bi-eye'></i>",
      githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Next-Clerk-Sanity-Ecommerce",
    },
    {
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-weather-api",
      title: "Weather App",
      description: "made with react and context api styled with tailwind",
      link: "https://react-weather-api-app-ashy.vercel.app",
      demoLink: "<i class='bi bi-eye'></i>",
      githubLink: "https://github.com/MOHAMED-LAAGUILI/react-weather-api-app",
    },
    {
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/storyteller-openai-ts-gpt-script",
      title: "Ai Story Teller",
      description: "An ai powered with agent streams live interaction uses model gpt-4o to convert ur words to a story with text and images",
      link: "https://storyteller-openai-ts-gpt-script.vercel.app",
      demoLink: "<i class='bi bi-eye'></i>",
      githubLink: "https://github.com/MOHAMED-LAAGUILI/storyteller-openai-ts-gpt-script",
    },
    
    
  ];


  const portfolioContainer = document.getElementById("portfolio-items");

  portfolioItems.forEach(item => {
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add("col");
  
    portfolioItem.innerHTML = `
      <div class="portfolio-item shadow rounded-4 overflow-hidden position-relative">
        <img src="${item.image}" alt="${item.title}" class="img-fluid">
        <div class="overlay d-flex flex-column align-items-center justify-content-center text-center p-3">
          <h3 class="text-light">${item.title}</h3>
          <p class="text-light mb-3">${item.description}</p>
          <div class="d-flex gap-3">
            <a href="${item.link}" target="_blank" class="btn btn-outline-light fw-bold rounded-pill px-4">
              ${item.demoLink}
            </a>
            <a href="${item.githubLink}" target="_blank" class="btn btn-outline-light fw-bold rounded-pill px-4">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  
    portfolioContainer.appendChild(portfolioItem);
  });
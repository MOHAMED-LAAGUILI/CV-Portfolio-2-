
  const portfolioItems = [
    {
      image: "./assets/img/PortfolioProjects/MERN-Ecommerce-App.png",
      title: "MERN Ecommerce App",
      description: "Full-stack ecommerce site, responsive and complete",
      link: "#",
      demoLink: "Oops Unavailable Online",
    },
    {
      image: "./assets/img/PortfolioProjects/React-Express-ChatApp.png",
      title: "React Express ChatApp",
      description: "Real-time chat app with session support",
      link: "#",
      demoLink: "Oops Unavailable Online",
    },
    {
      image: "/assets/img/PortfolioProjects/React-Portfolio.png",
      title: "React Portfolio",
      description: "Professional portfolio built with React",
      link: "https://react-portfolio-dusky-theta.vercel.app/",
      demoLink: "See Live Demo",
    },
    {
      image: "/assets/img/PortfolioProjects/React-Redux-Ecommerce-App.png",
      title: "React Redux Ecommerce",
      description: "Enhanced ecommerce with Redux for state management",
      link: "https://react-redux-ecommerce-app-hvhb.vercel.app/",
      demoLink: "See Live Demo",
    },
    {
      image: "/assets/img/PortfolioProjects/Next-Shadcn-AdminDashboard.png",
      title: "Next Dashboard",
      description: "Admin Dashboard, built with Shadcn & Next",
      link: "https://next-shadcn-admin-dashboard-ochre.vercel.app/",
      demoLink: "See Live Demo",
    },
    {
      image: "/assets/img/PortfolioProjects/React-Movies-Api-Sites.png",
      title: "Movies/Tv Shows Api",
      description: "A Movies/Tv Shows Site to See and find all specs about",
      link: "https://react-movie-tmdb-api-app.vercel.app",
      demoLink: "See Live Demo",
    },
    {
      image: "/assets/img/PortfolioProjects/react-next-clerk-sanity-ecommerce-767896446.vercel.app.png",
      title: "Modern Responsive E-commerce Site",
      description: "E-commerce made with react next clerck stripe and sanity",
      link: "https://react-next-clerk-sanity-ecommerce.vercel.app",
      demoLink: "See Live Demo",
    },
    {
      image: "/assets/img/PortfolioProjects/react-weather-api-app-dusky.vercel.app.png",
      title: "Weather App",
      description: "made with react and context api styled with tailwind",
      link: "https://react-weather-api-app-ashy.vercel.app",
      demoLink: "See Live Demo",
    },
    {
      image: "/assets/img/PortfolioProjects/storyteller-openai-ts-gpt-script.vercel.app.png",
      title: "Ai Story Teller",
      description: "An ai powered with agent streams live interaction uses model gpt-4o to convert ur words to a story with text and images",
      link: "https://storyteller-openai-ts-gpt-script.vercel.app",
      demoLink: "See Live Demo",
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
          <a href="${item.link}" target="_blank" class="btn btn-outline-light fw-bold rounded-pill px-4">${item.demoLink}</a>
        </div>
      </div>
    `;

    portfolioContainer.appendChild(portfolioItem);
  });
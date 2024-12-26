document.addEventListener("DOMContentLoaded", () => {
  // Restricted folders
  const restrictedFolders = ["assets"];

  // Define valid routes (ensure they're consistently formatted)
  const validRoutes = [
    "#",
    "#hero",
    "#about",
    "#services",
    "#contact",
    "#achievements",
    "#skills",
    "#resume",
    "#portfolio",
    "#testimonials",
    "#footer",
    "/index.html#hero",
    "/index.html#about",
    "/index.html#services",
    "/index.html#contact",
    "/index.html#achievements",
    "/index.html#skills",
    "/index.html#resume",
    "/index.html#portfolio",
    "/index.html#testimonials",
    "/index.html#footer",
    "/",
    "/index.html",
    "/index.html#",
    "/404.html",
  ];

  // Get the current hash and path from the URL
  const currentRoute = window.location.hash.toLowerCase();
  const currentPath = window.location.pathname.toLowerCase();

  // Redirect if the current route is invalid and not empty
  if (!validRoutes.includes(currentRoute) && currentRoute !== "") {
    redirectTo404();
  }

  // Redirect if the current path contains any restricted folder
  if (restrictedFolders.some(folder => currentPath.includes(folder))) {
    redirectTo404();
  }

  // Function to redirect to the 404 page
  function redirectTo404() {
    window.location.href = "/404.html"; // Ensure you have a 404.html file
  }
});

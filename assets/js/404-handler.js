document.addEventListener('DOMContentLoaded', () => {
  // Define valid routes (ensure they're consistently formatted)
  const validRoutes = [
   
      '#hero', 
      '#about', 
      '#services', 
      '#contact', 
      '#achievements', 
      '#skills', 
      '#resume', 
      '#portfolio', 
      '#testimonials',
      "#footer",
      '/index.html#hero', 
      '/index.html#about', 
      '/index.html#services', 
      '/index.html#contact', 
      '/index.html#achievements', 
      '/index.html#skills', 
      '/index.html#resume', 
      '/index.html#portfolio', 
      '/index.html#testimonials',
      "/index.html#footer",
      "/",
      "/index.html",
      "/404.html"
  ];

  // Get the current hash from the URL and normalize case
  const currentRoute = window.location.hash.toLowerCase();

  // Check if the current route is invalid and not empty
  if (!validRoutes.includes(currentRoute) && currentRoute !== '') {
      // Redirect to 404.html if the route is invalid
      window.location.href = '/404.html';  // Full path for consistency
  }
});

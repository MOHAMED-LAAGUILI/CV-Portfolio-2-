document.addEventListener('DOMContentLoaded', () => {
  // Define valid routes
  const validRoutes = [
      '#home', 
      '#about', 
      '#services', 
      '#contact', 
      '#achievements', 
      '#skills', 
      '#resume', 
      '#portfolio', 
      '#testimonials',
      "#footer"
  ];

  // Get the current hash from the URL
  const currentRoute = window.location.hash;

  // Check if the current route is invalid and not empty
  if (!validRoutes.includes(currentRoute) && currentRoute !== '') {
      // Redirect to 404.html if the route is invalid
      window.location.href = '404.html';
  }
});

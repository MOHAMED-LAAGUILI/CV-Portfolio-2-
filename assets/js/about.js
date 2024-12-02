document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-slider .slide-img');
    let currentIndex = 0;
  
    // If no images are found, exit early
    if (images.length === 0) {
      console.error("No images found in '.image-slider'");
      return;
    }
  
    // Initialize the first image
    images[currentIndex].classList.add('active');
  
    // Start the loop
    setInterval(() => {
      images[currentIndex].classList.remove('active'); // Hide current
      currentIndex = (currentIndex + 1) % images.length; // Move to the next
      images[currentIndex].classList.add('active'); // Show next
    }, 2000); // Change image every 2 seconds
  });
  
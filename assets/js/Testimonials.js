  document.addEventListener('DOMContentLoaded', () => {
    // Array of testimonials
    const testimonials = [
      {
        name: "Khaoula El Fels",
        job: "Licencier en Development Informatique",
        image: "assets/img/testimonials/Khaoula el fels.jpeg",
        text: "Félicitations Mohamed! Vous êtes une personne innovante et créative..."
      },
      {
        name: "Ayman El Hasani Rousi",
        job: "Developpeur Informatique",
        image: "assets/img/testimonials/AymanRouusi.png",
        text: "Pas Disponible a ce moment"
      },
      {
        name: "Laila Mlaiji",
        job: "Directrice Miage Ksar El Kebir",
        image: "assets/img/testimonials/laila-mlaiji.png",
        text: "Pas Disponible a ce moment"
      },
      {
        name: "Prof.Soufiane",
        job: "Proffesseur",
        image: "assets/img/testimonials/prof-soufiane.png",
        text: "Pas Disponible a ce moment"
      },
      {
        name: "Abdelkrim Abiid",
        job: "Directeur MIAGE Casablanca",
        image: "assets/img/testimonials/abiid.png",
        text: "Pas Disponible a ce moment"
      }
    ];

    // Get the testimonial list container
    const testimonialList = document.getElementById('testimonial-list');

    // Loop through each testimonial and generate HTML dynamically
    testimonials.forEach(testimonial => {
      const testimonialItem = `
        <div class="swiper-slide">
          <div class="testimonial-item">
            <img src="${testimonial.image}" class="testimonial-img floating mb-3 shadow" alt="${testimonial.name}" loading="lazy" />
            <h3>${testimonial.name}</h3>
            <h4>${testimonial.job}</h4>
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              ${testimonial.text}
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>
        </div>
      `;

      // Append the testimonial item to the swiper-wrapper container
      testimonialList.innerHTML += testimonialItem;
    });
    

    // Initialize Swiper with infinite scroll effect
    const swiper = new Swiper('.testimonials-slider', {
      slidesPerView: 1,         // Show one testimonial per slide
      spaceBetween: 20,         // Space between slides
      loop: true,               // Infinite loop
      autoplay: {
        delay: 3000,            // Auto scroll every 3 seconds
        disableOnInteraction: false,  // Keep autoplay even when user interacts
      },
      pagination: {
        el: '.swiper-pagination',  // Pagination controls (dots)
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',  // Next button
        prevEl: '.swiper-button-prev',  // Prev button
      },
      speed: 500,                // Smooth transition between slides
      effect: 'slide',           // Slide effect for smooth transition
    });
  });

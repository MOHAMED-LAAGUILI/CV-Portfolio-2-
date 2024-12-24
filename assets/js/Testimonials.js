document.addEventListener('DOMContentLoaded', () => {
  // Array of testimonials
  const testimonials = [
    {
      name: "Khaoula El Fels",
      job: "Bachelor in Computer Science Development",
      image: "assets/img/testimonials/Khaoula el fels.jpeg",
      text: `Wow, Mohamed! 🎉 Huge congratulations to you! 
      You’re such a brilliantly innovative and endlessly 
      creative person—always full of bright ideas and determination. 
      The sky’s the limit for someone as talented as you! 🌟 Keep up the
       amazing work and continue to inspire everyone around you! ...`
    },
    {
      name: "Ayman El Hasani Rousi",
      job: "Computer Science Developer",
      image: "assets/img/testimonials/AymanRouusi.png",
      text: `Hey Mohamed! 🎉Working alongside you has been nothing 
      short of inspiring. Your ideas are like sparks,
       igniting solutions and creativity in every project we’ve tackled together.
        💡🔥 Beyond your skills, it’s your kindness and collaborative spirit that 
        truly make you shine. As you embark on your career journey, remember that 
        the best is yet to come! The sky isn’t the limit for someone like you—it’s
         just the beginning. 🚀 Cheers to your success and all the milestones you’re
          about to conquer!`
    },
    {
      name: "Laila Mlaiji",
      job: "Director, MIAGE Institution of IT",
      image: "assets/img/testimonials/laila-mlaiji.png",
      text: `Dear Mohamed, 🌟 It has been an absolute honor 
      watching you grow into such a talented and driven individual.
       Your journey is a testament to your hard work, innovation,
        and the sheer determination to reach great heights. 
        As you step into the next phase of your career, remember 
        that the world is your canvas, and you are the artist. 
        Keep painting it with your brilliance and creativity! 
        🎨✨ The entire school is proud of you, and I wish
         you the greatest success ahead. Your achievements
          will always inspire future generations!`
    },
    {
      name: "Soufiane",
      job: "Teacher",
      image: "assets/img/testimonials/prof-soufiane.png",
      text: `Dear Mohamed, 👨‍🏫 You have always stood out, 
      not just for your academic excellence but for your 
      unquenchable thirst for knowledge and innovation. 
      Your passion, coupled with your humility and dedication, 
      has made teaching you a truly rewarding experience. 
      🌱🚀 As you soar into your career, remember to embrace every
       challenge as an opportunity to shine even brighter. 
       You’ve made us proud, and I am confident you will continue to leave 
       a mark wherever you go. Wishing you immense success in everything you pursue!`
    },
  ];

  const testimonialList = document.getElementById('testimonial-list');

  // Function to truncate text and add Show More option
  function truncateText(text, limit) {
    if (text.length > limit) {
      const truncatedText = text.substring(0, limit) + '...';
      return `${truncatedText} <span class="show-more" style="color: var(--primary); cursor: pointer;">Show More</span>`;
    }
    return text;
  }

  // Generate and append testimonial items dynamically
  testimonials.forEach(({ name, job, image, text }) => {
    const testimonialItem = document.createElement('div');
    testimonialItem.classList.add('swiper-slide');
    testimonialItem.innerHTML = `
      <div class="testimonial-item">
        <img src="${image}" class="testimonial-img floating mb-3 shadow" alt="${name}" loading="lazy" />
        <h3>${name}</h3>
        <h4>${job}</h4>
        <p>
          <i class="bx bxs-quote-alt-left quote-icon-left"></i>
          <span class="testimonial-text">${truncateText(text, 150)}</span>
          <i class="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
      </div>
    `;

    // Attach the Show More functionality to each testimonial individually
    const showMoreLink = testimonialItem.querySelector('.show-more');
    if (showMoreLink) {
      showMoreLink.addEventListener('click', () => {
        const fullText = text;
        // Show the full text and change link to "Show Less"
        testimonialItem.querySelector('.testimonial-text').innerHTML = `
          ${fullText} <span class="show-less" style="color: var(--primary); cursor: pointer;">Show Less</span>
        `;

        // Add Show Less functionality
        const showLessLink = testimonialItem.querySelector('.show-less');
        showLessLink.addEventListener('click', () => {
          // Revert back to truncated text
          testimonialItem.querySelector('.testimonial-text').innerHTML = truncateText(text, 150);
        });
      });
    }

    testimonialList.appendChild(testimonialItem);
  });

  // Initialize Swiper
  new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Dots are clickable
    },
    speed: 500,
  });
});
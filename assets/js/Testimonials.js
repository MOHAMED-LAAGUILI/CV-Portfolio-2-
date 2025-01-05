document.addEventListener('DOMContentLoaded', () => {
  // Array of testimonials
  const testimonials = [
    {
      name: "Mounssif BOUHLAOUI",
      job: "Lead Software Engineer at ALX Morocco",
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/Mounssif-BOUHLAOUI",
      text: `I'm 31 years old, I saw many people, I know gold people when I
       see them or their work and creativity. KEEP GOING BRO! THERE ARE 
       AMAZING OPPORTUNITIES in your way, just keep pushing ❤`,
       socialLinks: {
        linkedin: "https://linkedin.com/in/mounssif-bouhlaoui",
      }
    },
    {
      name: "Khaoula El Fels",
      job: "Bachelor in Computer Science Development",
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/Khaoula-el-fels",
      
      text: `Wow, Mohamed! 🎉 Huge congratulations to you! 
      You’re such a brilliantly innovative and endlessly 
      creative person—always full of bright ideas and determination.🌟 Keep up the
       amazing work and continue to inspire everyone around you! ...`,
       socialLinks: {
       
      }
    },
    {
      name: "Ayman Rossi El Hassani",
      job: "Computer Science Engineer",
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/AymanRouusi",
      text: `Hey Mohamed! 🎉Working alongside you has been nothing 
      short of inspiring. Your ideas are like sparks,
       igniting solutions and creativity in every project we’ve tackled together.
        💡🔥 Beyond your skills, it’s your kindness and collaborative spirit that 
        truly make you shine. As you embark on your career journey`,
          socialLinks: {
            linkedin: "https://www.linkedin.com/in/ayman-rossi-el-hassani-9b6714210/",
          }
    },
    {
      name: "laila MLAIJI",
      job: "Director at MIAGE Institution of IT",
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/laila-mlaiji",
      text: `Dear Mohamed, 🌟 It has been an absolute honor 
      watching you grow into such a talented and driven individual.
       Your journey is a testament to your hard work, innovation,
        and the sheer determination to reach great heights. 
        As you step into the next phase of your career,`,
          socialLinks: {
            linkedin: "https://www.linkedin.com/in/laila-mlaiji-b8551615b/",
          }
    },
    {
      name: "Soufiane",
      job: "IT Teacher at MIAGE Institution of IT",
      image: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/prof-soufiane",
      text: `Dear Mohamed, 👨‍🏫 You have always stood out, 
      not just for your academic excellence but for your 
      unquenchable thirst for knowledge and innovation. 
      Your passion, coupled with your humility and dedication, 
      has made teaching you a truly rewarding experience. `,
       socialLinks: {
       
      }
    },
  ];

  const testimonialList = document.getElementById('testimonial-list');


  // Generate and append testimonial items dynamically
  testimonials.forEach(({ name, job, image, text, socialLinks = {} }) => {
    const testimonialItem = document.createElement('div');
    testimonialItem.classList.add('swiper-slide');
    testimonialItem.innerHTML = `
       <div class="testimonial-item">
        <img src="${image}" class="testimonial-img floating mb-3 shadow" alt="${name}" loading="lazy" title="image of ${name} as ${job}" />
        <h3>${name}</h3>
        <h4>${job}</h4>
        <p>
          <i class="bx bxs-quote-alt-left quote-icon-left"></i>
          <span class="testimonial-text">${text}</span>
          <i class="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        <div class="social-links">
          ${socialLinks.linkedin ? `<a href="${socialLinks.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a>` : ''}
          ${socialLinks.twitter ? `<a href="${socialLinks.twitter}" target="_blank"><i class="bi bi-twitter"></i></a>` : ''}
        </div>
      </div>
    `;
  
    // Attach Show More functionality to each testimonial individually
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
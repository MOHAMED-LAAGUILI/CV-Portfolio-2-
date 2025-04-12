/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
      {
        name: "Mounssif BOUHLAOUI",
        job: "Lead Software Engineer at ALX Morocco",
        image:
          "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/Mounssif-BOUHLAOUI",
        text: "I'm 31 years old, I saw many people, I know gold people when I\n       see them or their work and creativity. KEEP GOING BRO! THERE ARE \n       AMAZING OPPORTUNITIES in your way, just keep pushing ❤",
        socialLinks: { linkedin: "https://linkedin.com/in/mounssif-bouhlaoui" },
      },
      {
        name: "Khaoula El Fels",
        job: "Bachelor in Computer Science Development",
        image:
          "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/Khaoula-el-fels",
        text: "Wow, Mohamed! 🎉 Huge congratulations to you! \n      You’re such a brilliantly innovative and endlessly \n      creative person—always full of bright ideas and determination.🌟 Keep up the\n       amazing work and continue to inspire everyone around you! ...",
        socialLinks: {},
      },
      {
        name: "Ayman Rossi El Hassani",
        job: "Computer Science Engineer",
        image:
          "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/AymanRouusi",
        text: "Hey Mohamed! 🎉Working alongside you has been nothing \n      short of inspiring. Your ideas are like sparks,\n       igniting solutions and creativity in every project we’ve tackled together.\n        💡🔥 Beyond your skills, it’s your kindness and collaborative spirit that \n        truly make you shine. As you embark on your career journey",
        socialLinks: {
          linkedin:
            "https://www.linkedin.com/in/ayman-rossi-el-hassani-9b6714210/",
        },
      },
      {
        name: "laila MLAIJI",
        job: "Director at MIAGE Institution of IT",
        image:
          "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/laila-mlaiji",
        text: "Dear Mohamed, 🌟 It has been an absolute honor \n      watching you grow into such a talented and driven individual.\n       Your journey is a testament to your hard work, innovation,\n        and the sheer determination to reach great heights. \n        As you step into the next phase of your career,",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/laila-mlaiji-b8551615b/",
        },
      },
      {
        name: "Soufiane",
        job: "IT Teacher at MIAGE Institution of IT",
        image:
          "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/prof-soufiane",
        text: "Dear Mohamed, 👨‍🏫 You have always stood out, \n      not just for your academic excellence but for your \n      unquenchable thirst for knowledge and innovation. \n      Your passion, coupled with your humility and dedication, \n      has made teaching you a truly rewarding experience. ",
        socialLinks: {},
      },
    ],
    testimonialList = document.getElementById("testimonial-list");
  testimonials.forEach(
    ({
      name: name,
      job: job,
      image: image,
      text: text,
      socialLinks: socialLinks = {},
    }) => {
      const testimonialItem = document.createElement("div");
      testimonialItem.classList.add("swiper-slide"),
        (testimonialItem.innerHTML = `\n       <div class="testimonial-item">\n        <img src="${image}" class="testimonial-img floating mb-3 shadow" alt="${name}" loading="lazy" title="image of ${name} as ${job}" />\n        <h3>${name}</h3>\n        <h4>${job}</h4>\n        <p>\n          <i class="bx bxs-quote-alt-left quote-icon-left"></i>\n          <span class="testimonial-text">${text}</span>\n          <i class="bx bxs-quote-alt-right quote-icon-right"></i>\n        </p>\n        <div class="social-links">\n          ${
          socialLinks.linkedin
            ? `<a href="${socialLinks.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a>`
            : ""
        }\n          ${
          socialLinks.twitter
            ? `<a href="${socialLinks.twitter}" target="_blank"><i class="bi bi-twitter"></i></a>`
            : ""
        }\n        </div>\n      </div>\n    `);
      const showMoreLink = testimonialItem.querySelector(".show-more");
      showMoreLink &&
        showMoreLink.addEventListener("click", () => {
          const fullText = text;
          testimonialItem.querySelector(
            ".testimonial-text"
          ).innerHTML = `\n          ${fullText} <span class="show-less" style="color: var(--primary); cursor: pointer;">Show Less</span>\n        `;
          const showLessLink = undefined;
          testimonialItem
            .querySelector(".show-less")
            .addEventListener("click", () => {
              testimonialItem.querySelector(".testimonial-text").innerHTML =
                truncateText(text, 150);
            });
        }),

        testimonialList.appendChild(testimonialItem);
    }
  ),
  
    new Swiper(".testimonials-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: !0,
      autoplay: { delay: 6e3, disableOnInteraction: !1 },
      pagination: { el: ".swiper-pagination", clickable: !0 },
      speed: 500,
    });
});

// Navigation items data
const navItems = [
  {
    href: "#hero",
    icon: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/512x512",
    label: "Home",
    isImage: true,
  },
  { 
    href: "#about", 
    icon: "bi bi-person", 
    label: "About", 
    isImage: false 
  },
  { 
    href: "#skills", 
    icon: "bi bi-gear", 
    label: "Skills", 
    isImage: false 
  },
  {
    href: "#resume",
    icon: "bi bi-file-earmark-text",
    label: "Resume",
    isImage: false,
  },
  {
    href: "#services",
    icon: "bi bi-briefcase",
    label: "Services",
    isImage: false,
  },
  {
    href: "#portfolio",
    icon: "bi bi-collection",
    label: "Projects",
    isImage: false,
  },
  {
    href: "#testimonials",
    icon: "bi bi-chat-quote",
    label: "Testimonials",
    isImage: false,
  },
  { 
    href: "#contact", 
    icon: "bi bi-envelope", 
    label: "Contact", 
    isImage: false 
  },
  { 
    href: "404.html", 
    icon: "bi bi-ban", 
    label: "404", 
    isImage: false 
  }
];

// Render navigation menu
function renderNavMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.innerHTML = '';
  
  navItems.forEach((item) => {
    const li = document.createElement("li");
    
    const link = document.createElement("a");
    link.href = item.href;
    link.className = "nav-link";
    
    if (item.isImage) {
      const img = document.createElement("img");
      img.src = item.icon;
      img.alt = item.label;
      img.className = "nav-icon-img w-10";
      link.appendChild(img);
    } else {
      const icon = document.createElement("i");
      icon.className = item.icon;
      link.appendChild(icon);
    }
    
    const span = document.createElement("span");
    span.textContent = item.label;
    link.appendChild(span);
    
    li.appendChild(link);
    navMenu.appendChild(li);
  });
}

// Handle mobile navigation toggle
function setupMobileNav() {
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const sidebar = document.getElementById('sidebar');
  
  mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    // Change icon based on sidebar state
    const icon = mobileToggle.querySelector('i');
    if (sidebar.classList.contains('active')) {
      icon.classList.remove('bi-list');
      icon.classList.add('bi-x-lg');
    } else {
      icon.classList.remove('bi-x-lg');
      icon.classList.add('bi-list');
    }
  });
  
  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 991 && 
        !sidebar.contains(e.target) && 
        !mobileToggle.contains(e.target) && 
        sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      const icon = mobileToggle.querySelector('i');
      icon.classList.remove('bi-x-lg');
      icon.classList.add('bi-list');
    }
  });
}

// Handle active section highlighting
function setupSectionObserver() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.5 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Set initial active link based on scroll position
  function setInitialActive() {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('load', setInitialActive);
  window.addEventListener('scroll', setInitialActive);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderNavMenu();
  setupMobileNav();
  setupSectionObserver();
});
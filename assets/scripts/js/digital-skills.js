// Reorganized skill groups with ALL original skills included
const skillGroups = [
  {
    groupName: "Core Web Technologies",

    skills: [
      {
        name: "HTML",
        logo: "https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg",
        description: "The backbone of web pages, used to structure content.",
      },
      {
        name: "CSS",
        logo: "https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg",
        description: "Styles web pages to make them visually appealing.",
      },
      {
        name: "JavaScript (ES6+)",
        logo: "https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg",
        description: "A powerful scripting language for web interactivity.",
      },
      {
        name: "jQuery",
        logo: "https://github.com/devicons/devicon/raw/master/icons/jquery/jquery-original.svg",
        description: "A fast, small JavaScript library for simplified DOM manipulation.",
      },
      {
        name: "TypeScript",
        logo: "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",
        description: "A superset of JavaScript that adds static typing.",
      }
    ],
  },
  {
    groupName: "CSS & Styling",
    skills: [
      {
        name: "Sass/Scss",
        logo: "http://vanseodesign.com/blog/wp-content/uploads/2015/09/sass-logo-2.png",
        description: "A popular CSS preprocessor that extends CSS with features like variables, nested rules, and functions.",
      },
      {
        name: "Bootstrap CSS",
        logo: "https://github.com/devicons/devicon/raw/master/icons/bootstrap/bootstrap-original.svg",
        description: "A CSS framework for building responsive layouts.",
      },
      {
        name: "Tailwind CSS",
        logo: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
        description: "A utility-first CSS framework for rapid UI development.",
      },
      {
        name: "Flowbite UI",
        logo: "https://flowbite.s3.amazonaws.com/brand/logo-light/mark/flowbite-logo.png",
        description: "Components for Tailwind CSS, including navigation and modals.",
      },
      {
        name: "DaisyUI",
        logo: "https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png",
        description: "A Tailwind CSS component library that simplifies UI building with ready-made, customizable themes and components.",
      }
    ],
  },
  {
    groupName: "Frontend Frameworks",
    skills: [
      {
        name: "React",
        logo: "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
        description: "A library for building dynamic and interactive user interfaces.",
      },
      {
        name: "Redux",
        logo: "https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg",
        description: "State management for complex React applications.",
      },
      {
        name: "React Query",
        logo: "https://tse3.mm.bing.net/th?id=OIP.ksUBjXevPMEvCB86E4jx1AAAAA&pid=Api&P=0&h=180",
        description: "A library for efficient data fetching and caching in React apps.",
      },
      {
        name: "Shadcn UI",
        logo: "https://tse4.mm.bing.net/th?id=OIP.uzZT_Gwd2PH7Mkz5Q_VcUgAAAA&pid=Api&P=0&h=180",
        description: "A modern component library for fast UI prototyping.",
      },
      {
        name: "Vite",
        logo: "https://tse2.mm.bing.net/th?id=OIP.wf8ivLs6ExVeBxZ7R26nHwAAAA&pid=Api&P=0&h=180",
        description: "A fast frontend build tool and development server.",
      }
    ],
  },
  {
    groupName: "Animation & Graphics",
    skills: [
      {
        name: "Gsap",
        logo: "https://tse2.mm.bing.net/th?id=OIP.W3GxPQjCTXCbMxPqmoiSdwAAAA&pid=Api&P=0&h=180",
        description: "A JavaScript library for creating high-performance animations.",
      },
      {
        name: "Framer Motion",
        logo: "https://tse4.mm.bing.net/th?id=OIP.UE1ujLsoCEZjqro7vpiSqwAAAA&pid=Api&P=0&h=180",
        description: "A library for declarative animations in React.",
      },
      {
        name: "ThreeJS",
        logo: "https://tse1.mm.bing.net/th?id=OIP.nHP10Bd6QZpoDWY1A5uHkAHaHd&pid=Api&P=0&h=180",
        description: "A 3D JavaScript library for creating WebGL-rendered scenes.",
      }
    ],
  },
  {
    groupName: "Backend Technologies",
    skills: [
      {
        name: "PHP",
        logo: "https://www.logotypes101.com/logos/203/272663FA02DE2DAA2BBAE2FC39F14783/php.png",
        description: "A widely-used server-side scripting language designed for web development.",
      },
      {
        name: "Apache",
        logo: "https://images.seeklogo.com/logo-png/31/2/apache-logo-png_seeklogo-314278.png",
        description: "A widely used open-source web server software for hosting dynamic and static websites.",
      },
      {
        name: "Laravel",
        logo: "https://logospng.org/download/laravel/logo-laravel-icon-1024.png",
        description: "A modern PHP framework known for its elegant syntax and powerful features.",
      },
      {
        name: "MySQL(MariaDB)",
        logo: "https://github.com/devicons/devicon/raw/master/icons/mysql/mysql-original.svg",
        description: "A popular relational database management system based on SQL.",
      },
      {
        name: "PostgreSQL",
        logo: "https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-original.svg",
        description: "A powerful, open-source relational database system that uses and extends the SQL language.",
      },
      {
        name: "Redis",
        logo: "https://banner2.cleanpng.com/20180421/vxq/aved0ejlh.webp",
        description: "An open-source, in-memory key-value store used as a database, cache, and message broker.",
      }
    ],
  },
  {
    groupName: "Development Tools",
    skills: [
      {
        name: "Git/Git-Flow",
        logo: "https://github.com/devicons/devicon/raw/master/icons/git/git-original.svg",
        description: "A distributed version control system used for tracking changes in source code.",
      },
      {
        name: "GitHub",
        logo: "https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg",
        description: "A platform for version control and collaboration.",
      },
      {
        name: "VS Code",
        logo: "https://iconape.com/wp-content/png_logo_vector/visual-studio-code.png",
        description: "A free, open-source code editor by Microsoft with support for multiple programming languages.",
      },
      {
        name: "PHPStorm",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/PhpStorm_Icon.svg/2048px-PhpStorm_Icon.svg.png",
        description: "A powerful IDE for PHP development, providing advanced code editing and debugging features.",
      },
      {
        name: "Docker",
        logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
        description: "A platform for automating the deployment, scaling, and management of applications in isolated containers.",
      },
      {
        name: "Gulp",
        logo: "https://www.svgrepo.com/show/303440/gulp-logo.svg",
        description: "A toolkit for automating time-consuming tasks in your development workflow, such as minification, concatenation, and live-reloading."
      }
    ],
  },
  {
    groupName: "CMS & Site Builders",
    skills: [
      {
        name: "WordPress",
        logo: "https://pngimg.com/uploads/wordpress/wordpress_PNG28.png",
        description: "A popular open-source content management system for building websites and blogs.",
      }
    ],
  },
  {
    groupName: "Cloud & Services",
    skills: [
      {
        name: "AWS S3",
        logo: "https://images.seeklogo.com/logo-png/31/1/amazon-web-services-aws-logo-png_seeklogo-319188.png",
        description: "A comprehensive and widely adopted cloud platform from Amazon.",
      },
      {
        name: "Office 365",
        logo: "https://www.seekpng.com/png/detail/772-7721081_office-365-logo-and-products-microsoft-office.png",
        description: "A cloud-based subscription service by Microsoft that includes access to popular applications.",
      },
      {
        name: "i18n",
        logo: "https://avatars.githubusercontent.com/u/8546082?s=280&v=4",
        description: "A powerful internationalization framework for translating applications effortlessly.",
      }
    ],
  },
  {
    groupName: "Full Stack Solutions",
    skills: [
      {
        name: "Basic Stack",
        logo: "https://thumbs.dreamstime.com/b/vector-collection-web-development-shield-signs-html-css-javascript-isolated-icons-white-background-38571884.jpg",
        description: "The foundational technologies for web development: HTML, CSS, and JavaScript.",
      },
      {
        name: "LIR Stack",
        logo: "https://miro.medium.com/v2/resize:fit:1358/1*FQIlE1Xxu9ckg06KMNrIqw.png",
        description: "A full-stack web development framework using Laravel, Inertia, and React.",
      },
      {
        name: "Inertia JS",
        logo: "https://avatars0.githubusercontent.com/u/47703742?s=280&v=4",
        description: "A modern framework that connects Laravel and React, Vue, or Svelte seamlessly.",
      }
    ],
  },
  {
    groupName: "Laravel Packages",
    skills: [
      {
        name: "Chatify",
        logo: "https://cdn.dribbble.com/userupload/5282041/file/still-fd506922d96a13da3c29f37f6906a551.png",
        description: "A Laravel package for building real-time chat applications with features such as private, group chats, and more.",
      },
      {
        name: "Log Viewer",
        logo: "https://i.ytimg.com/vi/5K1ELOp4d-o/maxresdefault.jpg",
        description: "A package for easily viewing Laravel log files in a beautiful web interface.",
      },
      {
        name: "Horizon",
        logo: "https://vincentbean.com/assets/horizon.png",
        description: "A Laravel package for managing Redis queues with a beautiful dashboard.",
      },
      {
        name: "Spatie Media Library",
        logo: "https://avatars.githubusercontent.com/u/7535935?s=280&v=4",
        description: "A powerful package for handling file uploads and media management in Laravel.",
      },
      {
        name: "Spatie Permissions & Roles",
        logo: "https://avatars.githubusercontent.com/u/7535935?s=280&v=4",
        description: "A flexible package for managing user roles and permissions within Laravel applications.",
      },
      {
        name: "Spatie Log Activities",
        logo: "https://avatars.githubusercontent.com/u/7535935?s=280&v=4",
        description: "A package to log user activities within your application.",
      }
    ],
  }
];

// Enhanced rendering with animation and better UX
document.addEventListener('DOMContentLoaded', function() {
  const skillsContainer = document.getElementById("skills-container");
  
  // Clear any existing content
  skillsContainer.innerHTML = '';
  
  // Add each skill group with a slight delay for animation
  skillGroups.forEach((group, groupIndex) => {
    setTimeout(() => {
      const groupElement = document.createElement("div");
      groupElement.classList.add("skill-group");
      groupElement.style.opacity = "0";
      groupElement.style.transform = "translateY(20px)";
      
      const titleElement = document.createElement("h3");
      titleElement.innerText = group.groupName;
      titleElement.classList.add("group-title");
      
      const skillsList = document.createElement("div");
      skillsList.classList.add("skills-list");
      
      // Add each skill with a slight delay
      group.skills.forEach((skill) => {
        const skillCard = document.createElement("div");
        skillCard.classList.add("skill-card");
        
        const logoElement = document.createElement("img");
        logoElement.src = skill.logo;
        logoElement.alt = skill.name + " logo";
        logoElement.loading = "lazy";
        logoElement.title = skill.name;
        logoElement.classList.add("skill-logo");
        
        const nameElement = document.createElement("div");
        nameElement.classList.add("skill-name");
        nameElement.innerText = skill.name;
        
        const tooltipElement = document.createElement("div");
        tooltipElement.classList.add("tooltip");
        tooltipElement.innerText = skill.description;
        
        // Assemble the skill card
        skillCard.appendChild(logoElement);
        skillCard.appendChild(nameElement);
        skillCard.appendChild(tooltipElement);
        
        // Add to the skills list
        skillsList.appendChild(skillCard);
      });
      
      // Assemble the group
      groupElement.appendChild(titleElement);
      groupElement.appendChild(skillsList);
      skillsContainer.appendChild(groupElement);
      
      // Animate the group in
      setTimeout(() => {
        groupElement.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        groupElement.style.opacity = "1";
        groupElement.style.transform = "translateY(0)";
      }, 50);
      
    }, groupIndex * 150); // Stagger the groups
  });
  
  // Add click listener for mobile devices to show tooltips
  document.addEventListener('click', function(e) {
    if (e.target.closest('.skill-card')) {
      const card = e.target.closest('.skill-card');
      const tooltip = card.querySelector('.tooltip');
      
      // Check if any tooltips are visible
      const visibleTooltips = document.querySelectorAll('.tooltip-visible');
      visibleTooltips.forEach(t => {
        if (t !== tooltip) {
          t.classList.remove('tooltip-visible');
        }
      });
      
      // Toggle the clicked tooltip
      tooltip.classList.toggle('tooltip-visible');
    } else {
      // Hide all tooltips when clicking outside
      document.querySelectorAll('.tooltip-visible').forEach(t => {
        t.classList.remove('tooltip-visible');
      });
    }
  });
});
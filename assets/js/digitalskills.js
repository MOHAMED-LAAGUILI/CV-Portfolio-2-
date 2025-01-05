const skillGroups = [
  {
    groupName: "Frontend",
    skills: [
      { name: "HTML", logo: "https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg", description: "The backbone of web pages, used to structure content." },
      { name: "CSS", logo: "https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg", description: "Styles web pages to make them visually appealing." },
      { name: "Bootstrap CSS", logo: "https://github.com/devicons/devicon/raw/master/icons/bootstrap/bootstrap-original.svg", description: "A CSS framework for building responsive layouts." },
      { name: "Tailwind CSS", logo: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png", description: "A utility-first CSS framework for rapid UI development." },
      { name: "JavaScript (ES6+)", logo: "https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg", description: "A powerful scripting language for web interactivity." },
      { name: "jQuery", logo: "https://github.com/devicons/devicon/raw/master/icons/jquery/jquery-original.svg", description: "A fast, small JavaScript library for simplified DOM manipulation." },
      { name: "React", logo: "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg", description: "A library for building dynamic and interactive user interfaces." },
      { name: "React Query", logo: "https://tse3.mm.bing.net/th?id=OIP.ksUBjXevPMEvCB86E4jx1AAAAA&pid=Api&P=0&h=180", description: "A library for efficient data fetching and caching in React apps." },
      { name: "HeadlessUI", logo: "https://img.stackshare.io/service/21223/default_35e005510911711d35edae2841151dfb76f2b3f5.png", description: "Accessible UI components tailored for Tailwind CSS." },
      { name: "Shadcn UI", logo: "https://tse4.mm.bing.net/th?id=OIP.uzZT_Gwd2PH7Mkz5Q_VcUgAAAA&pid=Api&P=0&h=180", description: "A modern component library for fast UI prototyping." },
      { name: "Daizy UI", logo: "https://skillhub.gallerycdn.vsassets.io/extensions/skillhub/daisy-ui-latest-snippets/0.0.1/1691390254091/Microsoft.VisualStudio.Services.Icons.Default", description: "Pre-designed Tailwind CSS components for rapid UI development." },
      { name: "Vite", logo: "https://tse2.mm.bing.net/th?id=OIP.wf8ivLs6ExVeBxZ7R26nHwAAAA&pid=Api&P=0&h=180", description: "A fast frontend build tool and development server." },
      { name: "Flowbite UI", logo: "https://flowbite.s3.amazonaws.com/brand/logo-light/mark/flowbite-logo.png", description: "Components for Tailwind CSS, including navigation and modals." },
      { name: "Zustand", logo: "https://img.stackshare.io/service/11559/zustand.png", description: "A small, fast state-management library for React." },
      { name: "Redux", logo: "https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg", description: "State management for complex React applications." },
      { name: "Next.js", logo: "https://github.com/devicons/devicon/raw/master/icons/nextjs/nextjs-original.svg", description: "A React framework for server-rendered apps and static sites." },
      { name: "Gsap", logo: "https://tse2.mm.bing.net/th?id=OIP.W3GxPQjCTXCbMxPqmoiSdwAAAA&pid=Api&P=0&h=180", description: "A JavaScript library for creating high-performance animations." },
      { name: "Framer Motion", logo: "https://tse4.mm.bing.net/th?id=OIP.UE1ujLsoCEZjqro7vpiSqwAAAA&pid=Api&P=0&h=180", description: "A library for declarative animations in React." },
      { name: "TypeScript", logo: "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg", description: "A superset of JavaScript that adds static typing." },
      { name: "ThreeJS", logo: "https://tse1.mm.bing.net/th?id=OIP.nHP10Bd6QZpoDWY1A5uHkAHaHd&pid=Api&P=0&h=180", description: "A 3D JavaScript library for creating WebGL-rendered scenes." },
   ],
  },
    {
      "groupName": "Backend",
      "skills": [
        {
          "name": "Node.js",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-original.svg",
          "description": "A JavaScript runtime built on Chrome's V8 JavaScript engine that helps build scalable, high-performance applications."
        },
        {
          "name": "REST APIs",
          "logo": "https://cdn-icons-png.flaticon.com/512/7983/7983502.png",
          "description": "A set of web services that allow different systems to communicate using HTTP, usually in a stateless manner."
        },
        {
          "name": "JSON Server",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/json/json-original.svg",
          "description": "A full fake REST API with zero coding required, useful for prototyping and testing."
        },
        {
          "name": "JWT",
          "logo": "https://jwt.io/img/pic_logo.svg",
          "description": "A compact, URL-safe method for representing claims to be transferred between two parties, commonly used for user authentication."
        },
        {
          "name": "Bcrypt",
          "logo": "https://stackjava.com/wp-content/uploads/2018/03/bcrypt-logo.jpg",
          "description": "A library for hashing passwords in a secure way, making them resistant to brute force attacks."
        },
        {
          "name": "Express.js",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/express/express-original.svg",
          "description": "A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications."
        }
      ]
    },
    {
      "groupName": "Databases",
      "skills": [
        {
          "name": "MySQL",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/mysql/mysql-original.svg",
          "description": "A popular relational database management system based on SQL (Structured Query Language)."
        },
        {
          "name": "Firebase",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/firebase/firebase-plain.svg",
          "description": "A platform developed by Google that provides backend services like real-time database, user authentication, and cloud storage."
        },
        {
          "name": "MongoDB",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/mongodb/mongodb-original.svg",
          "description": "A NoSQL database known for its flexibility and scalability, allowing for the storage of data in JSON-like documents."
        },
        {
          "name": "PostgreSQL",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-original.svg",
          "description": "A powerful, open-source relational database system that uses and extends the SQL language."
        },
        {
          "name": "Supabase",
          "logo": "https://cf.appdrag.com/dashboard-openvm-clo-b2d42c/uploads/supabase-TAiY.png",
          "description": "An open-source Firebase alternative that offers real-time databases, authentication, and file storage."
        },
        {
          "name": "MariaDB",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/mariadb/mariadb-original.svg",
          "description": "An open-source relational database that is a drop-in replacement for MySQL, offering improved features and performance."
        },
        {
          "name": "Cassandra",
          "logo": "https://tse2.mm.bing.net/th?id=OIP.mhPclQfU64GpU6wOsql98AHaE9&pid=Api&P=0&h=180",
          "description": "A distributed NoSQL database designed for handling large amounts of data across many commodity servers without a single point of failure."
        }
      ]
    },
    {
      "groupName": "Stack",
      "skills": [
        {
          "name": "Basic",
          "logo": "https://thumbs.dreamstime.com/b/vector-collection-web-development-shield-signs-html-css-javascript-isolated-icons-white-background-38571884.jpg",
          "description": "The foundational technologies for web development: HTML for structure, CSS for styling, and JavaScript for functionality."
        },
        {
          "name": "MERN",
          "logo": "https://www.tridentspark.com/wp-content/uploads/2023/07/mern-stack-icon-1.png",
          "description": "A full-stack JavaScript framework that uses MongoDB, Express.js, React, and Node.js to build modern web applications."
        },
        {
          "name": "PERN",
          "logo": "https://repository-images.githubusercontent.com/141744474/1ce68080-769e-11ea-8f62-d743905db95e",
          "description": "A full-stack web development framework using PostgreSQL, Express.js, React, and Node.js to build scalable applications."
        }
      ]
    },
    {
      "groupName": "Others",
      "skills": [
        {
          "name": "NPM",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/npm/npm-original-wordmark.svg",
          "description": "The package manager for JavaScript, helping to manage dependencies and install libraries in Node.js projects."
        },
        {
          "name": "YARN",
          "logo": "https://tse3.mm.bing.net/th?id=OIP.m9u-T43srIyuGcR0r8wlAAHaHa&pid=Api&P=0&h=180",
          "description": "A fast, reliable, and secure alternative to NPM that improves the way dependencies are handled in JavaScript projects."
        },
        {
          "name": "JSX",
          "logo": "https://tse2.mm.bing.net/th?id=OIP.lBy7OnDqF59ZMsvRi75ULwAAAA&pid=Api&P=0&h=180",
          "description": "A syntax extension for JavaScript that allows mixing HTML with JavaScript to create dynamic UIs in React."
        },
        {
          "name": "JSON",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/json/json-original.svg",
          "description": "A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate."
        },
        {
          "name": "Git",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/git/git-original.svg",
          "description": "A distributed version control system used for tracking changes in source code during software development."
        },
        {
          "name": "GitHub",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg",
          "description": "A platform for version control and collaboration, allowing multiple people to work on projects simultaneously."
        },
        {
          "name": "Puppeteer",
          "logo": "https://www.svgrepo.com/show/354228/puppeteer.svg",
          "description": "A Node.js library that provides a high-level API to control headless Chrome or Chromium for browser automation."
        },
        {
          "name": "Docker",
          "logo": "https://github.com/devicons/devicon/raw/master/icons/docker/docker-original.svg",
          "description": "A platform for developing, shipping, and running applications inside containers, ensuring consistency across environments."
        },
        {
          "name": "Canva",
          "logo": "https://pnghq.com/wp-content/uploads/canvas-logo-png-png-transparent-elements-download-38292-768x768.png",
          "description": "A graphic design tool that allows for easy creation of visual content with drag-and-drop simplicity."
        },
        {
          "name": "Figma",
          "logo": "https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0-1080x1080.png",
          "description": "A web-based UI/UX design tool used for collaborative design and prototyping."
        },
        {
          "name": "Stripe",
          "logo": "https://tse1.mm.bing.net/th?id=OIP.Dzrn6ms9CYcy71rvEe6E1wHaHa&pid=Api&P=0&h=180",
          "description": "An online payment processing service for internet businesses, allowing easy handling of transactions."
        }
      ]
    }
  
];


const skillsContainer = document.getElementById("skills-container");

skillGroups.forEach((group) => {
  const groupContainer = document.createElement("div");
  groupContainer.classList.add("skill-group");

  const groupTitle = document.createElement("h3");
  groupTitle.innerText = group.groupName;
  groupTitle.classList.add("group-title");

  const skillsList = document.createElement("div");
  skillsList.classList.add("skills-list");

  group.skills.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");

    const skillLogo = document.createElement("img");
    skillLogo.src = skill.logo;
    skillLogo.alt = `${skill.name} logo`;
    skillLogo.loading = `lazy`;
    skillLogo.title = `${skill.name} logo`;
    skillLogo.classList.add("skill-logo");

    const skillName = document.createElement("div");
    skillName.classList.add("skill-name");
    skillName.innerText = skill.name;

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = skill.description;

    skillCard.appendChild(skillLogo);
    skillCard.appendChild(skillName);
    skillCard.appendChild(tooltip);

    skillsList.appendChild(skillCard);
  });

  groupContainer.appendChild(groupTitle);
  groupContainer.appendChild(skillsList);

  skillsContainer.appendChild(groupContainer);
});
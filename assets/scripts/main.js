(()=>{(function(){"use strict";let t=(r,c=!1)=>(r=r.trim(),c?[...document.querySelectorAll(r)]:document.querySelector(r)),e=(r,c,m,v=!1)=>{let h=t(c,v);h&&(v?h.forEach(E=>E.addEventListener(r,m)):h.addEventListener(r,m))},o=(r,c)=>{r.addEventListener("scroll",c)},i=t("#navbar .scrollto",!0),s=()=>{let r=window.scrollY+200;i.forEach(c=>{if(!c.hash)return;let m=t(c.hash);m&&(r>=m.offsetTop&&r<=m.offsetTop+m.offsetHeight?c.classList.add("active"):c.classList.remove("active"))})};window.addEventListener("load",s),o(document,s);let a=r=>{let c=t(r).offsetTop;window.scrollTo({top:c,behavior:"smooth"})},l=t(".back-to-top");if(l){let r=()=>{window.scrollY>100?l.classList.add("active"):l.classList.remove("active")};window.addEventListener("load",r),o(document,r)}e("click",".mobile-nav-toggle",function(r){t("body").classList.toggle("mobile-nav-active"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),e("click",".scrollto",function(r){if(t(this.hash)){r.preventDefault();let c=t("body");if(c.classList.contains("mobile-nav-active")){c.classList.remove("mobile-nav-active");let m=t(".mobile-nav-toggle");m.classList.toggle("bi-list"),m.classList.toggle("bi-x")}a(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&t(window.location.hash)&&a(window.location.hash)});let n=t("#preloader");n&&window.addEventListener("load",()=>{n.remove()});let d=t(".typed");if(d){let r=d.getAttribute("data-typed-items");r=r.split(","),new Typed(".typed",{strings:r,loop:!0,typeSpeed:100,backSpeed:50,backDelay:2e3})}window.addEventListener("load",()=>{AOS.init({duration:650,easing:"ease-in-out",once:!0,mirror:!1})})})();var k=[{href:"#hero",icon:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/512x512",label:"Hero",isImage:!0},{href:"#about",icon:"bi bi-person",label:"About",isImage:!1},{href:"#skills",icon:"bi bi-gear",label:"Skills",isImage:!1},{href:"#resume",icon:"bi bi-file-earmark-text",label:"Resume",isImage:!1},{href:"#services",icon:"bi bi-briefcase",label:"Services",isImage:!1},{href:"#portfolio",icon:"bi bi-collection",label:"Projects",isImage:!1},{href:"#testimonials",icon:"bi bi-chat-quote",label:"Testimonials",isImage:!1},{href:"#contact",icon:"bi bi-envelope",label:"Contact",isImage:!1},{href:"404.html",icon:"bi bi-ban",label:"404 Page",isImage:!1}];function S(){let t=document.getElementById("nav-menu");t.innerHTML="",k.forEach(e=>{let o=document.createElement("li"),i=document.createElement("a");if(i.href=e.href,i.className="nav-link",e.isImage){let a=document.createElement("img");a.src=e.icon,a.alt=e.label,a.className="nav-icon-img w-10",i.appendChild(a)}else{let a=document.createElement("i");a.className=e.icon,i.appendChild(a)}let s=document.createElement("span");s.textContent=e.label,i.appendChild(s),o.appendChild(i),t.appendChild(o)})}function I(){let t=document.querySelector(".mobile-nav-toggle"),e=document.getElementById("sidebar");t.addEventListener("click",()=>{e.classList.toggle("active");let o=t.querySelector("i");e.classList.contains("active")?(o.classList.remove("bi-list"),o.classList.add("bi-x-lg")):(o.classList.remove("bi-x-lg"),o.classList.add("bi-list"))}),document.addEventListener("click",o=>{if(window.innerWidth<=991&&!e.contains(o.target)&&!t.contains(o.target)&&e.classList.contains("active")){e.classList.remove("active");let i=t.querySelector("i");i.classList.remove("bi-x-lg"),i.classList.add("bi-list")}})}function C(){let t=document.querySelectorAll("section"),e=document.querySelectorAll(".nav-link"),o=new IntersectionObserver(s=>{s.forEach(a=>{if(a.isIntersecting){let l=a.target.getAttribute("id");e.forEach(n=>{n.classList.remove("active"),n.getAttribute("href")===`#${l}`&&n.classList.add("active")})}})},{threshold:.5});t.forEach(s=>{o.observe(s)});function i(){let s="";t.forEach(a=>{let l=a.offsetTop,n=a.clientHeight;window.scrollY>=l-n/3&&(s=a.getAttribute("id"))}),e.forEach(a=>{a.classList.remove("active"),a.getAttribute("href")===`#${s}`&&a.classList.add("active")})}window.addEventListener("load",i),window.addEventListener("scroll",i)}document.addEventListener("DOMContentLoaded",()=>{S(),I(),C()});var T=[{href:"https://www.linkedin.com/in/mohamedlaaguili2001/",className:"linkedin shadow",iconClass:"bi-linkedin",target:"_blank"},{href:"https://www.github.com/MOHAMED-LAAGUILI",className:"github shadow",iconClass:"bi-github",target:"_blank"},{href:"https://discordapp.com/users/1316675038598139936",className:"discord shadow",iconClass:"bi-discord",target:"_blank"}],M=(t,e)=>{let o=document.getElementById(e);t.forEach(({href:i,className:s,iconClass:a,target:l})=>{let n=document.createElement("a");n.href=i,n.className=s,l&&(n.target=l);let d=document.createElement("i");d.className=a,n.appendChild(d),o.appendChild(n)})};M(T,"social-links-container");particlesJS("particles-js",{particles:{number:{value:150,density:{enable:!0,value_area:1500}},color:{value:"#ffffff"},shape:{type:["circle","triangle","edge"],stroke:{width:0,color:"#ffffff"}},opacity:{value:.6,random:!0,anim:{enable:!0,speed:2,opacity_min:.2}},size:{value:5,random:!0,anim:{enable:!0,speed:50,size_min:1}},line_linked:{enable:!0,distance:100,color:"#ffffff",opacity:.5,width:2},move:{enable:!0,speed:6,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0}},retina_detect:!0,background:{color:"#000000",image:"url('https://path/to/your/background-image.jpg')",position:"50% 50%",repeat:"no-repeat",size:"cover"},particles:{number:{value:150,density:{enable:!0,value_area:1200}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#ffffff"}},opacity:{value:.8,random:!0,anim:{enable:!0,speed:2,opacity_min:.1}},size:{value:6,random:!0,anim:{enable:!0,speed:40,size_min:.5}},line_linked:{enable:!0,distance:100,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:7,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:600}}},retina_detect:!0,interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}}}});document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelectorAll(".image-slider .slide-img"),e=0;t.length!==0?(t[e].classList.add("active"),setInterval(()=>{t[e].classList.remove("active"),e=(e+1)%t.length,t[e].classList.add("active")},2e3)):console.error("No images found in '.image-slider'")});var x=[{groupName:"Core Web Technologies",skills:[{name:"HTML",logo:"https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg",description:"The backbone of web pages, used to structure content."},{name:"CSS",logo:"https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg",description:"Styles web pages to make them visually appealing."},{name:"JavaScript (ES6+)",logo:"https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg",description:"A powerful scripting language for web interactivity."},{name:"jQuery",logo:"https://github.com/devicons/devicon/raw/master/icons/jquery/jquery-original.svg",description:"A fast, small JavaScript library for simplified DOM manipulation."},{name:"TypeScript",logo:"https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",description:"A superset of JavaScript that adds static typing."}]},{groupName:"CSS & Styling",skills:[{name:"Sass/Scss",logo:"http://vanseodesign.com/blog/wp-content/uploads/2015/09/sass-logo-2.png",description:"A popular CSS preprocessor that extends CSS with features like variables, nested rules, and functions."},{name:"Bootstrap CSS",logo:"https://github.com/devicons/devicon/raw/master/icons/bootstrap/bootstrap-original.svg",description:"A CSS framework for building responsive layouts."},{name:"Tailwind CSS",logo:"https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",description:"A utility-first CSS framework for rapid UI development."},{name:"Flowbite UI",logo:"https://flowbite.s3.amazonaws.com/brand/logo-light/mark/flowbite-logo.png",description:"Components for Tailwind CSS, including navigation and modals."}]},{groupName:"Frontend Frameworks & Libraries",skills:[{name:"React",logo:"https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",description:"A library for building dynamic and interactive user interfaces."},{name:"Redux",logo:"https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg",description:"State management for complex React applications."},{name:"React Query",logo:"https://tse3.mm.bing.net/th?id=OIP.ksUBjXevPMEvCB86E4jx1AAAAA&pid=Api&P=0&h=180",description:"A library for efficient data fetching and caching in React apps."},{name:"Shadcn UI",logo:"https://tse4.mm.bing.net/th?id=OIP.uzZT_Gwd2PH7Mkz5Q_VcUgAAAA&pid=Api&P=0&h=180",description:"A modern component library for fast UI prototyping."},{name:"Vite",logo:"https://tse2.mm.bing.net/th?id=OIP.wf8ivLs6ExVeBxZ7R26nHwAAAA&pid=Api&P=0&h=180",description:"A fast frontend build tool and development server."},{name:"i18n",logo:"https://avatars.githubusercontent.com/u/8546082?s=280&v=4",description:"A powerful internationalization framework for translating applications effortlessly."}]},{groupName:"Animation & Graphics",skills:[{name:"Gsap",logo:"https://tse2.mm.bing.net/th?id=OIP.W3GxPQjCTXCbMxPqmoiSdwAAAA&pid=Api&P=0&h=180",description:"A JavaScript library for creating high-performance animations."},{name:"Framer Motion",logo:"https://tse4.mm.bing.net/th?id=OIP.UE1ujLsoCEZjqro7vpiSqwAAAA&pid=Api&P=0&h=180",description:"A library for declarative animations in React."},{name:"ThreeJS",logo:"https://tse1.mm.bing.net/th?id=OIP.nHP10Bd6QZpoDWY1A5uHkAHaHd&pid=Api&P=0&h=180",description:"A 3D JavaScript library for creating WebGL-rendered scenes."}]},{groupName:"Backend Technologies",skills:[{name:"PHP",logo:"https://www.logotypes101.com/logos/203/272663FA02DE2DAA2BBAE2FC39F14783/php.png",description:"A widely-used server-side scripting language designed for web development."},{name:"Apache",logo:"https://images.seeklogo.com/logo-png/31/2/apache-logo-png_seeklogo-314278.png",description:"A widely used open-source web server software for hosting dynamic and static websites."},{name:"Laravel",logo:"https://logospng.org/download/laravel/logo-laravel-icon-1024.png",description:"A modern PHP framework known for its elegant syntax and powerful features."},{name:"MySQL(MariaDB)",logo:"https://github.com/devicons/devicon/raw/master/icons/mysql/mysql-original.svg",description:"A popular relational database management system based on SQL."},{name:"PostgreSQL",logo:"https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-original.svg",description:"A powerful, open-source relational database system that uses and extends the SQL language."}]},{groupName:"Development Tools",skills:[{name:"Git/Git-Flow",logo:"https://github.com/devicons/devicon/raw/master/icons/git/git-original.svg",description:"A distributed version control system used for tracking changes in source code."},{name:"GitHub",logo:"https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg",description:"A platform for version control and collaboration."},{name:"VS Code",logo:"https://iconape.com/wp-content/png_logo_vector/visual-studio-code.png",description:"A free, open-source code editor by Microsoft with support for multiple programming languages."},{name:"PHPStorm",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/PhpStorm_Icon.svg/2048px-PhpStorm_Icon.svg.png",description:"A powerful IDE for PHP development, providing advanced code editing and debugging features."},{name:"Docker",logo:"https://cdn-icons-png.flaticon.com/512/919/919853.png",description:"A platform for automating the deployment, scaling, and management of applications in isolated containers."}]}];document.addEventListener("DOMContentLoaded",function(){let t=document.getElementById("skills-container");t.innerHTML="",x.forEach((e,o)=>{setTimeout(()=>{let i=document.createElement("div");i.classList.add("skill-group"),i.style.opacity="0",i.style.transform="translateY(20px)";let s=document.createElement("h3");s.innerText=e.groupName,s.classList.add("group-title");let a=document.createElement("div");a.classList.add("skills-list"),e.skills.forEach(l=>{let n=document.createElement("div");n.classList.add("skill-card");let d=document.createElement("img");d.src=l.logo,d.alt=l.name+" logo",d.loading="lazy",d.title=l.name,d.classList.add("skill-logo");let r=document.createElement("div");r.classList.add("skill-name"),r.innerText=l.name;let c=document.createElement("div");c.classList.add("tooltip"),c.innerText=l.description,n.appendChild(d),n.appendChild(r),n.appendChild(c),a.appendChild(n)}),i.appendChild(s),i.appendChild(a),t.appendChild(i),setTimeout(()=>{i.style.transition="opacity 0.5s ease, transform 0.5s ease",i.style.opacity="1",i.style.transform="translateY(0)"},50)},o*150)}),document.addEventListener("click",function(e){if(e.target.closest(".skill-card")){let i=e.target.closest(".skill-card").querySelector(".tooltip");document.querySelectorAll(".tooltip-visible").forEach(a=>{a!==i&&a.classList.remove("tooltip-visible")}),i.classList.toggle("tooltip-visible")}else document.querySelectorAll(".tooltip-visible").forEach(o=>{o.classList.remove("tooltip-visible")})})});var P=[{title:"El Mansour Dahbi High School",year:"2019 \u2013 2020 | \u{1F1F2}\u{1F1E6} - Ksar El Kebir",description:"Completed Bac Letter with academic excellence.",logo:"https://i.pinimg.com/originals/62/f6/d3/62f6d31b45aa26e8ff54f13d90dfd489.png"},{title:"Ahmad Errachidi High School",year:"2020 \u2013 2021 | \u{1F1F2}\u{1F1E6} - Ksar El Kebir",description:"Completed Bac Science Physics with distinction.",logo:"https://i.pinimg.com/originals/62/f6/d3/62f6d31b45aa26e8ff54f13d90dfd489.png"},{title:"MIAGE Private School",year:"2021 \u2013 2023 | \u{1F1F2}\u{1F1E6} - Ksar El Kebir",description:"Earned a Computer Engineering Diploma specializing in Software and Intelligent Systems.",logo:"https://groupemiage.net/wp-content/uploads/2017/03/New-MIAGE-Logo-VSimple.png"}],_=[{title:"Municipality IT Department \u2013 Internship 1",period:"Jul 2022 \u2013 Aug 2022 | \u{1F1F2}\u{1F1E6} Ksar El Kebir",tasks:["Built a desktop application for employee contact management using VB.NET, MySQL Server, and Excel.","Designed an intuitive user interface with CRUD functionalities for efficient data management.","Implemented an automated backup system to prevent data loss.","Created data reports and visualization dashboards to aid in decision-making.","Provided training sessions for employees on using the new contact management system."],companyLogo:"https://www.argyrets.com/assets/img/communes/commune_ksar_el_kebir.jpg"},{title:"Municipality IT Department \u2013 Internship 2",period:"Jun 2023 \u2013 Jul 2023 | \u{1F1F2}\u{1F1E6} Ksar El Kebir",tasks:["Developed a fleet management website using HTML, CSS, JavaScript, PHP, and MySQL.","Implemented user authentication and role-based access control to secure the system.","Designed and optimized database schemas to handle large-scale fleet data efficiently.","Integrated Google Maps API for real-time tracking of municipal vehicles.","Conducted testing and debugging to ensure a smooth user experience before deployment."],companyLogo:"https://www.argyrets.com/assets/img/communes/commune_ksar_el_kebir.jpg"},{title:"IT Assistant \u2013 System Base (Internship)",period:"Oct 2023 \u2013 Jan 2024 | \u{1F1F2}\u{1F1E6} Tangier",tasks:["Contributed to official company website development and resolved technical issues for employees.","Assisted in server maintenance and performed troubleshooting for network-related issues.","Configured and optimized software tools to improve workflow efficiency within the company.","Provided technical support to non-technical staff and conducted IT training sessions.","Assisted in migrating company data to cloud storage and implementing cybersecurity best practices."],companyLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabyWX0PhD2aOMpJcZYFOpYYpA1IAUunuokg&s"},{title:"Full-stack Web Developer \u2013 Freelance (Remote)",period:"Feb 2024 \u2013 ongoing | \u{1F1F2}\u{1F1E6} Kenitra",tasks:["Developed responsive and scalable web applications with React, InertiaJS, Laravel, MySQL, and Tailwind CSS.","Implemented RESTful APIs endpoints to optimize data exchange between frontend and backend.","Integrated third-party payment gateways and authentication systems to enhance application security.","Optimized database queries and caching mechanisms to improve performance and scalability.","Collaborated with clients to gather requirements, design UI/UX, and deploy applications to production environments."],companyLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztai4h0flpAsLZy8zwgVRzRV8dtan9c3atMzSIKzwTn3kBaioH0BJCjPhKSmX7-CCK7s&usqp=CAU"}],D=[{title:"Command Line in Terminal",url:"https://openclassrooms.com",logo:"https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180"},{title:"Setup Development Environment",url:"https://openclassrooms.com",logo:"https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180"},{title:"Front-End Development",url:"https://openclassrooms.com",logo:"https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180"},{title:"Bootstrap Framework",url:"https://openclassrooms.com",logo:"https://tse4.mm.bing.net/th?id=OIP.4RdAsBAdR_hzO9cYT32TUwAAAA&pid=Api&P=0&h=180"},{title:"SQL Fundamentals",url:"https://olympus.mygreatlearning.com",logo:"https://d9jmtjs5r4cgq.cloudfront.net/images/branding/greatlearning-brand-v1-2.svg"},{title:"Best Final Year Project #1 (MIAGE)",url:"https://groupemiage.net",logo:"https://groupemiage.net/wp-content/uploads/2017/03/New-MIAGE-Logo-VSimple.png"},{title:"#1 Top Candidate 2021-2023 (MIAGE)",url:"https://groupemiage.net",logo:"https://groupemiage.net/wp-content/uploads/2017/03/New-MIAGE-Logo-VSimple.png"}];function j(){let t=document.getElementById("education-section");t.innerHTML="",P.forEach((e,o)=>{let i=document.createElement("div");i.classList.add("timeline-item","fade-in"),i.style.animationDelay=`${o*.2}s`,i.innerHTML=`
      <div class="timeline-header">
        <img src="${e.logo}" alt="${e.title} Logo" class="timeline-logo" />
        <div class="timeline-content">
          <h4 class="timeline-title">${e.title}</h4>
          <p class="timeline-period"><i class="bi bi-calendar-check"></i> ${e.year}</p>
          <p class="timeline-description">${e.description}</p>
        </div>
      </div>
    `,t.appendChild(i)})}function H(){let t=document.getElementById("experience-section");t.innerHTML="",_.forEach((e,o)=>{let i=document.createElement("div");i.classList.add("timeline-item","fade-in"),i.style.animationDelay=`${o*.2}s`;let s=e.tasks.map(a=>`<li>${a}</li>`).join("");i.innerHTML=`
      <div class="timeline-header">
        <img src="${e.companyLogo}" alt="${e.title} Logo" class="timeline-logo" />
        <div class="timeline-content">
          <h4 class="timeline-title">${e.title}</h4>
          <p class="timeline-period"><i class="bi bi-calendar-check"></i> ${e.period}</p>
          <ul class="timeline-tasks">${s}</ul>
        </div>
      </div>
    `,t.appendChild(i)})}function q(){let t=document.getElementById("certificates-section");t.innerHTML="",D.forEach((e,o)=>{let i=document.createElement("div");i.classList.add("certificate-card","fade-in"),i.style.animationDelay=`${o*.1}s`,i.innerHTML=`
      <img src="${e.logo}" alt="${e.title} Logo" />
      <a href="${e.url}" target="_blank" title="${e.title}">${e.title}</a>
    `,t.appendChild(i)})}function B(){let t=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&(o.target.style.opacity=1,o.target.style.transform="translateY(0)",t.unobserve(o.target))})},{threshold:.1});document.querySelectorAll(".fade-in").forEach(e=>{e.style.opacity=0,e.style.transform="translateY(20px)",e.style.transition="opacity 0.5s ease, transform 0.5s ease",t.observe(e)})}document.addEventListener("DOMContentLoaded",function(){j(),H(),q(),B()});var O=[{title:"Web Development",icon:"bi bi-browser-chrome",color:"#0078ff",description:"Beautiful, interactive websites (Front & Back end)."},{title:"Maintenance",icon:"bi bi-gear",color:"purple",description:"Ensure your site is always up-to-date and running smoothly."},{title:"SEO",icon:"bi bi-google",color:"#343a40",description:"Boost your website's visibility with essential SEO."},{title:"Design",icon:"bi bi-file-earmark-slides",color:"#e83e8c",description:"Logo, branding & other services."},{title:"Consulting",icon:"bi bi-people",color:"#28a745",description:"Expert advice to enhance your project strategies."}],R=()=>{let t=document.getElementById("services-section");t&&O.forEach((e,o)=>{let{title:i,icon:s,color:a,description:l}=e;if(!(i&&s&&a&&l))return;let n=document.createElement("div");n.classList.add("col"),n.setAttribute("data-aos","zoom-in"),n.setAttribute("data-aos-delay",""+100*(o+1)),n.innerHTML=`
      <div class="icon-box" style="--primary: ${a};">
        <div class="icon">
          <i class="bx ${s}"></i>
        </div>
        <h4>${i}</h4>
        <p>${l}</p>
      </div>
    `,t.appendChild(n)})};R();var $=[{image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/MERN-Ecommerce-App",title:"MERN E-commerce App",description:"Full-stack e-commerce site, responsive and complete",githubLink:"https://github.com/MOHAMED-LAAGUILI/MERN-Ecommerce-App"},{image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Express-ChatApp",title:"React Express ChatApp",description:"Real-time chat app with session support",githubLink:"https://github.com/MOHAMED-LAAGUILI/React-Express-ChatApp"},{image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Redux-Ecommerce-App",title:"React Redux E-commerce",description:"Enhanced e-commerce with Redux for state management",demoLink:"https://react-redux-ecommerce-app-hvhb.vercel.app/",githubLink:"https://github.com/MOHAMED-LAAGUILI/React-Redux-Ecommerce-App"},{image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Movies-Api-Sites",title:"Movies/Tv Shows Api",description:"A Movies/Tv Shows Site to See and find all specs about",demoLink:"https://react-movie-tmdb-api-app.vercel.app",githubLink:"https://github.com/MOHAMED-LAAGUILI/React-Movie-TMDBApi-App"},{image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-next-clerk-sanity-ecommerce",title:"Modern E-commerce Site",description:"E-commerce made with next clerk stripe & sanity",demoLink:"https://react-next-clerk-sanity-ecommerce.vercel.app",githubLink:"https://github.com/MOHAMED-LAAGUILI/React-Next-Clerk-Sanity-Ecommerce"},{image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-weather-api",title:"Weather App",description:"made with react and context api styled with tailwind",demoLink:"https://react-weather-api-app-ashy.vercel.app",githubLink:"https://github.com/MOHAMED-LAAGUILI/react-weather-api-app"},{image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/storyteller-openai-ts-gpt-script",title:"Ai Story Teller",description:"AI powered with agents streams live interaction uses model gpt-4o to convert words to sketch",demoLink:"https://storyteller-openai-ts-gpt-script.vercel.app",githubLink:"https://github.com/MOHAMED-LAAGUILI/storyteller-openai-ts-gpt-script"},{image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-vite-tailwind-start-template2",title:"Business Template for startups",description:"Business Template for startups made with React and tailwind modern design and enhanced With SEO and PWA",demoLink:"https://react-vite-tailwind-start-template2.vercel.app/",githubLink:"https://github.com/MOHAMED-LAAGUILI/React-Vite-Tailwind-StartTemplate2"},{image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/vite-tailwind-ui-template",title:"One UI |UI Template",description:"One UI provides a comprehensive set of tools and components to help you build beautiful, responsive, and accessible user interfaces.",demoLink:"https://one-ui-v2.vercel.app/",githubLink:"https://github.com/MOHAMED-LAAGUILI/ONE-UI"},{image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/work-flow-editor",title:"Work Flow Editor",description:"A React + Tailwind visual editor for building and managing dynamic workflows using React Flow.",demoLink:"https://work-flow-editor.vercel.app/"}];function N(){let t=document.createElement("section");t.id="portfolio",t.className="portfolio section",t.innerHTML=`
      <div class="container section-title" data-aos="fade-up">
        <h2>
          <img src="https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/blob" alt="Blob" class="blob-image" loading="lazy" title="blob gif">
          Portfolio
        </h2>
        <p class="text-muted">A showcase of my Public Personal projects</p>
      </div>
      <div class="container">
        <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200"></div>
        <span id="my-portfolio-button">
          <i class="bi bi-window-stack"></i> Other Projects Are Private ...
        </span>
      </div>
    `;let e=t.querySelector(".row.isotope-container");$.forEach(({image:i,title:s,description:a,demoLink:l,githubLink:n})=>{let d=document.createElement("div");d.className="col-lg-4 col-md-6 portfolio-item isotope-item",d.innerHTML=`
        <img src="${i}" class="img-fluid" alt="${s}">
        <div class="portfolio-info">
          <h4>${s}</h4>
          <p>${a}</p>
          <div class="portfolio-links">
            ${l?`<a href="${l}" title="Live Demo" class="details-link" target="_blank"> <i class='bi bi-eye'></i> </a>`:""}
            ${n?`<a href="${n}" title="GitHub Repository" class="details-link" target="_blank"><i class="bi bi-github"></i></a>`:""}
          </div>
        </div>
      `,e.appendChild(d)});let o=document.querySelector("#portfolio-container");o?o.appendChild(t):document.body.appendChild(t)}N();document.addEventListener("DOMContentLoaded",()=>{let t=[{name:"Mounssif BOUHLAOUI",job:"Lead Software Engineer at ALX Morocco",image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/Mounssif-BOUHLAOUI",text:`I'm 31 years old, I saw many people, I know gold people when I
       see them or their work and creativity. KEEP GOING BRO! THERE ARE 
       AMAZING OPPORTUNITIES in your way, just\xA0keep\xA0pushing\xA0\u2764`,socialLinks:{linkedin:"https://linkedin.com/in/mounssif-bouhlaoui"}},{name:"Khaoula El Fels",job:"Bachelor in Computer Science Development",image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/Khaoula-el-fels",text:`Wow, Mohamed! \u{1F389} Huge congratulations to you! 
      You\u2019re such a brilliantly innovative and endlessly 
      creative person\u2014always full of bright ideas and determination.\u{1F31F} Keep up the
       amazing work and continue to inspire everyone around you! ...`,socialLinks:{}},{name:"Ayman Rossi El Hassani",job:"Computer Science Engineer",image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/AymanRouusi",text:`Hey Mohamed! \u{1F389}Working alongside you has been nothing 
      short of inspiring. Your ideas are like sparks,
       igniting solutions and creativity in every project we\u2019ve tackled together.
        \u{1F4A1}\u{1F525} Beyond your skills, it\u2019s your kindness and collaborative spirit that 
        truly make you shine. As you embark on your career journey`,socialLinks:{linkedin:"https://www.linkedin.com/in/ayman-rossi-el-hassani-9b6714210/"}},{name:"laila MLAIJI",job:"Director at MIAGE Institution of IT",image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/laila-mlaiji",text:`Dear Mohamed, \u{1F31F} It has been an absolute honor 
      watching you grow into such a talented and driven individual.
       Your journey is a testament to your hard work, innovation,
        and the sheer determination to reach great heights. 
        As you step into the next phase of your career,`,socialLinks:{linkedin:"https://www.linkedin.com/in/laila-mlaiji-b8551615b/"}},{name:"Soufiane",job:"IT Teacher at MIAGE Institution of IT",image:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/prof-soufiane",text:`Dear Mohamed, \u{1F468}\u200D\u{1F3EB} You have always stood out, 
      not just for your academic excellence but for your 
      unquenchable thirst for knowledge and innovation. 
      Your passion, coupled with your humility and dedication, 
      has made teaching you a truly rewarding experience. `,socialLinks:{}}],e=document.getElementById("testimonial-list");t.forEach(({name:o,job:i,image:s,text:a,socialLinks:l={}})=>{let n=document.createElement("div");n.classList.add("swiper-slide"),n.innerHTML=`
       <div class="testimonial-item">
        <img src="${s}" class="testimonial-img floating mb-3 shadow" alt="${o}" loading="lazy" title="image of ${o} as ${i}" />
        <h3>${o}</h3>
        <h4>${i}</h4>
        <p>
          <i class="bx bxs-quote-alt-left quote-icon-left"></i>
          <span class="testimonial-text">${a}</span>
          <i class="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        <div class="social-links">
          ${l.linkedin?`<a href="${l.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a>`:""}
          ${l.twitter?`<a href="${l.twitter}" target="_blank"><i class="bi bi-twitter"></i></a>`:""}
        </div>
      </div>
    `;let d=n.querySelector(".show-more");d&&d.addEventListener("click",()=>{let r=a;n.querySelector(".testimonial-text").innerHTML=`
          ${r} <span class="show-less" style="color: var(--primary); cursor: pointer;">Show Less</span>
        `;let c=void 0;n.querySelector(".show-less").addEventListener("click",()=>{n.querySelector(".testimonial-text").innerHTML=truncateText(a,150)})}),e.appendChild(n)}),new Swiper(".testimonials-slider",{slidesPerView:1,spaceBetween:20,loop:!0,autoplay:{delay:6e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},speed:500})});document.addEventListener("DOMContentLoaded",function(){let t=document.getElementById("contact-form"),e=document.getElementById("form-status"),o=document.getElementById("submit-button"),i=`
      <div class="d-flex align-items-center fade show">
        <i class="bi bi-send-check"></i>
        <strong class="mx-2">Thanks!</strong> Message has been delivered \u{1F603}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `,s=`
      <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
        <i class="bi bi-x-circle-fill"></i>
        <strong class="mx-2">Error!</strong> Oops! Message failed to deliver due to an unstable connection \u{1F972}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `,a=document.querySelectorAll(".form-field input, .form-field textarea");a.forEach(n=>{n.value.trim()!==""&&n.classList.add("has-value"),n.addEventListener("focus",()=>{n.parentElement.classList.add("focused")}),n.addEventListener("blur",()=>{n.parentElement.classList.remove("focused"),n.value.trim()!==""?n.classList.add("has-value"):n.classList.remove("has-value")}),n.addEventListener("input",()=>{n.value.trim()!==""?n.classList.add("has-value"):n.classList.remove("has-value")})}),t.addEventListener("submit",async function(n){n.preventDefault(),e.innerHTML="",e.style.display="none",e.className="form-status",o.disabled=!0,o.innerHTML='<span>Sending...</span> <i class="bi bi-arrow-repeat spin"></i>';let d=new FormData(t);try{let r=await fetch(t.action,{method:t.method,body:d,headers:{Accept:"application/json"}});if(r.ok)e.innerHTML=i,e.className="form-status success",e.style.display="block",t.reset(),a.forEach(c=>c.classList.remove("has-value"));else{let c=await r.json();c.errors?e.innerHTML=c.errors.map(m=>`
                <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                  <i class="bi bi-x-circle-fill"></i>
                  <strong class="mx-2">Error!</strong> ${m.message} \u{1F972}
                  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
              `).join(""):e.innerHTML=s,e.className="form-status error",e.style.display="block"}}catch(r){e.innerHTML=`
          <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
            <i class="bi bi-x-circle-fill"></i>
            <strong class="mx-2">Error!</strong> Oops! Something went wrong: ${r.message} \u{1F972}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          </div>
        `,e.className="form-status error",e.style.display="block"}finally{o.disabled=!1,o.innerHTML='<span>Send Message</span> <i class="bi bi-send"></i>',setTimeout(()=>{document.querySelectorAll(".btn-close").forEach(c=>{c.addEventListener("click",function(){this.parentElement.style.display="none"})})},100)}});let l=document.createElement("style");l.textContent=`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .spin {
        animation: spin 1s linear infinite;
      }
      
      .alert {
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 8px;
        display: flex;
        align-items: center;
      }
      
 
      .alert-danger {
        background-color: rgba(231, 76, 60, 0.1);
        color: #e74c3c;
        border: 1px solid #e74c3c;
      }
      
      .alert i {
        font-size: 20px;
        margin-right: 10px;
      }
      
      .btn-close {
        margin-left: auto;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.3s;
      }
      
      .btn-close:hover {
        opacity: 1;
      }
    `,document.head.appendChild(l)});var U=document.getElementById("download-btn"),u=document.getElementById("cv-link");U.addEventListener("click",function(){Swal.fire({title:"Choose Language",text:"Please select your preferred language:",showCancelButton:!0,showDenyButton:!0,confirmButtonText:"\u{1F1FA}\u{1F1F8} English",denyButtonText:"\u{1F1EB}\u{1F1F7} Fran\xE7ais",cancelButtonText:"Cancel",customClass:{popup:"glass-popup"}}).then(t=>{t.isConfirmed?(Swal.fire({title:"Success!",text:"Resume in \u{1F1FA}\u{1F1F8} English will start downloading...",icon:"success",customClass:{popup:"glass-popup"}}),u.href="./assets/media/docs/pdf/CV-EN.pdf",u.click()):t.isDenied?(Swal.fire({title:"Success!",text:"CV en \u{1F1EB}\u{1F1F7} fran\xE7ais va commencer \xE0 t\xE9l\xE9charger...",icon:"success",customClass:{popup:"glass-popup"}}),u.href="./assets/media/docs/pdf/CV-FR.pdf",u.click()):Swal.fire({title:"Download Cancelled",text:"Resume won't be downloaded.",icon:"error",customClass:{popup:"glass-popup"}})})});function z(){let t=new Date().getFullYear();document.getElementById("year").textContent=t}function G(){z();let t=document.getElementById("footer-video");t&&(t.playbackRate=.5)}document.addEventListener("DOMContentLoaded",G);var F=[{className:"phone-icon floating",linkHref:"tel:+212689770809",linkClass:"cell-phone",content:'<i class="bi bi-phone"></i>',ariaLabel:null,imgSrc:null,imgAlt:null,imgTitle:null},{className:"whatsapp-icon floating",linkHref:"https://wa.me/212689770809",linkClass:null,content:null,ariaLabel:"Contact us on WhatsApp",imgSrc:"https://res.cloudinary.com/djmafhmnw/image/upload/v1735663109/Portfolio/whatsapp.svg",imgAlt:"WhatsApp icon",imgTitle:"whatsapp logo"},{className:"coffee-icon floating",linkHref:"https://www.buymeacoffee.com/mohamedlaaguili",linkClass:null,content:null,ariaLabel:"Support Me",imgSrc:"https://s3-eu-west-1.amazonaws.com/tpd/logos/5c58570cfdd26f0001068f06/0x0.png",imgAlt:"Coffee icon",imgTitle:"coffee logo"}];function Y(){let t=document.getElementById("contact-icons-container");if(!t){console.error("Container with ID 'contact-icons-container' not found.");return}F.forEach(e=>{let o=document.createElement("div");o.className=e.className;let i=document.createElement("a");if(i.href=e.linkHref,i.target="_blank",e.ariaLabel&&i.setAttribute("aria-label",e.ariaLabel),e.content)i.innerHTML=e.content,e.linkClass&&(i.className=e.linkClass);else if(e.imgSrc){let s=document.createElement("img");s.src=e.imgSrc,s.alt=e.imgAlt,s.title=e.imgTitle,s.loading="lazy",i.appendChild(s)}o.appendChild(i),t.appendChild(o)})}document.addEventListener("DOMContentLoaded",Y);var p=document.getElementById("cursor"),g=document.getElementById("cursor-ring"),K=document.querySelector("body"),y=document.querySelector(".hero"),w=document.querySelector("#footer");page404=document.querySelector("#page-404");var L,J=localStorage.getItem("cursorColor")||"#7002ee",V=localStorage.getItem("cursorRingColor")||"rgb(255, 255, 255)",W=localStorage.getItem("cursorFlareColor")||"#ffffff";function f(t,e){if(!e)return!1;let o=e.getBoundingClientRect();return t.clientX>=o.left&&t.clientX<=o.right&&t.clientY>=o.top&&t.clientY<=o.bottom}function b(t,e,o){document.documentElement.style.setProperty("--cursor-color",t),document.documentElement.style.setProperty("--cursor-ring-color",e),document.documentElement.style.setProperty("--flare-color",o)}function A(t,e,o){localStorage.setItem("cursorColor",t),localStorage.setItem("cursorRingColor",e),localStorage.setItem("cursorFlareColor",o)}function Q(t,e){L&&clearTimeout(L);let o=document.createElement("div");o.classList.add("cursor-flare"),K.appendChild(o),o.style.left=t+"px",o.style.top=e+"px",setTimeout(()=>{o.style.transform="scale(0.3)",o.style.opacity="0"},100),setTimeout(()=>{o.remove()},400)}b(J,V,W),document.addEventListener("mousemove",t=>{let e=t.pageX,o=t.pageY;p.style.left=e+"px",p.style.top=o+"px",g.style.left=e+"px",g.style.top=o+"px",Q(e,o),y&&f(t,y)||w&&f(t,w)||page404&&f(t,page404)?(b("#ffffff","rgb(255, 255, 255)","rgba(255, 255, 255, 0.7)"),A("#ffffff","","rgba(255, 255, 255, 0.7)")):(b("#7002ee","rgb(110, 27, 204)","rgba(112, 2, 238, 0.7)"),A("#7002ee","rgb(110, 27, 204)","rgba(112, 2, 238, 0.7)"))});var X=document.querySelectorAll(".hover-target");X.forEach(t=>{t.addEventListener("mouseenter",()=>{p.style.transform="scale(2)",p.style.backgroundColor="#4d01a5",g.style.transform="scale(2)"}),t.addEventListener("mouseleave",()=>{p.style.transform="scale(1)",p.style.backgroundColor="white",g.style.transform="scale(1)"})});})();

const navItems=[{href:"#hero",icon:"https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/512x512",label:"Home",isImage:!0},{href:"#about",icon:"bx bx-user",label:"About",isImage:!1},{href:"#achievements",icon:"bi bi-trophy",label:"Achievements",isImage:!1},{href:"#skills",icon:"bi bi-stack",label:"Skills",isImage:!1},{href:"#resume",icon:"bi bi-file-earmark-arrow-down",label:"Resume",isImage:!1},{href:"#services",icon:"bx bx-crosshair",label:"Services",isImage:!1},{href:"#portfolio",icon:"bi bi-window-stack",label:"Projects",isImage:!1},{href:"#testimonials",icon:"bx bx-comment",label:"Testimonials",isImage:!1},{href:"#contact",icon:"bi bi-send",label:"Contact",isImage:!1}],navMenu=document.getElementById("nav-menu");navItems.forEach(item=>{const li=document.createElement("li");li.innerHTML=`\n      <a href="${item.href}" class="nav-link scrollto">\n        ${item.isImage?`<img src="${item.icon}" class="rounded-pill floating-img" width="48px" \n           alt="${item.label}" loading="lazy" title="logo" style="transform: translateX(-15px);" />`:`<i class="${item.icon}"></i>`}\n        <span>${item.label}</span>\n      </a>\n    `,navMenu.appendChild(li)});
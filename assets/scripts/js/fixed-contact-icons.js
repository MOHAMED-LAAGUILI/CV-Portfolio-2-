// Array of contact icon objects with their attributes
const contactIcons = [
    {
      className: "phone-icon",
      linkHref: "tel:+212689770809",
      linkClass: "cell-phone",
      content: '<i class="bi bi-phone"></i>',
      ariaLabel: null, // No aria-label for this one
      imgSrc: null, // No image for this one
      imgAlt: null,
      imgTitle: null,
    },
    {
      className: "whatsapp-icon",
      linkHref: "https://wa.me/212689770809", // Corrected to WhatsApp link
      linkClass: null,
      content: null,
      ariaLabel: "Contact us on WhatsApp",
      imgSrc: "https://res.cloudinary.com/djmafhmnw/image/upload/v1735663109/Portfolio/whatsapp.svg",
      imgAlt: "WhatsApp icon",
      imgTitle: "whatsapp logo",
    },
    {
      className: "coffee-icon",
      linkHref: "https://www.buymeacoffee.com/mohamedlaaguili", // Corrected to Buy Me a Coffee link
      linkClass: null,
      content: null,
      ariaLabel: "Support Me",
      imgSrc: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5c58570cfdd26f0001068f06/0x0.png",
      imgAlt: "Coffee icon",
      imgTitle: "coffee logo",
    },
  ];
  
  // Function to render contact icons
  function renderContactIcons() {
    const container = document.getElementById("contact-icons-container");
    if (!container) {
      console.error("Container with ID 'contact-icons-container' not found.");
      return;
    }
  
    // Loop over the contactIcons array and create elements
    contactIcons.forEach((icon) => {
      // Create the icon div
      const iconDiv = document.createElement("div");
      iconDiv.className = icon.className;
  
      // Create the link
      const link = document.createElement("a");
      link.href = icon.linkHref;
      link.target = "_blank"; // All links open in new tab
      if (icon.ariaLabel) link.setAttribute("aria-label", icon.ariaLabel);
  
      // Add content (either innerHTML or img)
      if (icon.content) {
        link.innerHTML = icon.content;
        if (icon.linkClass) link.className = icon.linkClass;
      } else if (icon.imgSrc) {
        const img = document.createElement("img");
        img.src = icon.imgSrc;
        img.alt = icon.imgAlt;
        img.title = icon.imgTitle;
        img.loading = "lazy";
        link.appendChild(img);
      }
  
      // Append link to icon div
      iconDiv.appendChild(link);
  
      // Append icon div to container
      container.appendChild(iconDiv);
  
    });
}
  
  // Call the function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", renderContactIcons);
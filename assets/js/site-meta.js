(function() {
    // SEO meta tags
    const metaTags = [
      { name: "charset", content: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "version", content: "2.0" },
      { name: "theme-color", content: "#7002EE" },
      { name: "description", content: "Full-Stack Web Developer, with 1 year of experience in freelance in both front/back end development with (Javascript-ReactJS) and backend development with( NodeJs/ExpressJs )" },
      { name: "keywords", content: "mohamed laaguili, MOHAMED, LAAGUILI, laaguili.com" },
      { property: "og:title", content: "MOHAMED-LAAGUILI" },
      { property: "og:description", content: "Full Stack Web Developer" },
      { property: "og:image", content: "https://laaguili-dev.app.genez.io/assets/img/favicon.png" },
      { property: "og:url", content: "https://laaguili-dev.app.genez.io/" },
      { property: "og:type", content: "portfolio" },
      { name: "google-site-verification", content: "VA9kFMdnoKRD0vpD3kFmkriet_hrP3LZ5O599r8LNIM" }
    ];
  
    // Function to create and append meta tags
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) {
        meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
      } else if (tag.property) {
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
      }
      document.head.appendChild(meta);
    });
  
    // Add link to the manifest file
    const manifestLink = document.createElement('link');
    manifestLink.setAttribute('rel', 'manifest');
    manifestLink.setAttribute('href', './manifest.json');
    document.head.appendChild(manifestLink);
  
    // Favicon
    const faviconLink = document.createElement('link');
    faviconLink.setAttribute('rel', 'icon');
    faviconLink.setAttribute('type', 'image/png');
    faviconLink.setAttribute('href', './assets/img/favicon.png');
    document.head.appendChild(faviconLink);
  
    // Apple touch icon
    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.setAttribute('rel', 'apple-touch-icon');
    appleTouchIcon.setAttribute('href', './assets/img/favicon.png');
    document.head.appendChild(appleTouchIcon);
  })();
  
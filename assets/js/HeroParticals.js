particlesJS("particles-js", {
  particles: {
    number: {
      value: 150, // Increased the number of particles for denser coverage
      density: {
        enable: true,
        value_area: 1500, // Increased the area of effect
      },
    },
    color: {
      value: "#ffffff", // White color for a clean aesthetic, can also be changed to gradient
    },
    shape: {
      type: ["circle", "triangle", "edge"], // Adding different shapes for more complexity
      stroke: {
        width: 0,
        color: "#ffffff",
      },
    },
    opacity: {
      value: 0.6, // Slightly higher opacity for visibility
      random: true,
      anim: {
        enable: true,
        speed: 2, // More fluid opacity changes
        opacity_min: 0.2,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 50, // Faster size change for a more dynamic look
        size_min: 1,
      },
    },
    line_linked: {
      enable: true,
      distance: 100, // Shorter distance for more connected look
      color: "#ffffff",
      opacity: 0.5,
      width: 2, // Thicker lines to enhance the connections
    },
    move: {
      enable: true,
      speed: 6, // Moderate speed for movement
      direction: "none",
      random: true, // Random movement for a natural look
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true, // Enable attraction for particles to simulate gravity
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab", // "grab" effect for a more gentle, interactive feeling
      },
      onclick: {
        enable: true,
        mode: "push", // Push more particles on click for a fun interaction
      },
      resize: true,
    },
  },
  retina_detect: true,
  background: {
    color: "#000000", // Dark background to make the particles stand out more
    image: "url('https://path/to/your/background-image.jpg')", // Optional background image
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  particles: {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 1200
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "polygon", // Complex shape for variation
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      }
    },
    "opacity": {
      "value": 0.8, // Increased opacity for cleaner visibility
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "opacity_min": 0.1
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 40,
        "size_min": 0.5
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 7,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "retina_detect": true,
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    }
  }
});

/*
// old version
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // Increased the number of particles for more density
      density: {
        enable: true,
        value_area: 1000, // More area coverage for particles
      },
    },
    color: {
      value: "#ffffff", // Keeps it white for clarity, but you could opt for gradients or soft colors
    },
    shape: {
      type: "circle", // Consistent with the original choice
      stroke: {
        width: 0, // No stroke for a cleaner look
        color: "#fff", // Slightly different stroke color for subtlety
      },
    },
    opacity: {
      value: 0.7, // Slightly more opacity for clearer particles
      random: true,
      anim: {
        enable: true,
        speed: 1.5, // Slightly slower animation for smooth transitions
        opacity_min: 0.2, // Reduced the minimum opacity for a more varied effect
      },
    },
    size: {
      value: 5, // Larger particles for more presence
      random: true,
      anim: {
        enable: true,
        speed: 30,
        size_min: 1, // Minimum size is still visible but subtle
      },
    },
    line_linked: {
      enable: true,
      distance: 120, // Slightly closer lines for a more connected look
      color: "#ffffff", // White lines keep the overall aesthetic clean
      opacity: 0.5, // Slightly more visible lines
      width: 1.5, // Reduced width for a more delicate feel
    },
    move: {
      enable: true,
      speed: 4, // Slower movement for smoother animation
      direction: "none",
      random: true, // Random movement for a more natural feel
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Repulse effect on hover for interactivity
      },
      onclick: {
        enable: true,
        mode: "push", // Particles pushed on click for a dynamic effect
      },
      resize: true, // Ensures particles adjust to screen size
    },
  },
  retina_detect: true, // Ensures quality on retina displays
});

*/
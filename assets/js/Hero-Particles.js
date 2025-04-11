/* eslint-disable no-undef */
particlesJS("particles-js", {
  particles: {
    number: { value: 150, density: { enable: !0, value_area: 1500 } },
    color: { value: "#ffffff" },
    shape: {
      type: ["circle", "triangle", "edge"],
      stroke: { width: 0, color: "#ffffff" },
    },
    opacity: {
      value: 0.6,
      random: !0,
      anim: { enable: !0, speed: 2, opacity_min: 0.2 },
    },
    size: {
      value: 5,
      random: !0,
      anim: { enable: !0, speed: 50, size_min: 1 },
    },
    line_linked: {
      enable: !0,
      distance: 100,
      color: "#ffffff",
      opacity: 0.5,
      width: 2,
    },
    move: {
      enable: !0,
      speed: 6,
      direction: "none",
      random: !0,
      straight: !1,
      out_mode: "out",
      bounce: !1,
      attract: { enable: !0, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: !0, mode: "grab" },
      onclick: { enable: !0, mode: "push" },
      resize: !0,
    },
  },
  retina_detect: !0,
  background: {
    color: "#000000",
    image: "url('https://path/to/your/background-image.jpg')",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  particles: {
    number: { value: 150, density: { enable: !0, value_area: 1200 } },
    color: { value: "#ffffff" },
    shape: { type: "polygon", stroke: { width: 0, color: "#ffffff" } },
    opacity: {
      value: 0.8,
      random: !0,
      anim: { enable: !0, speed: 2, opacity_min: 0.1 },
    },
    size: {
      value: 6,
      random: !0,
      anim: { enable: !0, speed: 40, size_min: 0.5 },
    },
    line_linked: {
      enable: !0,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: !0,
      speed: 7,
      direction: "none",
      random: !0,
      straight: !1,
      out_mode: "out",
      bounce: !1,
      attract: { enable: !0, rotateX: 600, rotateY: 600 },
    },
  },
  retina_detect: !0,
  interactivity: {
    events: {
      onhover: { enable: !0, mode: "repulse" },
      onclick: { enable: !0, mode: "push" },
    },
  },
});


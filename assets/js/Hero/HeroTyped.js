document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector(".typed.hello");
  if (e) {
    const t = e.getAttribute("data-typed-items").split(",");
    new Typed(".typed.hello", {
      strings: t,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1e3,
      loop: !0,
    });
  }
  const t = document.querySelector(".typed.roles");
  if (t) {
    const e = t.getAttribute("data-typed-items").split(",");
    new Typed(".typed.roles", {
      strings: e,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: !0,
    });
  }
});

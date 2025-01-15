!(function () {
  "use strict";
  const e = (e, t = !1) => (
      (e = e.trim()),
      t ? [...document.querySelectorAll(e)] : document.querySelector(e)
    ),
    t = (e, t) => {
      e.addEventListener("scroll", t);
    };
  let n = e(".back-to-top");
  if (n) {
    const e = () => {
      window.scrollY > 100
        ? n.classList.add("active")
        : n.classList.remove("active");
    };
    window.addEventListener("load", e), t(document, e);
  }
  let o = e("#preloader");
  o &&
    window.addEventListener("load", () => {
      o.remove();
    }),
    window.addEventListener("load", () => {
      AOS.init({ duration: 650, easing: "ease-in-out", once: !0, mirror: !1 });
    }),
    (window.utils = {
      t: e,
      e: (t, n, o, d = !1) => {
        let i = e(n, d);
        i &&
          (d
            ? i.forEach((e) => e.addEventListener(t, o))
            : i.addEventListener(t, o));
      },
      o: t,
    });

    new PureCounter()
})();

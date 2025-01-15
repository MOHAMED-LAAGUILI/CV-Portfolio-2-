!(function () {
    "use strict";
    const { t: e, e: i, o: s } = window.utils;
    let t = e("#navbar .scrollto", !0);
    const o = () => {
      let i = window.scrollY + 200;
      t.forEach((s) => {
        if (!s.hash) return;
        let t = e(s.hash);
        t &&
          (i >= t.offsetTop && i <= t.offsetTop + t.offsetHeight
            ? s.classList.add("active")
            : s.classList.remove("active"));
      });
    };
    window.addEventListener("load", o), s(document, o);
    const a = (i) => {
      let s = e(i).offsetTop;
      window.scrollTo({ top: s, behavior: "smooth" });
    };
    i("click", ".mobile-nav-toggle", function (i) {
      e("body").classList.toggle("mobile-nav-active"),
        this.classList.toggle("bi-list"),
        this.classList.toggle("bi-x");
    }),
      i(
        "click",
        ".scrollto",
        function (i) {
          if (e(this.hash)) {
            i.preventDefault();
            let s = e("body");
            if (s.classList.contains("mobile-nav-active")) {
              s.classList.remove("mobile-nav-active");
              let i = e(".mobile-nav-toggle");
              i.classList.toggle("bi-list"), i.classList.toggle("bi-x");
            }
            a(this.hash);
          }
        },
        !0
      ),
      window.addEventListener("load", () => {
        window.location.hash &&
          e(window.location.hash) &&
          a(window.location.hash);
      });
  })();
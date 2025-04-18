/* eslint-disable no-undef */
const btn = document.getElementById("download-btn"),
  cvLink = document.getElementById("cv-link");
btn.addEventListener("click", function () {
  Swal.fire({
    title: "Choose Language",
    text: "Please select your preferred language:",
    showCancelButton: !0,
    showDenyButton: !0,
    confirmButtonText: "🇺🇸 English",
    denyButtonText: "🇫🇷 Français",
    cancelButtonText: "Cancel",
    customClass: { popup: "glass-popup" },
  }).then((result) => {
    result.isConfirmed
      ? (Swal.fire({
          title: "Success!",
          text: "Resume in 🇺🇸 English will start downloading...",
          icon: "success",
          customClass: { popup: "glass-popup" },
        }),
        (cvLink.href = "./assets/media/docs/pdf/CV-EN.pdf"),
        cvLink.click())
      : result.isDenied
      ? (Swal.fire({
          title: "Success!",
          text: "CV en 🇫🇷 français va commencer à télécharger...",
          icon: "success",
          customClass: { popup: "glass-popup" },
        }),
        (cvLink.href = "./assets/media/docs/pdf/CV-FR.pdf"),
        cvLink.click())
      : Swal.fire({
          title: "Download Cancelled",
          text: "Resume won't be downloaded.",
          icon: "error",
          customClass: { popup: "glass-popup" },
        });
  });
});

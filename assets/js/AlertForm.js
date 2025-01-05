const btn = document.getElementById("download-btn");
const cvLink = document.getElementById("cv-link");
btn.addEventListener("click", function () {
    Swal.fire({
        title: "Choose Language",
        text: "Please select your preferred language:",
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: "🇺🇸 English",
        denyButtonText: "🇫🇷 Français",
        cancelButtonText: "Cancel",
        customClass: {
            popup: "glass-popup", // Custom class for glass effect
        },
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Success!",
                text: "Resume in 🇺🇸 English will start downloading...",
                icon: "success",
                customClass: { popup: "glass-popup" },
            });
            cvLink.href = "./assets/docs/CV-EN.pdf";
            cvLink.click();
        } else if (result.isDenied) {
            Swal.fire({
                title: "Success!",
                text: "CV en 🇫🇷 français va commencer à télécharger...",
                icon: "success",
                customClass: { popup: "glass-popup" },
            });
            cvLink.href = "./assets/docs/CV-FR.pdf";
            cvLink.click();
        } else {
            Swal.fire({
                title: "Download Cancelled",
                text: "Resume won't be downloaded.",
                icon: "error",
                customClass: { popup: "glass-popup" },
            });
        }
    });
});
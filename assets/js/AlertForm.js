const btn = document.getElementById("download-btn");
const cvLink = document.getElementById("cv-link");

btn.addEventListener("click", function () {
    swal({
        title: "Choose Language",
        text: "Please select your preferred language:",
        buttons: {
            english: {
                text: "English",
                value: "English",
            },
            french: {
                text: "Français",
                value: "Français",
            },
            cancel: true,
        },
    })
    .then((value) => {
        switch (value) {
            case "English":
                swal("Success!", "Your CV in English will start downloading...", "success");
                cvLink.href = "./assets/docs/CV-EN.pdf"; // Set the English CV link
                cvLink.click(); // Trigger download
                break;
            case "Français":
                swal("Success!", "Votre CV en français va commencer à télécharger...", "success");
                cvLink.href = "./assets/docs/CV-FR.pdf"; // Set the French CV link
                cvLink.click(); // Trigger download
                break;
            default:
                swal("Download Cancelled", "Your CV will not be downloaded.", "error");
        }
    });
});
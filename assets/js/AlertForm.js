document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById("download-btn");
    const resumeModal = document.getElementById("resumeModal");
    const confirmationModal = document.getElementById("confirmationModal");
    const closeButtons = document.getElementsByClassName("close");

    let currentDownloadUrl = '';
    let currentDownloadFilename = '';

    function openModal(modal) {
        modal.style.display = "block";
        document.body.classList.add("modal-open"); // Prevent body scroll
    }

    function closeModal(modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Allow body scroll
    }

    function closeAllModals() {
        closeModal(resumeModal);
        closeModal(confirmationModal);
    }

    downloadBtn.onclick = function() {
        openModal(resumeModal);
    }

    for (let closeButton of closeButtons) {
        closeButton.onclick = function() {
            closeAllModals();
        }
    }

    window.onclick = function(event) {
        if (event.target == resumeModal || event.target == confirmationModal) {
            closeAllModals();
        }
    }

    function viewResume(url) {
        window.open(url, "_blank");
    }

    function downloadResume(url, filename) {
        currentDownloadUrl = url;
        currentDownloadFilename = filename;
        closeModal(resumeModal);
        openModal(confirmationModal);
    }

    function confirmDownload() {
        const link = document.createElement('a');
        link.href = currentDownloadUrl;
        link.download = currentDownloadFilename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        closeAllModals();
    }

    document.getElementById("view-en").addEventListener("click", function() {
        viewResume("./assets/docs/CV-EN.pdf");
    });

    document.getElementById("download-en").addEventListener("click", function() {
        downloadResume("./assets/docs/CV-EN.pdf", "CV-EN.pdf");
    });

    document.getElementById("view-fr").addEventListener("click", function() {
        viewResume("./assets/docs/CV-FR.pdf");
    });

    document.getElementById("download-fr").addEventListener("click", function() {
        downloadResume("./assets/docs/CV-FR.pdf", "CV-FR.pdf");
    });

    document.getElementById("confirmDownload").addEventListener("click", confirmDownload);

    document.getElementById("cancelDownload").addEventListener("click", function() {
        closeAllModals();
    });
});

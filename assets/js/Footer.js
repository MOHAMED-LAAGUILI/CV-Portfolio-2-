function updateFooterDate() {
    const now = new Date();
    const year = now.getFullYear();
    document.getElementById('year').textContent = year;
}

function initFooter() {
    updateFooterDate();

    const footerVideo = document.getElementById('footer-video');
    footerVideo.playbackRate = 0.5; // Slow down the video for a more subtle effect
}

document.addEventListener('DOMContentLoaded', initFooter);
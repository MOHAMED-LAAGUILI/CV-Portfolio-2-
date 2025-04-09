function updateFooterDate() {
    const year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
  }
  
  function initFooter() {
    updateFooterDate();
    
    // Ensure the video element exists before accessing it
    const footerVideo = document.getElementById("footer-video");
    
    if (footerVideo) {
      footerVideo.playbackRate = 0.5;
    }
  }
  
  document.addEventListener("DOMContentLoaded", initFooter);
  
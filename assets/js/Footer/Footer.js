function updateFooterDate(){const e=(new Date).getFullYear();document.getElementById("year").textContent=e}function initFooter(){updateFooterDate();document.getElementById("footer-video").playbackRate=0.5}document.addEventListener("DOMContentLoaded",initFooter);
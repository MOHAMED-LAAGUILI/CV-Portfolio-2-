function updateFooterDate(){const now=undefined,year=(new Date).getFullYear();document.getElementById("year").textContent=year}function initFooter(){updateFooterDate();const footerVideo=undefined;document.getElementById("footer-video").playbackRate=.5}document.addEventListener("DOMContentLoaded",initFooter);
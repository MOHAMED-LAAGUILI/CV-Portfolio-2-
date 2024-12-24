const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
const body = document.querySelector('body');
const heroSection = document.querySelector('.hero');

let cursorFlareTimeout;

// Check localStorage for cursor color preference
let cursorColor = localStorage.getItem('cursorColor') || '#eee'; // Default to purple if not found
let ringColor = localStorage.getItem('cursorRingColor') || 'rgb(255, 255, 255)';
let flareColor = localStorage.getItem('cursorFlareColor') || 'rgba(255, 255, 255, 0.7)';

// Apply stored or default colors
updateCursorColors(cursorColor, ringColor, flareColor);

// Function to update the cursor position on mousemove
document.addEventListener('mousemove', (e) => {
  const cursorX = e.pageX;
  const cursorY = e.pageY;

  // Move the cursor and ring to follow the mouse
  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;
  cursorRing.style.left = `${cursorX}px`;
  cursorRing.style.top = `${cursorY}px`;

  // Create the flare effect at the cursor position
  createCursorFlare(cursorX, cursorY);

  // Check if the cursor is inside or outside the hero section
  if (heroSection && isCursorInHero(e)) {
    // Set colors to white when inside the hero section
    updateCursorColors('#eee', 'rgb(255, 255, 255)', 'rgba(255, 255, 255, 0.7)');
    saveCursorColors('#eee', '', 'rgba(255, 255, 255, 0.7)');
  } else {
    updateCursorColors('#fff', 'rgb(110, 27, 204)', 'rgba(112, 2, 238, 0.7)');
    saveCursorColors('#fff', 'rgb(110, 27, 204)', 'rgba(112, 2, 238, 0.7)');
    // Set colors to purple when outside the hero section
  }
});

// Function to check if the cursor is inside the hero section
function isCursorInHero(event) {
  if (!heroSection) return false; // Early exit if heroSection doesn't exist

  const heroRect = heroSection.getBoundingClientRect();
  return (
    event.clientX >= heroRect.left &&
    event.clientX <= heroRect.right &&
    event.clientY >= heroRect.top &&
    event.clientY <= heroRect.bottom
  );
}

// Function to update cursor, ring, and flare colors
function updateCursorColors(cursorColor, ringColor, flareColor) {
  document.documentElement.style.setProperty('--cursor-color', cursorColor);
  document.documentElement.style.setProperty('--cursor-ring-color', ringColor);
  document.documentElement.style.setProperty('--flare-color', flareColor);
}

// Function to save cursor colors in localStorage
function saveCursorColors(cursorColor, ringColor, flareColor) {
  localStorage.setItem('cursorColor', cursorColor);
  localStorage.setItem('cursorRingColor', ringColor);
  localStorage.setItem('cursorFlareColor', flareColor);
}

// Function to create a short flare tail effect
function createCursorFlare(x, y) {
  if (cursorFlareTimeout) clearTimeout(cursorFlareTimeout);

  const flare = document.createElement('div');
  flare.classList.add('cursor-flare');
  body.appendChild(flare);

  flare.style.left = `${x}px`;
  flare.style.top = `${y}px`;

  // Animate the flare to shrink and fade out
  setTimeout(() => {
    flare.style.transform = 'scale(0.3)';
    flare.style.opacity = '0';
  }, 100);

  setTimeout(() => {
    flare.remove();
  }, 400); // Remove the flare after it fades out
}

// Add hover effect on target elements
const hoverElements = document.querySelectorAll('.hover-target');
hoverElements.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    cursor.style.backgroundColor = '#4d01a5';  // Change color
    cursorRing.style.transform = 'scale(2)';
  });

  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.backgroundColor = 'white';  // Reset color to white
    cursorRing.style.transform = 'scale(1)';
  });
});

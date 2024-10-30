function updateFooterDate() {
    const now = new Date();
    
    // Display the current year
    const year = now.getFullYear();
    document.getElementById('year').textContent = year;

    // Function to update the current time every second
    function updateCurrentTime() {
      const options = { weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      const timeString = now.toLocaleString('en-US', options);
      document.getElementById('current-time').textContent = `Today: ${timeString}`;
    }

    // Update time immediately
    updateCurrentTime();
    
    // Update time every second
    setInterval(() => {
      now.setSeconds(now.getSeconds() + 1);
      updateCurrentTime();
    }, 1000);
  }

  // Call the function on page load
  updateFooterDate();
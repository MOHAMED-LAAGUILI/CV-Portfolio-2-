function setupErrorHandling() {
    // Listen for clicks on anchor tags
    document.body.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            const url = event.target.getAttribute('href');
            fetch(url, { method: 'HEAD' }) // Test the link
                .then((response) => {
                    if (!response.ok) {
                        // Redirect to 404.html for broken URLs
                        window.location.href = '404.html';
                    }
                })
                .catch(() => {
                    // Handle fetch errors (e.g., network issues)
                    window.location.href = '404.html';
                });

            // Prevent the browser from following the link immediately
            event.preventDefault();
        }
    });
}

// Initialize error handling
setupErrorHandling();

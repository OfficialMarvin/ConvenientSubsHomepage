document.addEventListener('DOMContentLoaded', function() {
    // Example of dynamic content update
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Year().getFullYear();
    }
    // Additional interactivity can be added here
});

function initializeTheme() {
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('site-theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update body attribute
    document.body.setAttribute('data-theme', newTheme);
    
    // Save preference
    localStorage.setItem('site-theme', newTheme);
    
    // Update button text if it exists
    const themeText = document.querySelector('.theme-text');
    if (themeText) {
        themeText.textContent = `Switch to ${newTheme === 'light' ? 'Dark' : 'Light'} Mode`;
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme); 
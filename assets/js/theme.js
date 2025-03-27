// Initialize theme
(function() {
    const savedTheme = localStorage.getItem('site-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Listen for theme changes
    window.addEventListener('themeChange', (e) => {
        document.documentElement.setAttribute('data-theme', e.detail);
    });
    
    // Apply saved theme on page load
    window.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('site-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
    });
})(); 

// Apply theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('site-theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
}); 
function toggleTheme() {
    var currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
}
if (!document.body.hasAttribute('data-theme')) {
    document.body.setAttribute('data-theme', 'light');
}
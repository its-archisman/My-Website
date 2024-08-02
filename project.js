console.log('JavaScript file loaded');
function toggleTheme() {
    console.log("TOggling theme")
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
document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("collapsible");
    console.log("HERE")
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display != "none") {
                content.style.display = "none";
                console.log("--------")
            } else {
                content.style.display = "block";
                console.log("FFFFFFFFFFF")
            }
        });
    }
});

// LOADING THEME
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    console.log("yes in theme.js");
    document.body.classList.add(savedTheme.toLowerCase() + "-theme");
}
else {
    console.log("no in theme.js");
    localStorage.setItem("theme", "classic");
    document.body.classList.add("classic-theme");
}

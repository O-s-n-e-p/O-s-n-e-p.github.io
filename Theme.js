// LOADING THEME
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    console.log("yes in theme.js");
    document.documentElement.classList.add(savedTheme.toLowerCase() + "-theme");
}
else {
    console.log("no in theme.js");
    localStorage.setItem("theme", "classic");
    document.documentElement.classList.add("classic-theme");
}

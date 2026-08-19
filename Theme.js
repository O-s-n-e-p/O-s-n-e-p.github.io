const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    console.log("yes in theme.js");
    document.body.classList.add(savedTheme.toLowerCase() + "-theme");
}


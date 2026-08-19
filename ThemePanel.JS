// ========================================
// THEME PANEL
// ========================================

document.addEventListener("click", (event) => {

    const startButton = event.target.closest("#start-button");
    const themePanel = document.getElementById("theme-panel");

    if (!themePanel) return;


    // Start button clicked
    if (startButton) {

        event.stopPropagation();

        themePanel.classList.toggle("open");

        return;
    }


    // Theme option clicked
    const themeOption = event.target.closest(".theme-option");

    if (themeOption) {
        const oldTheme = localStorage.getItem("theme");
        const theme = themeOption.dataset.theme;

        console.log("Selected theme:", theme);
        localStorage.setItem("theme", theme);
        

        

        if (theme === "classic") {
            document.body.classList.add("classic-theme");
        }
        else if (theme === "winter") {
            document.body.classList.add("winter-theme");
        }
        else if (theme === "fortnite") {
            document.body.classList.add("fortnite-theme");
        }
        else if (theme === "halo") {
            document.body.classList.add("halo-theme");
        }
        else if (theme === "minecraft") {
            document.body.classList.add("minecraft-theme");
        }
        if(oldTheme !== theme) {
            document.body.classList.remove(oldTheme+"-theme");
        }
        return;
    }

    // Click anywhere outside the panel
    if (!themePanel.contains(event.target)) {

        themePanel.classList.remove("open");

    }

});

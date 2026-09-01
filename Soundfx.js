// Menu sound effects
const hoverSound = new Audio("/audio/navigation_soundfx/Select.mp3");
const clickSound = new Audio("/audio/navigation_soundfx/press.mp3");

hoverSound.volume = 0.3;
clickSound.volume = 0.3;


// HOVER SOUND
document.addEventListener("mouseover", (event) => {

    const button = event.target.closest(
        ".nav-active, .nav-inactive, #start-button, .taskbar-icon, .theme-option"
    );

    if (!button) return;

    // Prevent the sound from triggering again when
    // moving between elements inside the same button
    if (event.relatedTarget && button.contains(event.relatedTarget)) {
        return;
    }

    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {});

});


// CLICK SOUND
document.addEventListener("click", (event) => {

    const button = event.target.closest(
        ".nav-active, .nav-inactive, #start-button, .taskbar-icon, .theme-option"
    );
    if (!button) return;

    const isNavLink = button.matches(".nav-active, .nav-inactive");
    if (isNavLink) {
        event.preventDefault();
    }

    clickSound.currentTime = 0;
    clickSound.play()
        .then(() => console.log("Playing click sound"))
        .catch(error => console.log("Audio error:", error));

    if (isNavLink) {
        setTimeout(() => {
            window.location.href = button.href;
        }, 700);
    }

});

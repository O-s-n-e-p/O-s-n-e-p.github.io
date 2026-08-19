const SCHEDULE_BUTTON = document.getElementById("scheduleButton");
const SCHEDULE_WINDOW = document.getElementById("scheduleWindow");
const SCHEDULE_CLOSE_BUTTON = document.getElementById("scheduleCloseButton");


SCHEDULE_BUTTON.addEventListener("click", () => {

    SCHEDULE_WINDOW.classList.toggle("open");

});


SCHEDULE_CLOSE_BUTTON.addEventListener("click", () => {

    SCHEDULE_WINDOW.classList.remove("open");

});

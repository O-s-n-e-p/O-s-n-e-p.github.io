// Bottom Taskbar
class Taskbar extends HTMLElement {
    connectedCallback() {
        fetch("/Shared_btwn_pages_html/taskbar.html")
            .then(res => res.text())
            .then(html => this.innerHTML = html);
    }
}
customElements.define("task-bar", Taskbar);




// Sliding Text at top
class Slider extends HTMLElement {
    connectedCallback() {
        fetch("/Shared_btwn_pages_html/scrollingtext.html")
            .then(res => res.text())
            .then(html => this.innerHTML = html);
    }
}
customElements.define("scrolling-text", Slider);




// Schedule
class Schedule extends HTMLElement {
    connectedCallback() {
        fetch("/Shared_btwn_pages_html/schedule.html")
            .then(res => res.text())
            .then(html => this.innerHTML = html);
    }
}
customElements.define("schedule-text", Schedule);



// Theme Panel
class ThemePanel extends HTMLElement {
    connectedCallback() {
        fetch("/Shared_btwn_pages_html/theme_panel.html")
            .then(res => res.text())
            .then(html => this.innerHTML = html);
    }
}
customElements.define("theme-panel", ThemePanel);

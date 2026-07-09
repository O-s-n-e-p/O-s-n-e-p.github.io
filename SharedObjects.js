// Bottom Taskbar
class Taskbar extends HTMLElement {
    connectedCallback() {
        fetch("taskbar.html")
            .then(res => res.text())
            .then(html => this.innerHTML = html);
    }
}
customElements.define("task-bar", Taskbar);




// Sliding Text at top
class Slider extends HTMLElement {
    connectedCallback() {
        fetch("scrollingtext.html")
            .then(res => res.text())
            .then(html => this.innerHTML = html);
    }
}
customElements.define("scrolling-text", Slider);

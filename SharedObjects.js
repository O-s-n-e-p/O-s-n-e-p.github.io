// Bottom Taskbar
class Taskbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
            <div id="vista-taskbar">
                <button id="start-button">
                    <img src="./images/nobackstart.png" alt="">
                </button>

                <div id="taskbar-programs">
                    <button id="scheduleButton" class="taskbar-icon">
                        <img src="./Archive_files/schedule_icon.png" alt="">
                    </button>
                </div>
            </div>
        
        
        
        
        `;
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
        this.innerHTML = `
        
            <div id="scheduleWindow" class="schedule-window">

                <div class="schedule-header">
                    <span>schedule.exe</span>

                    <button id="scheduleCloseButton" class="schedule-close">
                        ×
                    </button>
                </div>


                <div class="schedule-content">

                    <!-- ================= SUMMER ================= -->

                    <section class="schedule-section">

                        <h2>Summer [May-August]</h2>

                        <!-- Weekday -->
                        <div class="schedule-row">

                            <div class="day-label">
                                
                            </div>

                            <div class="schedule-cell">9 AM</div>
                            <div class="schedule-cell">10 AM</div>
                            <div class="schedule-cell">11 AM</div>
                            <div class="schedule-cell">12 - 7 PM</div>
                            <div class="schedule-cell">8 PM</div>
                            <div class="schedule-cell">9 - 10 PM</div>
                            <div class="schedule-cell">11 PM</div>
                            <div class="schedule-cell">12 AM</div>

                        </div>


                        <!-- Everyday -->
                        <div class="schedule-row">

                            <div class="day-label">
                                Everyday
                            </div>

                            <div class="schedule-cell">Wake</div>
                            <div class="schedule-cell">To-do List</div>
                            <div class="schedule-cell">Break fast <br> Meditate</div>
                            <div class="schedule-cell">To-do List</div>
                            <div class="schedule-cell">Meditate <br> Dinner <br> Meditate</div>
                            <div class="schedule-cell">Brush Teeth <br> Go to Parking lot</div>
                            <div class="schedule-cell">To-do List<br>Water Early</div>
                            <div class="schedule-cell">Sleep</div>

                        </div>

                    </section>


                    <!-- ================= SCHOOL YEAR ================= -->

                    <section class="schedule-section">

                        <h2>School Year [September-April]</h2>

                        <!-- Weekday -->
                        <div class="schedule-row">

                            <div class="day-label">
                                
                            </div>

                            <div class="schedule-cell">9 AM</div>
                            <div class="schedule-cell">10 AM</div>
                            <div class="schedule-cell">11 AM</div>
                            <div class="schedule-cell">12 PM</div>
                            <div class="schedule-cell">1 PM</div>
                            <div class="schedule-cell">2 PM</div>
                            <div class="schedule-cell">3 PM</div>

                        </div>


                        <!-- weekday go to school -->
                        <div class="schedule-row">

                            <div class="day-label">
                                Commute day
                            </div>

                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>

                        </div>


                        <!-- week day no going to school -->
                        <div class="schedule-row">

                            <div class="day-label">
                                No commute day
                            </div>

                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>

                        </div>


                        <!-- saturday -->
                        <div class="schedule-row">

                            <div class="day-label">
                                Saturday
                            </div>

                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>

                        </div>


                        <!-- sunday -->
                        <div class="schedule-row">

                            <div class="day-label">
                                Sunday
                            </div>

                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>
                            <div class="schedule-cell"></div>

                        </div>

                    </section>

                </div>

            </div>






        `;
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

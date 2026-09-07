// Bottom Taskbar
class Taskbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
            <div id="vista-taskbar">
                <button id="start-button">
                    <img src="./images/start_icons/nobackstart.png" alt="">
                </button>

                <div id="taskbar-programs">
                    <button id="scheduleButton" class="taskbar-icon">
                        <img src="./Archive_files/schedule_icon.png" alt="">
                    </button>
                </div>

                <div id="taskbar-clock">
                    <div id="taskbar-time" class="red-glow">2:11 PM</div>
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

                            <div class="schedule-cell">8:30 AM</div>
                            <div class="schedule-cell">10 AM</div>
                            <div class="schedule-cell">10:45 AM</div>
                            <div class="schedule-cell">10:45 - 8:30 PM</div>
                            <div class="schedule-cell">8:30 PM</div>
                            <div class="schedule-cell">9 PM</div>
                            <div class="schedule-cell">10 PM</div>
                            <div class="schedule-cell">~11:15 PM</div>

                        </div>


                        <!-- weekday go to school -->
                        <div class="schedule-row">

                            <div class="day-label">
                                Commute day
                            </div>

                            <div class="schedule-cell">Wake<br>Shower<br>Tea<br>Study</div>
                            <div class="schedule-cell">Break Fast</div>
                            <div class="schedule-cell">Drive to School</div>
                            <div class="schedule-cell">At school<br>Run @ forest behind parking lot</div>
                            <div class="schedule-cell">Eat dinner<br>Brush Teeth</div>
                            <div class="schedule-cell">Busy work for school</div>
                            <div class="schedule-cell">STW Daily quest + Mission Alerts<br>To-do List(s)<br>Osneps Enclave</div>
                            <div class="schedule-cell">Sleep</div>

                        </div>

                        <br>

                        <div class="schedule-row">

                            <div class="day-label">
                                
                            </div>

                            <div class="schedule-cell">8:30 AM</div>
                            <div class="schedule-cell">10 AM</div>
                            <div class="schedule-cell">10 AM - 3 PM</div>
                            <div class="schedule-cell">3 - 6 PM</div>
                            <div class="schedule-cell">6 - Father Arrives</div>
                            <div class="schedule-cell">7 PM</div>
                            <div class="schedule-cell">8:30 PM</div>
                            <div class="schedule-cell">9 - 11 PM</div>
                            <div class="schedule-cell">~11:15 PM</div>

                        </div>


                        <!-- week day no going to school -->
                        <div class="schedule-row">

                            <div class="day-label">
                                No commute day
                            </div>

                            <div class="schedule-cell">Wake<br>Shower<br>Tea<br>Study</div>
                            <div class="schedule-cell">Break Fast<br>Excersice Break</div>
                            <div class="schedule-cell">Study</div>
                            <div class="schedule-cell">Lunch<br>Study<br>Basketball w/ lil bro</div>
                            <div class="schedule-cell">Study</div>
                            <div class="schedule-cell">Walk w/ Father</div>
                            <div class="schedule-cell">Mini dinner<br>Brush teeth</div>
                            <div class="schedule-cell">School busy work<br>STW Daily quest + Mission Alerts<br>To-do List(s)<br>Osneps Enclave</div>
                            <div class="schedule-cell">Sleep</div>
                        </div>

                        <br>



                        <div class="schedule-row">

                            <div class="day-label">
                                
                            </div>

                            <div class="schedule-cell">8:30 AM</div>
                            <div class="schedule-cell">10 AM</div>
                            <div class="schedule-cell">10 AM - bro stops gaming</div>
                            <div class="schedule-cell">~1 PM - Lunch Ready</div>
                            <div class="schedule-cell">~2:30 PM</div>
                            <div class="schedule-cell">3:30 PM - Father Arrives</div>
                            <div class="schedule-cell">7:30 PM</div>
                            <div class="schedule-cell">8:30 PM</div>
                            <div class="schedule-cell">9 - 11 PM</div>
                            <div class="schedule-cell">~11:15 PM</div>

                        </div>

                        <!-- saturday -->
                        <div class="schedule-row">
                            <div class="day-label">
                                Saturday
                            </div>

                            <div class="schedule-cell">Wake<br>Shower<br>Tea<br>Study</div>
                            <div class="schedule-cell">Break fast<br>Excercise Break</div>
                            <div class="schedule-cell">Study</div>
                            <div class="schedule-cell">Play basketball w/ lil bro</div>
                            <div class="schedule-cell">Eat Lunch</div>
                            <div class="schedule-cell">Study</div>
                            <div class="schedule-cell">Walk w/ Father</div>
                            <div class="schedule-cell">Mini dinner<br>Brush teeth</div>
                            <div class="schedule-cell">School busy work<br>STW Daily Quest + Mission Alerts<br>To-do List(s)<br>Osneps Enclave</div>
                            <div class="schedule-cell">Sleep</div>
                        </div>

                        <br>


                        <div class="schedule-row">

                            <div class="day-label">
                               
                            </div>

                            <div class="schedule-cell">8:30 AM</div>
                            <div class="schedule-cell">10 AM</div>
                            <div class="schedule-cell">10 AM - 12:15 PM</div>
                            <div class="schedule-cell">12:15 PM</div>
                            <div class="schedule-cell">12:15 - 7:30 PM</div>
                            <div class="schedule-cell">7:30 PM (Parents arrive)</div>
                            <div class="schedule-cell">9 - 11 PM</div>
                            <div class="schedule-cell">~11:15 PM</div>

                        </div>





                        <!-- sunday -->
                        <div class="schedule-row">

                            <div class="day-label">
                                Sunday
                            </div>

                            <div class="schedule-cell">Wake<br>Shower<br>Tea<br>Study</div>
                            <div class="schedule-cell">Break Fast</div>
                            <div class="schedule-cell">Study</div>
                            <div class="schedule-cell">Excercise Break (run)</div>
                            <div class="schedule-cell">Study</div>
                            <div class="schedule-cell">Eat Dinner<br>Chill</div>
                            <div class="schedule-cell">School Busy Work<br>STW Daily Quest + Mission Alert<br>To-do List(s)<br>Osneps Enclave</div>
                            <div class="schedule-cell">Sleep</div>

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






//Button Bar on right side
class ButtonBar extends HTMLElement {
    connectedCallback() {
        fetch("/Shared_btwn_pages_html/buttonBar.html")
            .then(res => res.text())
            .then(html => this.innerHTML = html);
    }
}
customElements.define("button-bar", ButtonBar);






//Left GIF area
class LeftGifs extends HTMLElement {
    connectedCallback() {
        fetch("/Shared_btwn_pages_html/leftGifArea.html")
            .then(res => res.text())
            .then(html => this.innerHTML = html);
    }
}
customElements.define("leftgif-area", LeftGifs);
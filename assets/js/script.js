// Adapted from Gemini
// Get the element you want to change the color of
window.addEventListener('load', function() {
    hoverOnPath()
    statePopUp()
})

var paths = Array.prototype.slice.call(document.querySelector("g.state").querySelectorAll("path"));
var dc = document.querySelector("circle.state");
paths.push(dc);

var state = "";
var popup = document.getElementById("myPopup");
var reportLink = document.getElementById("reportLink");
var trendLink = document.getElementById("trendLink");
var downloadLink = document.getElementById("downloadLink");

function hoverOnPath() {    
    // All states
    for (let path of paths) { 
        // Add a mouseover event listener
        path.addEventListener("mouseover", function() {
            this.style.fill = "red"; // Change color on hover
        });
    
        // Add a mouseout event listener to revert back to the original color
        path.addEventListener("mouseout", function() {
            this.style.fill = ""; // Reset color on mouseout
        });
    }   

    // DC
    // dc.addEventListener("mouseover", function() {
    //     this.style.fill = "red"; // Change color on hover
    // });

    // dc.addEventListener("mouseout", function() {
    //     this.style.fill = ""; // Change color on hover
    // });
}

function statePopUp() {
    // All states
    for (let path of paths) {
        // Create pop-up on click
        path.addEventListener("click", function(event) {
            var current_state = event.target.classList[0];

            var coord_x = event.clientX;
            var coord_y = event.clientY;
            popup.style.position = "absolute";
            popup.style.left = coord_x + "px";
            popup.style.top = coord_y + "px";

            if (state == current_state || state == "") {
                popup.classList.toggle("show");
            } else if (state != current_state && !(popup.classList.contains("show"))) {
                popup.classList.toggle("show");
            }

            state = current_state;

            // Update links
            reportLink.setAttribute("href", "some/path/" + current_state);
            trendLink.setAttribute("href", "some/path/" + current_state);
            downloadLink.setAttribute("href", "some/path/" + current_state);
        })
    }
}
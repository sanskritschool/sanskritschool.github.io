/*
document.addEventListener("DOMContentLoaded", function() {
    const tooltips = document.querySelectorAll(".tooltip");
    tooltips.forEach(tooltip => {
        tooltip.addEventListener("mouseenter", () => {
            tooltip.classList.add("show-tooltip");
        });
        tooltip.addEventListener("mouseleave", () => {
            tooltip.classList.remove("show-tooltip");
        });
    });
});
*/

document.addEventListener("DOMContentLoaded", () => {
    const tooltipsContainer = document.getElementById('tooltips-container');

    // Event delegation: Add event listener on parent container
    tooltipsContainer.addEventListener("click", (e) => {
        // Only handle click on tooltip containers
        if (e.target && e.target.classList.contains("tooltip-container")) {
            let tooltip = e.target.querySelector(".tooltip");

            // If tooltip does not exist, create it
            if (!tooltip) {
                tooltip = document.createElement("span");
                tooltip.classList.add("tooltip");
                tooltip.textContent = e.target.getAttribute("data-tooltip");
                e.target.appendChild(tooltip);
            }

            // Toggle tooltip visibility
            let isActive = tooltip.classList.contains("active");

            // Hide all tooltips first
            document.querySelectorAll(".tooltip").forEach(t => t.classList.remove("active"));

            // Show the clicked tooltip if it wasn't already active
            if (!isActive) {
                tooltip.classList.add("active");
            }

            // Close tooltip when clicking outside
            document.addEventListener("click", (event) => {
                if (!e.target.contains(event.target)) {
                    tooltip.classList.remove("active");
                }
            }, { once: true });
        }
    });

    // Add hover events for desktop (mouseenter & mouseleave)
    tooltipsContainer.addEventListener("mouseenter", (e) => {
        if (e.target && e.target.classList.contains("tooltip-container")) {
            let tooltip = e.target.querySelector(".tooltip");

            if (!tooltip) {
                tooltip = document.createElement("span");
                tooltip.classList.add("tooltip");
                tooltip.textContent = e.target.getAttribute("data-tooltip");
                e.target.appendChild(tooltip);
            }

            tooltip.classList.add("active");
        }
    }, true); // true: Capturing phase for hover to work before other events

    tooltipsContainer.addEventListener("mouseleave", (e) => {
        if (e.target && e.target.classList.contains("tooltip-container")) {
            let tooltip = e.target.querySelector(".tooltip");
            if (tooltip) tooltip.classList.remove("active");
        }
    }, true);
});
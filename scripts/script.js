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

/*
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
*/

/*
document.addEventListener("DOMContentLoaded", () => {
    const tooltipsContainer = document.getElementById('tooltips-container');

    tooltipsContainer.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("tooltip-container")) {
            let tooltip = e.target.querySelector(".tooltip");

            // If tooltip doesn't exist, create it
            if (!tooltip) {
                tooltip = document.createElement("span");
                tooltip.classList.add("tooltip");
                tooltip.textContent = e.target.getAttribute("data-tooltip");
                e.target.appendChild(tooltip);
            }

            // Toggle tooltip visibility
            let isActive = tooltip.classList.contains("active");
            document.querySelectorAll(".tooltip").forEach(t => t.classList.remove("active"));

            if (!isActive) {
                tooltip.classList.add("active");

                // Delay attaching the outside click listener
                setTimeout(() => {
                    document.addEventListener("click", outsideClickHandler, { once: true });
                }, 10);
            }
        }
    });

    function outsideClickHandler(event) {
        if (!event.target.closest(".tooltip-container")) {
            document.querySelectorAll(".tooltip").forEach(t => t.classList.remove("active"));
        }
    }

    // Add hover events for desktops
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
    }, true);

    tooltipsContainer.addEventListener("mouseleave", (e) => {
        if (e.target && e.target.classList.contains("tooltip-container")) {
            let tooltip = e.target.querySelector(".tooltip");
            if (tooltip) tooltip.classList.remove("active");
        }
    }, true);
});

*/

/*
document.addEventListener("DOMContentLoaded", () => {
    const tooltipsContainer = document.getElementById('tooltips-container');

    tooltipsContainer.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("tooltip-container")) {
            let tooltip = e.target.querySelector(".tooltip");

            // If tooltip doesn't exist, create it
            if (!tooltip) {
                tooltip = document.createElement("span");
                tooltip.classList.add("tooltip");
                tooltip.textContent = e.target.getAttribute("data-tooltip");
                e.target.appendChild(tooltip);
            }

            // Toggle tooltip visibility
            let isActive = tooltip.classList.contains("active");

            // Remove all tooltips first
            document.querySelectorAll(".tooltip").forEach(t => t.classList.remove("active"));

            if (!isActive) {
                tooltip.classList.add("active");

                // Delay adding the outside click listener
                setTimeout(() => {
                    document.addEventListener("click", outsideClickHandler, { once: true, capture: true });
                }, 50); // Increased delay to ensure proper execution
            }
        }
    });

    function outsideClickHandler(event) {
        if (!event.target.closest(".tooltip-container")) {
            document.querySelectorAll(".tooltip").forEach(t => t.classList.remove("active"));
        }
    }

    // Add hover events for desktops
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
    }, true);

    tooltipsContainer.addEventListener("mouseleave", (e) => {
        if (e.target && e.target.classList.contains("tooltip-container")) {
            let tooltip = e.target.querySelector(".tooltip");
            if (tooltip) tooltip.classList.remove("active");
        }
    }, true);
});
*/

let activeTooltip = null; // Track the currently active tooltip

document.addEventListener("DOMContentLoaded", () => {
    const tooltipsContainer = document.getElementById('tooltips-container');

    tooltipsContainer.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("tooltip-container")) {
            let tooltip = e.target.querySelector(".tooltip");

            if (!tooltip) {
                tooltip = document.createElement("span");
                tooltip.classList.add("tooltip");
                tooltip.textContent = e.target.getAttribute("data-tooltip");
                e.target.appendChild(tooltip);
            }

            if (activeTooltip && activeTooltip !== tooltip) {
                activeTooltip.classList.remove("active");
            }

            const isVisible = tooltip.classList.contains("active");
            tooltip.classList.toggle("active", !isVisible);

            activeTooltip = isVisible ? null : tooltip;

            // Delay the outside click listener to avoid closing instantly
            setTimeout(() => {
                document.addEventListener("click", outsideClickHandler, { once: true });
            }, 100);
        }
    });

    function outsideClickHandler(event) {
        if (!event.target.closest(".tooltip-container")) {
            if (activeTooltip) {
                activeTooltip.classList.remove("active");
                activeTooltip = null;
            }
        }
    }

    // Hover support for desktops
    tooltipsContainer.addEventListener("mouseenter", (e) => {
        if (e.target.classList.contains("tooltip-container")) {
            let tooltip = e.target.querySelector(".tooltip");

            if (!tooltip) {
                tooltip = document.createElement("span");
                tooltip.classList.add("tooltip");
                tooltip.textContent = e.target.getAttribute("data-tooltip");
                e.target.appendChild(tooltip);
            }

            tooltip.classList.add("active");
            activeTooltip = tooltip;
        }
    }, true);

    tooltipsContainer.addEventListener("mouseleave", (e) => {
        if (e.target.classList.contains("tooltip-container")) {
            let tooltip = e.target.querySelector(".tooltip");
            if (tooltip) tooltip.classList.remove("active");
        }
    }, true);
});

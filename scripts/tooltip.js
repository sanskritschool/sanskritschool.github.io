let activeTooltip = null;

document.addEventListener("DOMContentLoaded", () => {
    const tooltipsContainer = document.getElementById('tooltips-container');

    tooltipsContainer.addEventListener("pointerdown", (e) => {
        if (e.target && e.target.classList.contains("tooltip-container")) {
            let tooltip = e.target.querySelector(".tooltip");

            if (!tooltip) {
                tooltip = document.createElement("span");
                tooltip.classList.add("tooltip");
                tooltip.textContent = e.target.getAttribute("data-tooltip");
                e.target.appendChild(tooltip);
            }

            // If another tooltip is open, close it first
            if (activeTooltip && activeTooltip !== tooltip) {
                activeTooltip.classList.remove("active");
            }

            // Toggle tooltip visibility
            const isVisible = tooltip.classList.contains("active");
            tooltip.classList.toggle("active", !isVisible);

            // Update active tooltip reference
            activeTooltip = isVisible ? null : tooltip;

            // Prevent immediate closing by delaying the outside click listener
            setTimeout(() => {
                document.addEventListener("pointerdown", outsideClickHandler, { once: true });
            }, 100);

            e.stopPropagation();
        }
    });

    function outsideClickHandler(event) {
        if (activeTooltip && !event.target.closest(".tooltip-container")) {
            activeTooltip.classList.remove("active");
            activeTooltip = null;
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

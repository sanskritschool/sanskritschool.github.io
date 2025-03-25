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
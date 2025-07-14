let activeTooltip = null;

// Create or reuse a single tooltip element
function createTooltip() {
  let tooltip = document.querySelector(".tooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    document.body.appendChild(tooltip);
  }
  return tooltip;
}

// Show the tooltip in center of screen with content from data-tooltip
function showTooltip(container) {
  const tooltip = createTooltip();
  tooltip.textContent = container.getAttribute("data-tooltip");
  tooltip.classList.add("active");
  activeTooltip = tooltip;
}

// Hide tooltip
function hideTooltip() {
  if (activeTooltip) {
    activeTooltip.classList.remove("active");
    activeTooltip = null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tooltip-container").forEach(container => {
    // Desktop hover: show on mouseenter, hide on mouseleave
    container.addEventListener("mouseenter", () => {
      if (!activeTooltip) showTooltip(container);
    });

    container.addEventListener("mouseleave", () => {
      hideTooltip();
    });

    // Mobile and touch devices: use pointerup instead of click
    container.addEventListener("pointerup", (e) => {
      e.stopPropagation();

      if (activeTooltip) {
        hideTooltip();
      } else {
        showTooltip(container);

        // Delay the outside handler so it doesn't fire on the same tap
        setTimeout(() => {
          const outsideTap = function (event) {
            if (!event.target.closest(".tooltip-container")) {
              hideTooltip();
              document.removeEventListener("pointerup", outsideTap);
            }
          };
          document.addEventListener("pointerup", outsideTap, { once: true });
        }, 100); // key: this short delay prevents instant hiding on mobile
      }
    });
  });
});

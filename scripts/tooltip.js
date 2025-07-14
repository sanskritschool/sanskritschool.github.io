  let activeTooltip = null;

  function createTooltip(container) {
    let tooltip = document.querySelector(".tooltip");
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      document.body.appendChild(tooltip);
    }
    tooltip.textContent = container.getAttribute("data-tooltip");
    return tooltip;
  }

  function showTooltip(container) {
    const tooltip = createTooltip(container);
    tooltip.classList.add("active");
    activeTooltip = tooltip;
  }

  function hideTooltip() {
    if (activeTooltip) {
      activeTooltip.classList.remove("active");
      activeTooltip = null;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tooltip-container").forEach(container => {
      // Hover
      container.addEventListener("pointerenter", () => showTooltip(container));
      container.addEventListener("pointerleave", hideTooltip);

      // Tap / click
      container.addEventListener("pointerdown", (e) => {
        e.stopPropagation();
        if (activeTooltip) {
          hideTooltip();
        } else {
          showTooltip(container);
          setTimeout(() => {
            document.addEventListener("pointerdown", function outsideClick(ev) {
              if (!ev.target.closest(".tooltip-container")) {
                hideTooltip();
                document.removeEventListener("pointerdown", outsideClick);
              }
            }, { once: true });
          }, 50);
        }
      });
    });
  });

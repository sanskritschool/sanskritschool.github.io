  let activeTooltip = null;

  function createTooltip() {
    let tooltip = document.querySelector(".tooltip");
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      document.body.appendChild(tooltip);
    }
    return tooltip;
  }

  function showTooltip(container) {
    const tooltip = createTooltip();
    tooltip.textContent = container.getAttribute("data-tooltip");
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
      // Desktop hover
      container.addEventListener("mouseenter", () => {
        if (!activeTooltip) showTooltip(container);
      });

      container.addEventListener("mouseleave", () => {
        hideTooltip();
      });

      // Mobile click (tap)
      container.addEventListener("click", (e) => {
        e.stopPropagation();

        if (activeTooltip) {
          hideTooltip();
        } else {
          showTooltip(container);

          // Delay registering outside click so it doesn't fire immediately
          setTimeout(() => {
            const outsideClick = function (event) {
              if (!event.target.closest(".tooltip-container")) {
                hideTooltip();
                document.removeEventListener("click", outsideClick);
              }
            };
            document.addEventListener("click", outsideClick, { once: true });
          }, 100); // delay is essential!
        }
      });
    });
  });

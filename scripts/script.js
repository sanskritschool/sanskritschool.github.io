window.addEventListener("resize", function () {
  const overlay = document.getElementById("sk-vert-menu");
  const hamburger = document.getElementById("hamburger");

  if (window.innerWidth > 768) {
    overlay.style.display = "none"; // Hide vertical menu
    hamburger.classList.remove("open"); // Reset hamburger icon
  }
});

function toggleOverlay() {
  const overlay = document.getElementById("sk-vert-menu");
  if (overlay.style.display === "none" || overlay.style.display === "") {
    overlay.style.display = "flex"; // Display as a flex container
  } else {
    overlay.style.display = "none"; // Hide again
  }
}

function toggleHamburger() {
  toggleOverlay();

  const button = document.getElementById("hamburger");
  button.classList.toggle("open");
}

/* prevent users from copying text and images */
document.addEventListener("contextmenu", (event) => event.preventDefault());

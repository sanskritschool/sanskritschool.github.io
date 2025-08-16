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
  overlay.classList.toggle("open");
}

function resize() {
  const overlay = document.getElementById("sk-vert-menu");
  if (window.innerWidth > 768) {
    overlay.classList.remove("open");
  }
}

function toggleHamburger() {
  toggleOverlay();

  const button = document.getElementById("hamburger");
  button.classList.toggle("open");
}

/* prevent users from copying text and images */
document.addEventListener("contextmenu", (event) => event.preventDefault());

/* General-purpose modal */
function showModal(message) {
  const modal = document.getElementById("modal-dialog");
  document.getElementById("modal-message").textContent = message;
  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal-dialog").classList.add("hidden");
}

/* Yes/No modal with callback */
function showYesNoDialog(message, onYes, onNo) {
  const dialog = document.getElementById("yesno-dialog");
  document.getElementById("yesno-message").textContent = message;

  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");

  // Remove old handlers first
  yesBtn.onclick = () => {
    dialog.classList.add("hidden");
    onYes && onYes();
  };

  noBtn.onclick = () => {
    dialog.classList.add("hidden");
    onNo && onNo();
  };

  dialog.classList.remove("hidden");
}


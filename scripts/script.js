// Close vertical menu if resizing above mobile breakpoint
window.addEventListener("resize", function () {
  const overlay = document.getElementById("sk-vert-menu");
  const hamburger = document.getElementById("hamburger");

  if (window.innerWidth > 768) {
    overlay.classList.remove("open");
    hamburger.classList.remove("open");
  }
});

// Toggle the vertical menu + hamburger icon
function toggleHamburger() {
  const overlay = document.getElementById("sk-vert-menu");
  const button = document.getElementById("hamburger");

  overlay.classList.toggle("open");
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

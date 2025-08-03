export function showModal(message) {
  const modal = document.getElementById("modal-dialog");
  document.getElementById("modal-message").textContent = message;
  modal.classList.remove("hidden");
}

export function closeModal() {
  document.getElementById("modal-dialog").classList.add("hidden");
}

export function showYesNoDialog(message, onYes, onNo) {
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

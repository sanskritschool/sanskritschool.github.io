document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".simple-play-btn");
  let currentAudio = null;
  let currentButton = null;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const playIcon = btn.getAttribute("data-play-icon");
      const pauseIcon = btn.getAttribute("data-pause-icon");

      // Create audio dynamically if not exists
      if (!btn.audio) {
        const audio = new Audio(btn.getAttribute("data-src"));
        btn.audio = audio;
        audio.onended = () => {
          btn.src = playIcon;
          if (currentAudio === audio) {
            currentAudio = null;
            currentButton = null;
          }
        };
      }

      const audio = btn.audio;

      // If clicking the currently playing audio → stop it
      if (currentAudio === audio) {
        audio.pause();
        audio.currentTime = 0;
        btn.src = playIcon;
        currentAudio = null;
        currentButton = null;
        return;
      }

      // Stop any other currently playing audio
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentButton) currentButton.src = currentButton.getAttribute("data-play-icon");
      }

      // Play new audio from start
      audio.currentTime = 0;
      audio.play();
      btn.src = pauseIcon;
      currentAudio = audio;
      currentButton = btn;
    });
  });
});

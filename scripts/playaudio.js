const audio = document.getElementById('story-audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeLabel = document.getElementById('current-time');
const durationLabel = document.getElementById('duration');

const playIcon = '/images/icons/play_audio.png';
const pauseIcon = '/images/icons/pause_audio.png';

// Format seconds as mm:ss
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.src = pauseIcon;
    playPauseBtn.alt = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.src = playIcon;
    playPauseBtn.alt = 'Play';
  }
});

audio.addEventListener('loadedmetadata', () => {
  progressBar.max = audio.duration;
  durationLabel.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  progressBar.value = audio.currentTime;
  currentTimeLabel.textContent = formatTime(audio.currentTime);
});

progressBar.addEventListener('input', () => {
  audio.currentTime = progressBar.value;
});

audio.addEventListener('ended', () => {
  playPauseBtn.src = playIcon;
  playPauseBtn.alt = 'Play';
  progressBar.value = 0;
  currentTimeLabel.textContent = '0:00';
});
// my_difficult_words_quiz.js

import { getAllDifficultWords } from '/scripts/difficult_words_db.js';

let quizData = [];

const modeSelect = document.getElementById("mode-select-mdw");
const questionText = document.getElementById("question-text");
const optionsForm = document.getElementById("options-form");
const submitBtn = document.getElementById("submit-btn");
const skipBtn = document.getElementById("skip-btn");
const restartBtn = document.getElementById("restart-btn");
const feedbackBox = document.getElementById("feedback");
const feedbackMessage = document.getElementById("feedback-message");

const scoreCorrect = document.getElementById("score-correct");
const scoreWrong = document.getElementById("score-wrong");
const progress = document.getElementById("progress");

let currentMode = modeSelect.value;
let shuffledData = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function loadQuestion() {
  const entry = shuffledData[currentQuestionIndex];
  if (!entry) return;

  const questionWord = currentMode === "en-to-sans"
    ? entry.en.charAt(0).toUpperCase() + entry.en.slice(1)
    : entry.sans;

  const correctAnswer = currentMode === "en-to-sans" ? entry.sans : entry.en;

  questionText.textContent = currentMode === "en-to-sans"
    ? `Select the Sanskrit word for "${questionWord}":`
    : `Select the English word for "${questionWord}":`;

  const options = new Set([correctAnswer]);
  while (options.size < 5 && quizData.length > 1) {
    const rand = quizData[Math.floor(Math.random() * quizData.length)];
    const opt = currentMode === "en-to-sans" ? rand.sans : rand.en;
    options.add(opt);
  }

  const shuffledOptions = shuffleArray(Array.from(options));

  optionsForm.innerHTML = shuffledOptions
    .map((opt) => {
      let label = opt;
      if (currentMode === "sans-to-en") {
        label = opt.charAt(0).toUpperCase() + opt.slice(1);
      }
      return `
        <label>
          <input type="radio" name="option" value="${opt}">
          ${label}
        </label>`;
    })
    .join("");
}

function updateScore() {
  const questionNumber = Math.min(currentQuestionIndex + 1, shuffledData.length);
  scoreCorrect.textContent = correctCount;
  scoreWrong.textContent = wrongCount;
  progress.textContent = `${questionNumber} of ${shuffledData.length}`;
}

function showFeedback(message) {
  feedbackMessage.textContent = message;
  feedbackBox.classList.remove("hidden");
}

function closeFeedback() {
  feedbackBox.classList.add("hidden");
  nextQuestion();
}
window.closeFeedback = closeFeedback;

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledData.length) {
    loadQuestion();
    updateScore();
  } else {
    questionText.textContent = "Quiz completed!";
    optionsForm.innerHTML = "";
    submitBtn.style.display = "none";
    skipBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    updateScore();
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const selected = optionsForm.querySelector('input[name="option"]:checked');
  if (!selected) return;

  const entry = shuffledData[currentQuestionIndex];
  const correctAnswer = currentMode === "en-to-sans" ? entry.sans : entry.en;

  if (selected.value === correctAnswer) {
    correctCount++;
    nextQuestion();
  } else {
    wrongCount++;
    showFeedback(`❌ Wrong! Correct answer is: ${correctAnswer}`);
  }
});

skipBtn.addEventListener("click", (e) => {
  e.preventDefault();
  correctCount++;
  nextQuestion();
});

restartBtn.addEventListener("click", () => {
  startQuiz();
});

modeSelect.addEventListener("change", () => {
  currentMode = modeSelect.value;
  startQuiz();
});

async function startQuiz() {
  quizData = await getAllDifficultWords();
  shuffledData = shuffleArray(quizData);
  currentQuestionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  submitBtn.style.display = "inline-block";
  skipBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  loadQuestion();
  updateScore();
}

startQuiz();

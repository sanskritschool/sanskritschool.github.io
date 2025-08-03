// vocab_quiz.js

import { addDifficultWord } from '/scripts/difficult_words_db.js';

const modeSelect = document.getElementById("mode-select");
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

const startSelect = document.getElementById("start-select");
const endSelect = document.getElementById("end-select");

const quizTitle = document.getElementById("quiz-title");

let currentMode = modeSelect.value;
let shuffledData = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

function updateQuizTitle() {
  const wordCount = quizData.length;
  quizTitle.textContent = `Ambarishaha quiz (${wordCount} words)`;
}

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
  while (options.size < 5) {
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

submitBtn.addEventListener("click", async (e) => {
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
    await addDifficultWord(entry);
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

[startSelect, endSelect].forEach((select) => {
  select.addEventListener("change", startQuiz);
});

function populateRangeSelectors() {
  const total = quizData.length;
  const chunkSize = 10;
  const startOptions = [];
  const endOptions = [];

  for (let i = 0; i < total; i += chunkSize) {
    startOptions.push(`<option value="${i}">${i + 1}</option>`);
    endOptions.push(`<option value="${i + chunkSize - 1}">${Math.min(i + chunkSize, total)}</option>`);
  }

  startSelect.innerHTML = startOptions.join("");
  endSelect.innerHTML = endOptions.join("");

  startSelect.value = "0";
  endSelect.value = `${Math.min(9, total - 1)}`;
}

function startQuiz() {
  const startIndex = parseInt(startSelect.value, 10);
  const endIndex = parseInt(endSelect.value, 10);

  if (isNaN(startIndex) || isNaN(endIndex) || startIndex > endIndex) {
    questionText.textContent = "Invalid range selected.";
    optionsForm.innerHTML = "";
    return;
  }

  updateQuizTitle();

  const selectedRange = quizData.slice(startIndex, endIndex + 1);
  shuffledData = shuffleArray(selectedRange);
  currentQuestionIndex = 0;
  correctCount = 0;
  wrongCount = 0;

  submitBtn.style.display = "inline-block";
  skipBtn.style.display = "inline-block";
  restartBtn.style.display = "none";

  loadQuestion();
  updateScore();
}

populateRangeSelectors();
startQuiz();

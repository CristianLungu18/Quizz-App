const questionTitle = document.querySelector(".question-box");
const startBtn = document.querySelector(".start-btn");
const answerBox = document.querySelector(".answers-box");
const wrongBox = document.querySelector(".wrong-answer");
const correctBox = document.querySelector(".correct-answer");
const nextBtn = document.querySelector(".next-btn");
const inputBox = document.querySelector(".number-question");
const resetBtn = document.querySelector(".reset-btn");
const inputNumber = document.querySelector(".number-question-input");
const statsBox = document.querySelector(".stats");
let correct = 0;
let wrong = 0;
let currentQuestion = 0;
let numberOfQuestions = 0;

startBtn.addEventListener("click", () => {
  numberOfQuestions = Number(inputNumber.value);
  if (numberOfQuestions < 0) {
    alert("Please insert a positive number!");
    return;
  }
  if (!numberOfQuestions) {
    alert("Please insert a number!");
    return;
  }
  fetchQuiz();
  inputBox.classList.add("visibility");
  startBtn.classList.add("visibility");
});

nextBtn.addEventListener("click", () => {
  if (currentQuestion < numberOfQuestions - 1) {
    currentQuestion++;
    answerBox.innerHTML = "";
    fetchQuiz();
  } else {
    resetBtn.classList.remove("visibility");
    statsBox.innerHTML = `<div class="text-box-stats">
        <h1 style="text-align: center; background-color: #496DDB;color:white;text-decoration:underline;">Stats</h1>
        <h1 style="text-align: center; background-color: #496DDB;color:white;">You answered <span style="color:green;background-color: #496DDB;">${correct}</span> questions correctly!</h1>
        <h1 style="text-align: center; background-color: #496DDB;color:white;">You answered <span style="color:crimson;background-color: #496DDB;">${wrong}</span> questions wrongly!</h1>
      </div>`;
    answerBox.innerHTML = "";
    questionTitle.textContent = "";
    nextBtn.classList.add("visibility");
  }
});

resetBtn.addEventListener("click", () => {
  inputNumber.value = "";
  currentQuestion = 0;
  correct = 0;
  wrong = 0;
  numberOfQuestions = 0;
  answerBox.innerHTML = "";
  inputNumber.classList.remove("visibility");
  resetBtn.classList.add("visibility");
  startBtn.classList.remove("visibility");
  statsBox.innerHTML = "";
  inputBox.classList.remove("visibility");
  wrongBox.textContent = `Wrong: 0`;
  correctBox.textContent = `Correct 0`;
});

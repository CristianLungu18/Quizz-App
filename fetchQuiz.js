const fetchQuiz = async () => {
  try {
    const response = await fetch(
      "https://the-trivia-api.com/v2/questions/?limit=1&types=text_choice&categories=geography"
    );
    const data = await response.json();
    questionTitle.innerHTML = `<h1>${data[0].question.text}</h1>`;
    let correctAnswer = data[0].correctAnswer;
    let answers = data[0].incorrectAnswers;
    let randomIndex = Math.floor(Math.random() * 4 + 1);
    answers.splice(randomIndex, 0, correctAnswer);
    console.log(correctAnswer);
    console.log(answers);
    let answerBtn0 = document.createElement("button");

    answerBtn0.classList.add("answer-btn");
    answerBtn0.textContent = `${answers[0]}`;
    answerBox.appendChild(answerBtn0);
    let answerBtn1 = document.createElement("button");
    answerBtn1.classList.add("answer-btn");
    answerBtn1.textContent = `${answers[1]}`;
    answerBox.appendChild(answerBtn1);
    let answerBtn2 = document.createElement("button");
    answerBtn2.classList.add("answer-btn");
    answerBtn2.textContent = `${answers[2]}`;
    answerBox.appendChild(answerBtn2);
    let answerBtn3 = document.createElement("button");
    answerBtn3.classList.add("answer-btn");
    answerBtn3.textContent = `${answers[3]}`;
    answerBox.appendChild(answerBtn3);

    answerBtn0.addEventListener("click", () => {
      if (answerBtn0.textContent == correctAnswer) {
        correct++;
        correctBox.textContent = `Correct: ${correct}`;
        answerBtn0.classList.add("correct");
        answerBtn1.classList.add("wrong");
        answerBtn2.classList.add("wrong");
        answerBtn3.classList.add("wrong");
        nextBtn.classList.remove("visibility");
      }
      if (answerBtn0.textContent !== correctAnswer) {
        if (answerBtn1.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("selected");
          answerBtn1.classList.add("correct");
          answerBtn2.classList.add("wrong");
          answerBtn3.classList.add("wrong");
          nextBtn.classList.remove("visibility");
        }
        if (answerBtn2.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("selected");
          answerBtn1.classList.add("wrong");
          answerBtn2.classList.add("correct");
          answerBtn3.classList.add("wrong");
          nextBtn.classList.remove("visibility");
        }
        if (answerBtn3.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("selected");
          answerBtn1.classList.add("wrong");
          answerBtn2.classList.add("wrong");
          answerBtn3.classList.add("correct");
          nextBtn.classList.remove("visibility");
        }
      }
    });
    answerBtn1.addEventListener("click", () => {
      if (answerBtn1.textContent == correctAnswer) {
        correct++;
        correctBox.textContent = `Correct: ${correct}`;
        answerBtn0.classList.add("wrong");
        answerBtn1.classList.add("correct");
        answerBtn2.classList.add("wrong");
        answerBtn3.classList.add("wrong");
        nextBtn.classList.remove("visibility");
      }
      if (answerBtn1.textContent !== correctAnswer) {
        if (answerBtn0.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("correct");
          answerBtn1.classList.add("selected");
          answerBtn2.classList.add("wrong");
          answerBtn3.classList.add("wrong");
          nextBtn.classList.remove("visibility");
        }
        if (answerBtn2.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("wrong");
          answerBtn1.classList.add("selected");
          answerBtn2.classList.add("correct");
          answerBtn3.classList.add("wrong");
          nextBtn.classList.remove("visibility");
        }
        if (answerBtn3.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("wrong");
          answerBtn1.classList.add("selected");
          answerBtn2.classList.add("wrong");
          answerBtn3.classList.add("correct");
          nextBtn.classList.remove("visibility");
        }
      }
    });
    answerBtn2.addEventListener("click", () => {
      if (answerBtn2.textContent == correctAnswer) {
        correct++;
        correctBox.textContent = `Correct: ${correct}`;
        answerBtn0.classList.add("wrong");
        answerBtn1.classList.add("wrong");
        answerBtn2.classList.add("correct");
        answerBtn3.classList.add("wrong");
        nextBtn.classList.remove("visibility");
      }
      if (answerBtn2.textContent !== correctAnswer) {
        if (answerBtn0.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("correct");
          answerBtn1.classList.add("wrong");
          answerBtn2.classList.add("selected");
          answerBtn3.classList.add("wrong");
          nextBtn.classList.remove("visibility");
        }
        if (answerBtn1.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("wrong");
          answerBtn1.classList.add("correct");
          answerBtn2.classList.add("selected");
          answerBtn3.classList.add("wrong");
          nextBtn.classList.remove("visibility");
        }
        if (answerBtn3.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("wrong");
          answerBtn1.classList.add("wrong");
          answerBtn2.classList.add("selected");
          answerBtn3.classList.add("correct");
          nextBtn.classList.remove("visibility");
        }
      }
    });
    answerBtn3.addEventListener("click", () => {
      if (answerBtn3.textContent == correctAnswer) {
        correct++;
        correctBox.textContent = `Correct: ${correct}`;
        answerBtn0.classList.add("wrong");
        answerBtn1.classList.add("wrong");
        answerBtn2.classList.add("wrong");
        answerBtn3.classList.add("correct");
        nextBtn.classList.remove("visibility");
      }
      if (answerBtn3.textContent !== correctAnswer) {
        if (answerBtn0.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("correct");
          answerBtn1.classList.add("wrong");
          answerBtn2.classList.add("wrong");
          answerBtn3.classList.add("selected");
          nextBtn.classList.remove("visibility");
        }
        if (answerBtn1.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("wrong");
          answerBtn1.classList.add("correct");
          answerBtn2.classList.add("wrong");
          answerBtn3.classList.add("selected");
          nextBtn.classList.remove("visibility");
        }
        if (answerBtn2.textContent == correctAnswer) {
          wrong++;
          wrongBox.textContent = `Wrong: ${wrong}`;
          answerBtn0.classList.add("wrong");
          answerBtn1.classList.add("wrong");
          answerBtn2.classList.add("correct");
          answerBtn3.classList.add("selected");
          nextBtn.classList.remove("visibility");
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
};

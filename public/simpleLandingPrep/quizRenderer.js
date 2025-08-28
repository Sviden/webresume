import { quizQuestions, quizResults } from "./constants.js";
import { animateFunButton } from "./animations.js";

let answer = [];
let currAnswer = "";

const quizQuestionsRender = () => {
  const quizContainer = document.querySelector(".quizContainer");
  const questionContainer = document.querySelector(".quizQuestion");
  const optionsContainer = document.querySelector(".quizOptions");
  const nextBtn = document.querySelector(".nextQBtn");

  if (answer.length === quizQuestions.length) {
    quizContainer.style.display = "none";
    nextBtn.style.display = "none";
    showResult();
    return;
  }

  optionsContainer.innerHTML = "";
  const question = quizQuestions[answer.length];
  questionContainer.textContent = question.question;
  nextBtn.style.display = "none";

  const options = question.options;

  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("button");
    option.classList.add("quizOption");
    option.innerText = options[i];

    option.addEventListener("click", (e) => {
      document
        .querySelectorAll(".quizOption")
        .forEach((el) => el.classList.remove("selectedOption"));

      e.currentTarget.classList.add("selectedOption");
      currAnswer = question.results[options[i]];
      nextBtn.style.display = "block";
    });

    optionsContainer.appendChild(option);
  }

  nextBtn.onclick = () => {
    answer.push(currAnswer);
    quizQuestionsRender();
  };
};

const showResult = () => {
  const resultContainer = document.querySelector(".resultContainer");
  const resultBtn = document.createElement("button");
  const tryAgainBtn = document.createElement("button");

  tryAgainBtn.innerText = "Try again!";
  tryAgainBtn.classList.add("tryAgainBtn");

  resultContainer.style.display = "flex";
  resultBtn.className = "resultBtn";
  resultBtn.innerHTML = "Show Result";
  resultContainer.appendChild(resultBtn);

  tryAgainBtn.addEventListener("click", () => {
    location.reload();
  });

  const counts = answer.reduce(
    (acc, value) => ({ ...acc, [value]: (acc[value] || 0) + 1 }),
    {}
  );
  const mostFrequent = Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );

  resultBtn.addEventListener("click", () => {
    const finalResult = quizResults[mostFrequent];
    resultContainer.innerHTML = `
      <h2>${finalResult.title}</h2>
      <p>${finalResult.description}</p>
    `;
    resultContainer.appendChild(tryAgainBtn);
  });
};

export function renderQuiz() {
  const container = document.querySelector(".mainContainer");
  container.innerHTML = `
    <div class="gameContainer">
      <div class="gameHeader">
        <h1 class="title">Iscream</h1>
        <p class="subtitle">Discover what type of ice cream you are</p>
      </div>
      <div class="quizContainer">
        <div class="quizQuestion"></div>
        <div class="quizOptions"></div>
      </div>
      <button class="nextQBtn">Next question</button>
      <div class="resultContainer"></div>
    </div>
  `;

  const nextBtn = document.querySelector(".nextQBtn");
  animateFunButton(nextBtn);

  quizQuestionsRender();
}

// Array of questions
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris", "Rome"],
    correctIndex: 2
  },
  {
    question: "Which language runs in the browser?",
    choices: ["Python", "Java", "C++", "JavaScript"],
    correctIndex: 3
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus", "Saturn"],
    correctIndex: 1
  }
];

// Cache DOM elements
const questionEl = document.getElementById("question");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let answered = false;

// Load a question
function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  choiceBtns.forEach((btn, i) => {
    btn.textContent = q.choices[i];
    btn.disabled = false;
  });
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";
  answered = false;
}

// Handle choice click
choiceBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (answered){
        return;
    } ;
    answered = true;

    const correctAnswer = questions[currentQuestion].correctIndex;

    if (i === correctAnswer) {
      feedbackEl.textContent = "Correct!";
      feedbackEl.style.color = "green";
    } else {
      feedbackEl.textContent = `Wrong! Correct answer: ${questions[currentQuestion].choices[correctAnswer]}`;
      feedbackEl.style.color = "red";
    }

    // Disable buttons after answer
    choiceBtns.forEach(b => b.disabled = true);
    nextBtn.style.display = "inline-block";
  });
});

// Next question
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "🎉 Quiz completed!";
    document.querySelector(".choices").style.display = "none";
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";
  }
});

// Start quiz
loadQuestion();

let quizCount = 1;
let score = 0;
let usedQIndex = [];
let quizBunch = null;
const questions = [
  {
    question: "Which is the fastest land animal?",
    options: ["Lion", "Cheetah", "Leopard", "Tiger"],
    answer: "Cheetah",
  },

  {
    question: "Which animal is known for its long neck?",
    options: ["Zebra", "Giraffe", "Rhino", "Hippopotamus"],
    answer: "Giraffe",
  },

  {
    question: "Which animal is famous for having black and white stripes?",
    options: ["Zebra", "Hyena", "Gazelle", "Buffalo"],
    answer: "Zebra",
  },

  {
    question: "Which animal is known for its large ears and trunk?",
    options: ["Rhinoceros", "Elephant", "Hippopotamus", "Gorilla"],
    answer: "Elephant",
  },

  {
    question: "Which of these animals is marsupial?",
    options: ["Kangaroo", "Tiger", "Penguin", "Gorilla"],
    answer: "Kangaroo",
  },

  {
    question: "Which bird is unable to fly but is an excellent swimmer?",
    options: ["Eagle", "Peacock", "Penguin", "Falcon"],
    answer: "Penguin",
  },

  {
    question: "Why do flamingos have their pink or reddish color?",
    options: [
      "Their feathers naturally grow pink",
      "Their diet contains carotenoid pigments",
      "Their skin produces a red pigment",
      "Sunlight changes their feather color",
    ],
    answer: "Their diet contains carotenoid pigments",
  },

  {
    question:
      "Which big cat is particularly well known for its ability to swim?",
    options: ["Cheetah", "Tiger", "Lion", "Leopard"],
    answer: "Tiger",
  },

  {
    question: "Which animal uses echolocation to navigate and locate prey?",
    options: ["Bat", "Eagle", "Gorilla", "Rhinoceros"],
    answer: "Bat",
  },

  {
    question: "Which of these animals is primarily nocturnal?",
    options: ["Koala", "Sloth", "Owl", "Giraffe"],
    answer: "Owl",
  },

  {
    question:
      "What is the main purpose of a polar bear's thick layer of body fat?",
    options: [
      "To help it swim faster",
      "To protect it from cold temperatures",
      "To make it more aggressive",
      "To help it climb ice",
    ],
    answer: "To protect it from cold temperatures",
  },

  {
    question:
      "Which animal is known for using its powerful jaws to crack open hard-shelled prey?",
    options: ["Jaguar", "Cheetah", "Giraffe", "Kangaroo"],
    answer: "Jaguar",
  },

  {
    question:
      "Which animal is known for changing its skin color as part of camouflage and communication?",
    options: ["Meerkat", "Hyena", "Zebra", "Chameleon"],
    answer: "Chameleon",
  },

  {
    question: "Which of these animals is the largest living land animal?",
    options: [
      "White rhinoceros",
      "African elephant",
      "Hippopotamus",
      "Giraffe",
    ],
    answer: "African elephant",
  },

  {
    question: "What do pandas primarily eat?",
    options: ["Fish", "Bamboo", "Insects", "Fruits"],
    answer: "Bamboo",
  },

  {
    question: "Which animal is famous for building dams in rivers and streams?",
    options: ["Otter", "Beaver", "Capybara", "Platypus"],
    answer: "Beaver",
  },

  {
    question:
      "Which animal has fingerprints that can be surprisingly similar to those of humans?",
    options: ["Gorilla", "Koala", "Chimpanzee", "Orangutan"],
    answer: "Koala",
  },

  {
    question:
      "Which animal can survive without drinking free water by obtaining water from its food and metabolic processes?",
    options: ["Camel", "Kangaroo rat", "Hippopotamus", "Polar bear"],
    answer: "Kangaroo rat",
  },

  {
    question: "Which of these animals has three hearts?",
    options: ["Shark", "Octopus", "Dolphin", "Sea turtle"],
    answer: "Octopus",
  },

  {
    question:
      "Which animal is known for having a tongue that can be longer than its body?",
    options: ["Chameleon", "Anteater", "Giraffe", "Pangolin"],
    answer: "Chameleon",
  },
];
let isClicked = false;

const quizCountEl = document.getElementById("quiz-count");
const scoreEl = document.getElementById("score-el");
const questionEl = document.getElementById("question-el");
const optionABtn = document.getElementById("optionA-btn");
const optionBBtn = document.getElementById("optionB-btn");
const optionCBtn = document.getElementById("optionC-btn");
const optionDBtn = document.getElementById("optionD-btn");
const optionAEl = document.getElementById("optionA-el");
const optionBEl = document.getElementById("optionB-el");
const optionCEl = document.getElementById("optionC-el");
const optionDEl = document.getElementById("optionD-el");
const nextBtn = document.getElementById("next-btn");

render();

optionABtn.addEventListener("click", function () {
  if (isClicked === false)
    if (optionAEl.innerText === questions[quizBunch].answer) {
      score += 1;
      scoreEl.innerText = score;
      optionABtn.style.backgroundColor = "rgb(79, 175, 89)";
      isClicked = true;
    } else {
      optionABtn.style.backgroundColor = "rgb(244, 109, 102)";
      if (optionBEl.innerText === questions[quizBunch].answer) {
        optionBBtn.style.backgroundColor = "rgb(79, 175, 89)";
      } else if (optionCEl.innerText === questions[quizBunch].answer) {
        optionCBtn.style.backgroundColor = "rgb(79, 175, 89)";
      } else {
        optionDBtn.style.backgroundColor = "rgb(79, 175, 89)";
      }
      isClicked = true;
    }
});

optionBBtn.addEventListener("click", function () {
  if (isClicked === false)
    if (optionBEl.innerText === questions[quizBunch].answer) {
      score += 1;
      scoreEl.innerText = score;
      optionBBtn.style.backgroundColor = "rgb(79, 175, 89)";
      isClicked = true;
    } else {
      optionBBtn.style.backgroundColor = "rgb(244, 109, 102)";
      if (optionAEl.innerText === questions[quizBunch].answer) {
        optionABtn.style.backgroundColor = "rgb(79, 175, 89)";
      } else if (optionCEl.innerText === questions[quizBunch].answer) {
        optionCBtn.style.backgroundColor = "rgb(79, 175, 89)";
      } else {
        optionDBtn.style.backgroundColor = "rgb(79, 175, 89)";
      }
      isClicked = true;
    }
});

optionCBtn.addEventListener("click", function () {
  if (isClicked === false)
    if (optionCEl.innerText === questions[quizBunch].answer) {
      score += 1;
      scoreEl.innerText = score;
      optionCBtn.style.backgroundColor = "rgb(79, 175, 89)";
      isClicked = true;
    } else {
      optionCBtn.style.backgroundColor = "rgb(244, 109, 102)";
      if (optionBEl.innerText === questions[quizBunch].answer) {
        optionBBtn.style.backgroundColor = "rgb(79, 175, 89)";
      } else if (optionAEl.innerText === questions[quizBunch].answer) {
        optionABtn.style.backgroundColor = "rgb(79, 175, 89)";
      } else {
        optionDBtn.style.backgroundColor = "rgb(79, 175, 89)";
      }
      isClicked = true;
    }
});

optionDBtn.addEventListener("click", function () {
  if (isClicked === false)
    if (optionDEl.innerText === questions[quizBunch].answer) {
      score += 1;
      scoreEl.innerText = score;
      optionDBtn.style.backgroundColor = "rgb(79, 175, 89)";
      isClicked = true;
    } else {
      optionDBtn.style.backgroundColor = "rgb(244, 109, 102)";
      if (optionBEl.innerText === questions[quizBunch].answer) {
        optionBBtn.style.backgroundColor = "rgb(79, 175, 89)";
      } else if (optionCEl.innerText === questions[quizBunch].answer) {
        optionCBtn.style.backgroundColor = "rgb(79, 175, 89)";
      } else {
        optionABtn.style.backgroundColor = "rgb(79, 175, 89)";
      }
      isClicked = true;
    }
});

nextBtn.addEventListener("click", function () {
  if (isClicked === true)
    if (quizCount < 5) {
      quizCount += 1;
      quizCountEl.innerText = quizCount;
      isClicked = false;
      optionABtn.style.backgroundColor = "rgb(20, 38, 34)";
      optionBBtn.style.backgroundColor = "rgb(20, 38, 34)";
      optionCBtn.style.backgroundColor = "rgb(20, 38, 34)";
      optionDBtn.style.backgroundColor = "rgb(20, 38, 34)";
      render();
    } else {
      localStorage.setItem("score", JSON.stringify(score));
      window.location.href = "score-page.html";
    }
});

function getQuestIndex() {
  const index = Math.floor(Math.random() * 20);
  if (usedQIndex.includes(index)) {
    return getQuestIndex();
  } else {
    usedQIndex.push(index);
    return index;
  }
}

function render() {
  quizBunch = getQuestIndex();

  questionEl.textContent = questions[quizBunch].question;
  optionAEl.textContent = questions[quizBunch].options[0];
  optionBEl.textContent = questions[quizBunch].options[1];
  optionCEl.textContent = questions[quizBunch].options[2];
  optionDEl.textContent = questions[quizBunch].options[3];
}

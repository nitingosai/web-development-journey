const totalScoreEl = document.getElementById("total-score");
const appreciateEl = document.getElementById("appreciate-el");
const totalScore = localStorage.getItem("score");

totalScoreEl.innerText = totalScore;

if (totalScore > 4) {
  appreciateEl.textContent = "Perfect! You're a true wildlife expert!";
} else if (totalScore > 3) {
  appreciateEl.textContent = "Amazing! You really know your wildlife!";
} else if (totalScore > 2) {
  appreciateEl.textContent = "Good job! You know quite a bit about the wild.";
} else if (totalScore > 1) {
  appreciateEl.textContent =
    "Nice try! You're discovering more with every adventure.";
} else if (totalScore > 0) {
  appreciateEl.textContent =
    "A good start! Keep exploring and learn more about wildlife.";
} else {
  appreciateEl.textContent =
    "Every adventure starts somewhere. Keep exploring!";
}

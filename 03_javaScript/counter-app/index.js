let count = 0;
let countEl = document.getElementById("count-el");
let savedNum = document.getElementById("saved-num");
let date = document.getElementById("date");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function saveCount() {
  savedNum.textContent = count;
  const now = new Date();
  const time = now.toLocaleTimeString();
  date.textContent = time;
  count = 0;
  countEl.textContent = count;
}

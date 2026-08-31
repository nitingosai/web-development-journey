let scoreTeam1 = 0;
let scoreTeam2 = 0;
let scoreEl1 = document.getElementById("score-el1");
let scoreEl2 = document.getElementById("score-el2");
let quarter = 1;
let quarterEl = document.getElementById("quarter-el");
let foulTeam1 = 0;
let foulTeam2 = 0;
let foulEl1 = document.getElementById("foul-el1");
let foulEl2 = document.getElementById("foul-el2");
let timeout1 = 5;
let timeout2 = 5;
let timeoutEl1 = document.getElementById("timeout-el1");
let timeoutEl2 = document.getElementById("timeout-el2");
let possession = "-";
let possessionEl = document.getElementById("possession-el");

function team1Increment1() {
  scoreTeam1++;
  scoreEl1.innerText = scoreTeam1;
}

function team1Increment2() {
  scoreTeam1 += 2;
  scoreEl1.innerText = scoreTeam1;
}

function team1Increment3() {
  scoreTeam1 += 3;
  scoreEl1.innerText = scoreTeam1;
}

function team2Increment1() {
  scoreTeam2++;
  scoreEl2.innerText = scoreTeam2;
}

function team2Increment2() {
  scoreTeam2 += 2;
  scoreEl2.innerText = scoreTeam2;
}

function team2Increment3() {
  scoreTeam2 += 3;
  scoreEl2.innerText = scoreTeam2;
}

function team1Foul() {
  foulTeam1++;
  foulEl1.innerText = foulTeam1;
}

function decreTimeout1() {
  if (timeout1 > 0) {
    timeout1--;
    timeoutEl1.innerText = timeout1;
  }
}

function team2Foul() {
  foulTeam2++;
  foulEl2.innerText = foulTeam2;
}

function decreTimeout2() {
  if (timeout2 > 0) {
    timeout2--;
    timeoutEl2.innerText = timeout2;
  }
}

function possessionToTeam1() {
  possession = "TIGERS";
  possessionEl.textContent = possession;
}

function possessionToTeam2() {
  possession = "HAWKS";
  possessionEl.textContent = possession;
}

function nxtQuarter() {
  if (quarter < 4) {
    quarter++;
    quarterEl.innerText = quarter;

    scoreTeam1 = 0;
    scoreTeam2 = 0;
    scoreEl1.innerText = scoreTeam1;
    scoreEl2.innerText = scoreTeam2;

    foulTeam1 = 0;
    foulTeam2 = 0;
    foulEl1.innerText = foulTeam1;
    foulEl2.innerText = foulTeam2;

    possessionEl.innerText = "-";
  }
}

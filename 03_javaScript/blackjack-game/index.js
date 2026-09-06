let cards = [];
let total;
let message;
let hasBlackJack = false;
let isAlive = false;
let cardsEl = document.getElementById("cards-el");
let totalEl = document.getElementById("total-el");
let messageEl = document.getElementById("message-el");

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  total = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = ""
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  } 
  totalEl.innerText = total;

  if (total <= 20) {
    message = "Do you want to draw a new card?";
  } else if (total === 21) {
    message = "Hurrey..! You got a BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    total += card
    renderGame();
  }
}

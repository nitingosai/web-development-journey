let userFeedback = "";
let isRated = false;
let feedbackCards = [];
let userName = "";
let userRating = {
  ratings: "",
  setStarColor: function (starID, color) {
    userRating.ratings = "";
    const quantity = getRatings(starID);

    for (let i = 0; i < 5; i++) {
      ratingStars[i].style.color = "#aaa";
      userRating.ratings += "★";
    }
    for (let i = 0; i < quantity; i++) {
      ratingStars[i].style.color = color;
    }
    userRating.ratings = quantity;
  },
  printStar: function () {
    let stars = "";
    for (let i = 0; i < userRating.ratings; i++) {
      stars += "★";
    }
    for (let i = 0; i < 5 - userRating.ratings; i++) {
      stars += "☆";
    }
    return stars;
  },
};

const feedbackForm = document.getElementById("feedback-form");
const warnTextEls = document.getElementsByClassName("warn-text");
const inputNameEl = document.getElementById("input-name");
const starContainer = document.getElementById("star-container");
const ratingStars = document.getElementsByClassName("rating-star");
const feedbackEl = document.getElementById("feedback-el");
const submitBTN = document.getElementById("submit-btn");
const successEl = document.getElementById("success-msg");
const feedbacksEl = document.getElementById("feedbacks");

starContainer.addEventListener("click", function (e) {
  isRated = true;
  const targetID = e.target.id;
  setAriaPressed(targetID);
  userRating.setStarColor(targetID, "yellow");
});

submitBTN.addEventListener("click", function (e) {
  e.preventDefault();
  let formData = new FormData(feedbackForm);
  userName = formData.get("userName");
  userFeedback = formData.get("userFeedback");

  if (userName === "" && isRated != true && userFeedback === "") {
    for (let i = 0; i < warnTextEls.length; i++) {
      manageWarnTextDisplay(`${warnTextEls[i].id}`, "block");
    }
  } else if (userName === "" && isRated != true) {
    manageWarnTextDisplay("name-required", "block");
    manageWarnTextDisplay("rating-required", "block");
    console.log(2);
  } else if (userName === "" && userFeedback === "") {
    manageWarnTextDisplay("name-required", "block");
    manageWarnTextDisplay("feedback-required", "block");
    console.log(3);
  } else if (isRated != true && userFeedback === "") {
    manageWarnTextDisplay("rating-required", "block");
    manageWarnTextDisplay("feedback-required", "block");
    console.log(4);
  } else if (userName === "") {
    manageWarnTextDisplay("name-required", "block");
  } else if (isRated != true) {
    manageWarnTextDisplay("rating-required", "block");
  } else if (userFeedback === "") {
    manageWarnTextDisplay("feedback-required", "block");
  } else {
    feedbackCards.push(`
      <article
        class="feedback-card border rounded-sm bg-surface p-sm flex-column gap-sm"> 
        <span class="txt-md txt-bold txt-primary">${userName}</span>
        <span class="user-rating txt-md letter-space">${userRating.printStar()}</span>
        <p class="txt-md txt-muted">${userFeedback}</p>
      </article>`);
    clearForm();
    render();
  }
});

function getRatings(id) {
  for (let i = 1; i <= 5; i++) {
    if ("star-" + [i] === id) {
      return i;
    }
  }
}

function setAriaPressed(id) {
  document.getElementById(id).ariaPressed = "true";
}

function manageWarnTextDisplay(ID, display) {
  if (warnTextEls[0].id === ID) {
    warnTextEls[0].style.display = `${display}`;
  } else if (warnTextEls[1].id === ID) {
    warnTextEls[1].style.display = `${display}`;
  } else {
    warnTextEls[2].style.display = `${display}`;
  }
}

function clearForm() {
  inputNameEl.value = "";
  userRating.setStarColor("star-5", "#aaa");
  feedbackEl.value = "";
}

function render() {
  for (let i = 0; i < warnTextEls.length; i++) {
    manageWarnTextDisplay(`${warnTextEls[i].id}`, "none");
  }
  submitBTN.style.backgroundColor = "rgb(56, 56, 56)";
  submitBTN.innerText = "Submitting...";
  setTimeout(() => {
    submitBTN.style.backgroundColor = "rgb(229, 9, 20)";
    submitBTN.innerText = "Submit feedback";
    successEl.style.bottom = "50px";
    successEl.style.transform = "scale(1)";
    feedbacksEl.innerHTML = "";
    for (let i = 0; i < feedbackCards.length; i++) {
      feedbacksEl.innerHTML += feedbackCards[i];
    }
    setTimeout(() => {
      successEl.style.bottom = "-310px";
      successEl.style.transform = "scale(0)";
    }, 2000);
  }, 1000);
}

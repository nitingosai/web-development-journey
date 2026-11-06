const feedbackForm = document.getElementById("feedbackForm");
const submitButton = document.getElementById("submitButton");
const feedbackList = document.getElementById("feedbackList");
const feedbackCount = document.getElementById("feedbackCount");
const emptyState = document.getElementById("emptyState");
const successToast = document.getElementById("successToast");
const ratingButtons = document.querySelectorAll(".rating-button");
const ratingInput = document.getElementById("rating");

let selectedRating = 0;
let toastTimer;

// Handle rating selection and toggle the selected class on the stars.
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = Number(button.dataset.rating);
    ratingInput.value = selectedRating;

    ratingButtons.forEach((starButton) => {
      const value = Number(starButton.dataset.rating);
      starButton.classList.toggle("selected", value <= selectedRating);
    });

    document.getElementById("ratingError").textContent = "";
  });
});

feedbackForm.addEventListener("submit", (event) => {
  // Prevent the browser's default form submission and page reload.
  event.preventDefault();

  // Collect form values.
  const formData = new FormData(feedbackForm);
  const name = formData.get("name").trim();
  const rating = formData.get("rating");
  const feedback = formData.get("feedback").trim();

  // Clear previous errors.
  document.getElementById("nameError").textContent = "";
  document.getElementById("ratingError").textContent = "";
  document.getElementById("feedbackError").textContent = "";

  let isValid = true;

  if (!name) {
    document.getElementById("nameError").textContent = "Please enter your name.";
    isValid = false;
  }
  if (!rating) {
    document.getElementById("ratingError").textContent = "Please select a star rating.";
    isValid = false;
  }
  if (!feedback) {
    document.getElementById("feedbackError").textContent = "Please write a short feedback message.";
    isValid = false;
  }
  if (!isValid) return;

  // Temporarily disable the button to prevent duplicate submissions.
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  addFeedbackCard(name, Number(rating), feedback);

  feedbackForm.reset();
  selectedRating = 0;
  ratingButtons.forEach((button) => button.classList.remove("selected"));

  showSuccessMessage();

  setTimeout(() => {
    submitButton.disabled = false;
    submitButton.textContent = "Submit feedback";
  }, 1200);
});

function addFeedbackCard(name, rating, feedback) {
  // Hide the empty-state message after the first feedback is added.
  emptyState.style.display = "none";

  const card = document.createElement("article");
  card.classList.add("feedback-card");

  const userName = document.createElement("h3");
  userName.textContent = name;

  const stars = document.createElement("div");
  stars.classList.add("stars");
  stars.setAttribute("aria-label", `${rating} out of 5 stars`);
  stars.textContent = "★".repeat(rating) + "☆".repeat(5 - rating);

  const message = document.createElement("p");
  message.textContent = feedback;

  card.append(userName, stars, message);
  feedbackList.prepend(card);

  const total = feedbackList.querySelectorAll(".feedback-card").length;
  feedbackCount.textContent = `${total} ${total === 1 ? "review" : "reviews"}`;
}

function showSuccessMessage() {
  successToast.classList.add("show");
  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    successToast.classList.remove("show");
  }, 2500);
}

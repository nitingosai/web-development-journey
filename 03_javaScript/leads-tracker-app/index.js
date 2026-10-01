import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-a349b-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log(firebaseConfig.databaseURL);

const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const olEl = document.getElementById("ol-el");

saveBtn.addEventListener("click", function () {
  if (inputEl.value != "") {
    console.log(inputEl.value);
    inputEl.value = null;
  }
});

deleteBtn.addEventListener("click", function () {

});

function render(value) {
  let codeBunch = "";

  for (let i = 0; i < value.length; i++) {
    codeBunch += `
     <li>
      <a href="${value[i]}" target = "_blank">${value[i]}</a>
     </li>`;
  }

  olEl.innerHTML = codeBunch;
}

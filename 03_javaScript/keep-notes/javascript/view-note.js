// Database
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://keep-notes-d1c74-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const refNotes = ref(database, "notes");

// Logics
let data = "";
let noteIndex = JSON.parse(localStorage.getItem("note-index"));
let originalContent = "";
let originalTitle = "";
const noteTitle = document.getElementById("note-title");
const viewNote = document.getElementById("view-note");
const deleteNoteBTN = document.getElementById("delete-note-btn");
const saveNoteBTN = document.getElementById("save-note-btn");

onValue(refNotes, function (snapshot) {
  data = Object.entries(snapshot.val());
  render();
  originalTitle = data[noteIndex][1].title;
  originalContent = data[noteIndex][1].body;
});

noteTitle.addEventListener("input", function () {
  updateData("title", originalTitle, noteTitle.innerText);
});

viewNote.addEventListener("input", function () {
  updateData("body", originalContent, viewNote.textContent);
});

deleteNoteBTN.addEventListener("click", function () {
  remove(ref(database, `notes/${data[noteIndex][0]}`));
  window.location.href = "keep-notes.html";
});

function updateData(field, existData, newData) {
  saveNoteBTN.addEventListener("click", function () {
    if (field === "title") {
      if (existData != newData) {
        update(ref(database, `notes/${data[noteIndex][0]}`), {
          title: newData,
        });
      }
    } else {
      if (existData != newData) {
        update(ref(database, `notes/${data[noteIndex][0]}`), {
          body: newData,
        });
      }
    }
  });
}

function render() {
  noteTitle.innerText = data[noteIndex][1].title;
  viewNote.textContent = data[noteIndex][1].body;
}

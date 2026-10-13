// Database
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
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
let data = [];
const writeNoteEl = document.getElementById("write-note-el");
const setTitleEl = document.getElementById("set-title-el");
const addNoteBtn = document.getElementById("add-note-btn");
const noteListSec = document.getElementById("notes-list");
const noteCards = document.getElementsByClassName("note-card");
const deleteNoteBTNs = document.getElementsByClassName("delete-btn");

onValue(refNotes, function (snapshot) {
  data = Object.entries(snapshot.val() || {});
  render();
});

addNoteBtn.addEventListener("click", function (event) {
  if (writeNoteEl.value != "" && setTitleEl.value != "") {
    const note = {
      title: setTitleEl.value,
      body: writeNoteEl.value,
    };
    push(refNotes, note);
    writeNoteEl.value = "";
    setTitleEl.value = "";
  }
});

function clickOnNoteCard() {
  for (let i = 0; i < noteCards.length; i++) {
    noteCards[i].addEventListener("click", function () {
      localStorage.setItem("note-index", JSON.stringify(i));
      window.location.href = "view-note.html";
    });
  }
}

function deleteNote() {
  for (let i = 0; i < deleteNoteBTNs.length; i++) {
    deleteNoteBTNs[i].addEventListener("click", function (event) {
      event.stopPropagation();
      remove(ref(database, `notes/${event.currentTarget.id}`));
    });
  }
}

function render() {
  let codeBunch = `<div class="sec-header align-row">
                        <h3 class="sec-heading txt-primary">Your Notes</h3>
                        <h3 class="notes-counter txt-scndry">
                          Notes: <span id="count-notes-el"></span>
                        </h3>
                      </div>`;
  for (let i = 0; i < data.length; i++) {
    codeBunch += `<div id="NC${i}" class="note-card bg-input align-row" role="button">
                    <h3 id="${i}" class="txt-primary"></h3>
                    <button id="${data[i][0]}" class="delete-btn bg-danger align-row">
                      <img
                      src="../assets/images/trash.png"
                      alt="White trash bin icon"
                      class="icon"
                      />
                    </button>
                  </div>`;
  }
  noteListSec.innerHTML = codeBunch;
  document.getElementById("count-notes-el").textContent = data.length;
  for (let i = 0; i < data.length; i++) {
    document.getElementById(`${i}`).textContent = data[i][1].title;
  }
  clickOnNoteCard();
  deleteNote();
}

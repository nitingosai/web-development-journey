let leads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("lead"));
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const olEl = document.getElementById("ol-el");

if (leadsFromLocalStorage) {
  leads = leadsFromLocalStorage;
  render(leads);
}

saveBtn.addEventListener("click", function () {
  if (inputEl.value != "") {
    if (leads.includes(inputEl.value) === false) {
      leads.push(inputEl.value);
      localStorage.setItem("lead", JSON.stringify(leads));
      inputEl.value = null;
      render(leads);
    }
  }
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (leads.includes(tabs[0].url) === false) {
      leads.push(tabs[0].url);
      localStorage.setItem("lead", JSON.stringify(leads));
      render(leads);
    }
  });
});

deleteBtn.addEventListener("click", function () {
  leads = [];
  localStorage.clear();
  render(leads);
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
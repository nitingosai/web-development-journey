let unitValue = 0; // Meter, Feet, Liters, Gallons, KG, Pounds
let convertion = convert();
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
const unitEls = document.getElementsByClassName("unit-el");
const meterEl = document.getElementById("meter-el");
const feetEl = document.getElementById("feet-el");
const literEl = document.getElementById("liter-el");
const gallonEl = document.getElementById("gallon-el");
const kgEl = document.getElementById("kg-el");
const poundEl = document.getElementById("pound-el");

renderPage(); 

convertBtn.addEventListener("click", function () {
  if (inputEl.value != "") {
    unitValue = Number(inputEl.value);
    convertion = convert();
    renderPage();
  }
});

resetBtn.addEventListener("click", function () {
  if (inputEl.value != "") {
    inputEl.value = "";
    unitValue = 0;
    convertion = convert();
    renderPage();
  }
});

function convert() {
  return {
    meterToFeet: unitValue * 3.281,
    feetToMeter: unitValue / 3.281,
    literToGallon: unitValue / 3.785,
    gallonToLiter: unitValue * 3.785,
    kgToPound: unitValue * 2.205,
    poundsToKg: unitValue / 2.205,
  };
}

function renderPage() {
  for (let i = 0; i < unitEls.length; i++) {
    unitEls[i].innerText = unitValue;
  }

  meterEl.innerText = convertion.feetToMeter.toFixed(3);
  feetEl.innerText = convertion.meterToFeet.toFixed(3);
  literEl.innerText = convertion.gallonToLiter.toFixed(3);
  gallonEl.innerText = convertion.literToGallon.toFixed(3);
  kgEl.innerText = convertion.poundsToKg.toFixed(3);
  poundEl.innerText = convertion.kgToPound.toFixed(3);
}

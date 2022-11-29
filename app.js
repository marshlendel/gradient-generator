const colorText = document.querySelector("h3");
let color1 = document.querySelectorAll("input")[0];
let color2 = document.querySelectorAll("input")[1];
const button = document.querySelector("button");
let body = document.querySelector("body");

colorText.innerText = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

function setGradient(c1, c2) {
  colorText.innerText = `linear-gradient(to right, ${c1}, ${c2})`;
  body.style.background = `linear-gradient(to right, ${c1}, ${c2})`;
}

function randomNumber() {
  let randomNum = Math.floor(Math.random() * 256);
  return randomNum;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function randomGradient() {
  let colors = [];
  for (let i = 0; i < 6; i++) {
    colors.push(randomNumber());
  }
  let generatedC1 = rgbToHex(colors[0], colors[1], colors[2]);
  let generatedC2 = rgbToHex(colors[3], colors[4], colors[5]);
  setGradient(generatedC1, generatedC2);
  color1.value = generatedC1;
  color2.value = generatedC2;
}

color1.addEventListener("input", () => setGradient(color1.value, color2.value));
color2.addEventListener("input", () => setGradient(color1.value, color2.value));
button.addEventListener("click", randomGradient);

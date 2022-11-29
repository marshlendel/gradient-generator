const colorText = document.querySelector("h3");
let color1 = document.querySelectorAll("input")[0];
let color2 = document.querySelectorAll("input")[1];
let body = document.querySelector("body");

colorText.innerText = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

function setGradient() {
  colorText.innerText = `linear-gradient(to right, ${color1.value}, ${color1.value})`;
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

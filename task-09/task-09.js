
const button = document.querySelector('.change-color');
const body = document.body;

button.addEventListener('click', changeColorOnClick);

function changeColorOnClick() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
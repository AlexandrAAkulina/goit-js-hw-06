const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInputChangeEvent);

function onInputChangeEvent (event) {
    span.textContent = event.currentTarget.value;
}
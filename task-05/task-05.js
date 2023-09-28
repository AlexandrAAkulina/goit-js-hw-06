const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInputChangeEvent);

function onInputChangeEvent () {
    if (input.value.trim() === '') {
        span.textContent = 'Anonimous';
    } else {span.textContent = input.value}
}
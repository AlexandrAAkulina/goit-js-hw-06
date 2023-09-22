const input = document.querySelector('#validation-input');

input.addEventListener('blur', onBlurCheckInputLength);

function onBlurCheckInputLength() {
    const inputValue = Number(input.value.length);
    const necessaryLength = parseInt(input.getAttribute('data-length'));
    if (necessaryLength === inputValue) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}


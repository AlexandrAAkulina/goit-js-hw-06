const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlurCheckInputLength);

function onBlurCheckInputLength() {
  const inputValue = input.value.length;
  const necessaryLength = parseInt(input.getAttribute('data-length'));
  if (necessaryLength === inputValue) {
    updateClassEl('valid', 'invalid');
  } else {
    updateClassEl('invalid', 'valid');
  }
}

function updateClassEl(a, b) {
  input.classList.add(a);
  input.classList.remove(b);
}


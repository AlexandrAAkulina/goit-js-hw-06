const form = document.querySelector('.login-form');
form.addEventListener('submit', formSubmitProcessing);

function formSubmitProcessing(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (!email.value || !password.value) {
        return alert('All fields must be filled!');
    } else {
        const formObj = {
            email: email.value,
            password: password.value,
        };
        console.log(formObj);
        evt.currentTarget.reset();
    }
}


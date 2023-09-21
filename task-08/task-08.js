const form = document.querySelector('.login-form');
form.addEventListener('submit', formSubmitProcessing);

function formSubmitProcessing(el) {
    el.preventDefault();
    const { email, password } = el.currentTarget.elements;
    if (!email.value || !password.value) {
        return alert('All fields must be filled!');
    } else {
        const formObj = {
            email: email.value,
            password: password.value,
        };
        console.log(formObj);
        el.currentTarget.reset();
    }
}


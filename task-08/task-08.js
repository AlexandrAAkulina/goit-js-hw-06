const form = document.querySelector('.login-form');
form.addEventListener('submit', formSubmitProcessing);

function formSubmitProcessing(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (!email.value.trim() || !password.value.trim()) {
        return alert('All fields must be filled!');
    } const formObj = {
            email: email.value,
            password: password.value,
        };
        console.log(formObj);
        evt.currentTarget.reset();
    
}


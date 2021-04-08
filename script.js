
const errorMessage = document.querySelector('#error-message');
const email = document.querySelector('input[type="text"]');
const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

document.querySelector('form').onsubmit = e => {
    e.preventDefault();
    if (email.value == "") {errorMessage.textContent = 'Oops! Please add your email'}
    else if (!pattern.test(email.value)) {errorMessage.textContent = "Oops! That doesn’t look like an email address"}
    else (errorMessage.textContent = "Thanks for your submission")
}
const usernameField = document.getElementById('form-username');
const emailField = document.getElementById('form-email');
const passwordField = document.getElementById('form-password');
const passwordReField = document.getElementById('form-passwordre');

const registrationForm = document.getElementById('form-registration');

registrationForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log('username:' + usernameField.value);
}
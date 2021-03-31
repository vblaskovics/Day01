const usernameField = document.getElementById('form-username');
const emailField = document.getElementById('form-email');
const emailErrorField = document.getElementById('email-error');
const passwordField = document.getElementById('form-password');
const passwordReField = document.getElementById('form-password-re');

const registrationForm = document.getElementById('form-registration');
registrationForm.addEventListener("submit", handleSubmit)

emailField.addEventListener("change", handleEmailChange);

function handleEmailChange(e) {
    e.preventDefault()
    if(emailField.value.indexOf('@') === -1){
        emailErrorField.classList.add('error');
    } else {
        emailErrorField.classList.remove('error');
    }
}

function handleSubmit(e) {
    e.preventDefault();
    if (usernameField.value !== "" &&
        emailField.value !== "" &&
        passwordField.value !== "" &&
        passwordReField.value !== "") {
        alert("Siker");
    } else {
        alert("Nem siker");
    }

}
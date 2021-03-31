const usernameField = document.getElementById('form-username');
const emailField = document.getElementById('form-email');
const passwordField = document.getElementById('form-password');
const passwordReField = document.getElementById('form-password-re');

const registrationForm = document.getElementById('form-registration');

registrationForm.addEventListener("submit", handleSubmit)

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
const usernameField = document.getElementById('form-username');
const emailField = document.getElementById('form-email');
const emailErrorField = document.getElementById('email-error');
const passwordField = document.getElementById('form-password');
const passwordReField = document.getElementById('form-password-re');

const registrationForm = document.getElementById('form-registration');
registrationForm.addEventListener("submit", handleSubmit)

emailField.addEventListener("blur", handleEmailChange);

function handleEmailChange(e) {
    e.preventDefault()
    if(emailField.value === "") {
        emailErrorField.classList.add('error');
        emailField.classList.add('error');
        emailErrorField.innerHTML = "Kötelező megadni!";
        return;
    } else {
        emailErrorField.classList.remove('error');
        emailField.classList.remove('error');
    }

    if(emailField.value.indexOf('@') === -1){
        emailErrorField.classList.add('error');
        emailErrorField.innerHTML = "Hibás email cím!"
        emailField.classList.add('error');
    } else {
        emailErrorField.classList.remove('error');
        emailField.classList.remove('error');
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
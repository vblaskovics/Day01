"use strict";

(function () {
    const form = document.getElementById('form-registration');
    form.addEventListener("submit", handleSubmit);

    const formGroups = {};
    const formData = {};
    const isError = {};

    const formFields = document.querySelectorAll('.form-registration input');
    formFields.forEach((field) => {
        formGroups[field.name] = {
            field: field,
            errorField: document.getElementById(`error-${field.name}`)
        };
        formData[field.name] = null;
        field.addEventListener('blur', handleInputBlur);
    })

    function setErrorMessage(fieldName, errorMsg) {
        isError[fieldName] = errorMsg;
    }

    function updateGroupByName(fieldName) {
        const errorMsg = isError[fieldName];
        const group = formGroups[fieldName];

        if (errorMsg) {
            group.field.classList.add('error');
            group.errorField.classList.add('error');
            group.errorField.textContent = errorMsg;
        } else {
            group.field.classList.remove('error');
            group.errorField.classList.remove('error');
            group.errorField.textContent = '';
        }
    }

    const validationFunctions = {
        required: value => value === "" ?
            'Ez a mező kötelező!' : null,
        propername: value => value.length === 0 || value[0] !== value[0].toUpperCase() ? 
            'Nagy betűvel kell kezdődnie!' : null,
        email: value => value.indexOf('@') === -1 ?
            'Kell benne @ karakternek lennie!' : null,
        hasnumber: (value) => !(/\d/.test(value)) ?
            'Kell benne lennie számjegynek!' : null
    }

    function validateField(rule, field) {
        const errorMsg = validationFunctions['propername'](field.value);
        setErrorMessage(field.name, errorMsg);
        updateGroupByName(field.name);
    }

    function handleInputBlur(e) {
        e.preventDefault();
        const field = e.target;
        formData[field.name] = field.value;
        const validationRules = field.getAttribute('data-validation').split(' ');
        validateField(validationRules[0], field);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert('Siker');
    }
})()

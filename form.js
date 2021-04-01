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
    })

    console.log('formGroups:', formGroups);

    function handleSubmit(e) {
        e.preventDefault();
        alert('Siker');
    }
})()

"use strict";

(function () {
    const form = document.getElementById('form-registration');
    form.addEventListener("submit", handleSubmit);
    
    const formGroups = {};
    const formData = {};
    const isError = {};

    // {
    //     username: ...,
    //     email: ...,
    // }
    const formFields = document.querySelectorAll('.form-registration input');
    formFields.forEach((field) => {
        field.name
    })

    function handleSubmit(e) {
        e.preventDefault();
        alert('Siker');
    }
})()

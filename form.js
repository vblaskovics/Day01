"use strict";

(function () {
    const form = document.getElementById('form-registration');
    form.addEventListener("submit", handleSubmit)
    
    function handleSubmit(e) {
        e.preventDefault();
        alert('Siker');
    }
})()


"use strict";

(function () {
    const form = document.getElementById('form-registration');
    form.addEventListener("submit", handleSubmit);

    const formGroups = {};
    const formData = {};
    const isError = {};

    const formFields = document.querySelectorAll('.form-registration input, .form-registration select');
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
            'Nagybetűvel kell kezdődnie!' : null,
        email: value => value.indexOf('@') === -1 ?
            'Kell benne @ karakternek lennie!' : null,
        hasnumber: (value) => !(/\d/.test(value)) ?
            'Kell benne lennie számjegynek!' : null,
        morewords: (value) => value.split(' ').length < 2 ?
            'Több szóból kell állnia!' : null,
        alluppercase: (value) => value.split(' ').some(word => word[0] !== word[0].toUpperCase()) ?
            'Minden szónak nagybetűvel kell kezdődnie!' : null
    }

    function validateField(rule, field) {
        const errorMsg = validationFunctions[rule](field.value);
        setErrorMessage(field.name, errorMsg);
        updateGroupByName(field.name);
        return errorMsg == null
    }

    function passwordValidation() {
        const errorMsg = formData.password !== formData.passwordre ?
            'A jelszavaknak meg kell egyezni!' : null;
        setErrorMessage('password', errorMsg);
        setErrorMessage('passwordre', errorMsg);
        updateGroupByName('password');
        updateGroupByName('passwordre');
    }

    function handleInputBlur(e) {
        e.preventDefault();
        const field = e.target;
        formData[field.name] = field.value;
        const validationRules = field.getAttribute('data-validation').split(' ');
        validationRules.every(rule => validateField(rule, field))

        if (formGroups['password'] && formGroups['passwordre']) {
            passwordValidation()
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        Object.values(formGroups).forEach((group) => {
            const validationRules = group.field.getAttribute('data-validation').split(' ');
            if (validationRules.includes('required')) {
                validateField('required', group.field);
            }
        })

        const hasError = Object.keys(isError).some(key => isError[key] !== null)

        if (hasError) {
            alert("Nem sikerült")
        } else {
            alert("Sikerült")
            console.log(formData);
        }
    }
})()


// FELADATOK
// 1. Város mező hozzáadása, nem kötelező mező, nagybetűs
// 2. Utca házszám, nagybetűs, szám van benne
// 3. Teljes név, validáció: legalább 2 szó, mindegyik szó nagybetűs
// 4. Jelszó egyezés vizsgálata
// 5. Sikeres regisztráció után ürítsük ki a form-ot
// 6. Nem választó (<select>)
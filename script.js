const email = document.querySelector('#email');
email.addEventListener('focusout', () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid email');
    }
    else {
        email.setCustomValidity('');
    }
    email.reportValidity();
});

const country = document.querySelector('#country');

const zipCode = document.querySelector('#zip-code');

zipCode.addEventListener('focusout', () => {
    if (zipCode.validity.patternMismatch) {
        zipCode.setCustomValidity('Please enter a valid zip code');
    }
    else {
        zipCode.setCustomValidity('');
    }
    email.reportValidity();
});

const password = document.querySelector('#password');

const passwordConfirmation = document.querySelector('#password-confirmation');

passwordConfirmation.addEventListener('input', () => {
    if (!password.valueMissing && passwordConfirmation.value !== password.value) {
        passwordConfirmation.setCustomValidity('Passwords do not match');
    }
    else {
        passwordConfirmation.setCustomValidity('');
    }
    passwordConfirmation.reportValidity();
});

const inputs = [email, country, zipCode, password, passwordConfirmation];

const submitButton = document.querySelector('button');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    inputs.forEach((input) => emptyField(input));
})

function emptyField(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity('Please fill this in');
    }
    else {
        input.setCustomValidity('');
    }
    input.reportValidity();
}
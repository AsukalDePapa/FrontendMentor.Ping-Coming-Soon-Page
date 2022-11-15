const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateEmail();
});

const setError = (element, message) => {
    const inputParent = element.parentElement;
    const errorDisplay = inputParent.querySelector('.error');

    errorDisplay.innerText = message;
    inputParent.classList.add('error');
    inputParent.classList.remove('success');
}

const setSuccess = e => {
    const inputParent = e.parentElement;
    const errorDisplay = inputParent.querySelector('.error');

    errorDisplay.innerText = '';
    inputParent.classList.remove('error');
    inputParent.classList.add('success');
}

const isValidEmail = email => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailPattern.test(String(email).toLowerCase());
}

const validateEmail = () => {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        setError(email, 'Email address is required');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Please proved a valid email address')
    }else {
        setSuccess(email);
    }
}
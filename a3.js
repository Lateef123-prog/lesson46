function validate(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');
    let message = '';

    if (email === '') {
        message = 'Enter an email.';
        msgBox.style.color = 'red';
    } else if (pass === '') {
        message = 'Enter a password.';
        msgBox.style.color = 'red';
    } else if (age === '') {
        message = 'Login successful!';
        msgBox.style.color = 'green';
    } else {
        message = 'Login successful!';
        msgBox.style.color = 'green';
    }
    msgBox.innerText = message;
}
document.getElementById('submit').addEventListener('click', function(event) {
    // Prevent form from submitting if there are errors
    event.preventDefault();

    // Get input values
    const email = document.getElementById('emailid').value.trim();
    const password = document.getElementById('password').value.trim();

    // Get error elements
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Clear previous errors
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validate email
    if (!email) {
        emailError.textContent = 'Email is required.';
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email format.';
    }

    // Validate password
    if (!password) {
        passwordError.textContent = 'Password is required.';
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
    }

    // If there are no errors, you can submit the form or perform any other action
    if (!emailError.textContent && !passwordError.textContent) {
        alert('Form submitted successfully!');
        // You can now submit the form or do something else
        // e.g., document.getElementById('login-form').submit();
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

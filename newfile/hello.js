// Toggle between login and mental health sections after login
function loginUser(email, password) {
    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Store the token and switch to the logged-in view
            localStorage.setItem('jwt_token', data.token);
            document.body.classList.add('logged-in');  // Add class to indicate logged-in state
            alert('Login successful!');
        } else {
            alert(data.message || 'Login failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login.');
    });
}

// Show login form and hide mental health section on logout
function logoutUser() {
    localStorage.removeItem('jwt_token');
    document.body.classList.remove('logged-in');  // Remove logged-in class
    alert('Logged out successfully!');
}

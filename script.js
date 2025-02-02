function showRegister() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.querySelector('.container').classList.add('active');
}

// Show Login Form
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.querySelector('.container').classList.add('active');
}

// Show Questionnaire Form
function showQuestionnaire() {
    document.getElementById('questionnaire').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.querySelector('.container').classList.add('active');
}

// Show Results
function showResults(result) {
    document.getElementById('results').style.display = 'block';
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('resultText').textContent = result;
    document.querySelector('.container').classList.add('active');
}

// Handle Registration
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Registration successful!');
    showLogin();
});

// Handle Login
document.getElementById('loginFormSubmit').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Login successful!');
    showQuestionnaire();
});

// Handle Questionnaire Submission
document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');

    const answers = [q1, q2, q3, q4, q5];
    const score = answers.filter(ans => ans && ans.value === 'yes').length;

    let result;
    if (score >= 4) {
        result = "You might be suffering from exhaustion.";
    } else if (score >= 2) {
        result = "You might be suffering from anxiety.";
    } else {
        result = "You might be suffering from depression.";
    }

    showResults(result);
});

// Restart the quiz
function restartQuiz() {
    showRegister();
    document.getElementById('results').style.display = 'none';
}
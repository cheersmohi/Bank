document.getElementById('submit-btn').addEventListener('click', function () {
    
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'xaeen@baap.com' && userPassword == 'green') {
        window.location.href = 'another.html'
    }


});


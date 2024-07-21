document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        // Here you can add code to handle signup logic, like sending data to a server
        console.log('Signing up with:', username, password);
        // Example: You could send an AJAX request to a backend server
    });

    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('signin-username').value;
        const password = document.getElementById('signin-password').value;

        // Here you can add code to handle signin logic, like checking credentials
        console.log('Signing in with:', username, password);
        // Example: You could validate credentials against a database or mock data
    });
});

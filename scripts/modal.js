// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    let signupModal = document.getElementById('signup-modal');
    let signinModal = document.getElementById('signin-modal');

     // Get the create post button and modal
     let createPostBtn = document.getElementById('create-post');
     let createPostModal = document.getElementById('create-post-modal');

    // Get the buttons that open the modals
    let signupBtn = document.getElementById('signup');
    let signinBtn = document.getElementById('signin');

    // Get the <span> element that closes the modals
    let closeBtns = document.querySelectorAll('.close-btn');

    // When the user clicks the signup button, open the modal
    signupBtn.onclick = function() {
        signupModal.style.display = 'block';
    }

    // When the user clicks the signin button, open the modal
    signinBtn.onclick = function() {
        signinModal.style.display = 'block';
    }

    // When the user clicks the create post button, open the modal
    createPostBtn.onclick = function() {
        createPostModal.style.display = 'block';
    };

    // When the user clicks on <span> (x), close the modal
    closeBtns.forEach(span => {
        span.onclick = function() {
            signupModal.style.display = 'none';
            signinModal.style.display = 'none';
            createPostModal.style.display = 'none';
        }
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == signupModal) {
            signupModal.style.display = 'none';
        }
        if (event.target == signinModal) {
            signinModal.style.display = 'none';
        }
        if (event.target == createPostModal) {
            createPostModal.style.display = 'none';
        }
    }

    // Form validation for Signup
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        let name = document.getElementById('name').value;
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirm-password').value;

        if (!name || !username || !password || !confirmPassword) {
            alert('Please fill out this field.');
            event.preventDefault(); // Prevent form submission
        } else if (password !== confirmPassword) {
            alert('Passwords do not match.');
            event.preventDefault(); // Prevent form submission
        }
    });

    // Form validation for Signin
    document.getElementById('signin-form').addEventListener('submit', function(event) {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Please fill out this field.');
            event.preventDefault(); // Prevent form submission
        }
    });

    // Handle the "Sign Up" link in the sign-in modal
    let signupLink = document.getElementById('signup-link');
    signupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        signinModal.style.display = 'none';
        signupModal.style.display = 'block';
    });
});
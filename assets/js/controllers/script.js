//DOM
//Button
const loginBtn = document.getElementById('login-btn');

//Fields
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');

import { validateLogin } from '../services/loginServices.js';

if (loginBtn) {
    loginBtn.addEventListener('click', async function (e) {
        e.preventDefault();
        const username = usernameField.value.trim();
        const password = passwordField.value;
        if (await validateLogin(username, password)) {
            goToDashboard();
        }
    });
}

function goToDashboard() {
    window.location.href = "dashboard.html";
}
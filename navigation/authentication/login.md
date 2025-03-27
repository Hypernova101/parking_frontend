---
layout: login 
title: Login
permalink: /login
search_exclude: true
show_reading_time: false 
---

<div class="login-container">
    <!-- Python Login Form -->
    <div class="login-card">
        <h1 id="pythonTitle">User Login (Python/Flask)</h1>
        <form id="pythonForm" onsubmit="pythonLogin(); return false;">
            <p>
                <label>
                    GitHub ID:
                    <input type="text" name="uid" id="uid" required>
                </label>
            </p>
            <p>
                <label>
                    Password:
                    <input type="password" name="password" id="password" required>
                </label>
            </p>
            <p>
                <button type="submit">Login</button>
            </p>
            <p id="message" style="color: red;"></p>
        </form>
    </div>
    <div class="signup-card">
        <h1 id="signupTitle">Sign Up</h1>
        <form id="signupForm" onsubmit="signup(); return false;">
            <p>
                <label>
                    Name:
                    <input type="text" name="name" id="name" required>
                </label>
            </p>
            <p>
                <label>
                    GitHub ID:
                    <input type="text" name="signupUid" id="signupUid" required>
                </label>
            </p>
            <p>
                <label>
                    Password:
                    <input type="password" name="signupPassword" id="signupPassword" required>
                </label>
            </p>
            <p>
                <label>
                    Interests:
                    <input type="text" name="interests" id="interests" placeholder="e.g., Soccer, Pool, Computer Science" required>
                </label>
            </p>
            <p>
                <button type="submit">Sign Up</button>
            </p>
            <p id="signupMessage" style="color: green;"></p>
        </form>
    </div>
</div>

<script type="module">
    import { login, pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    // Function to handle Python login
    window.pythonLogin = function() {
        const options = {
            URL: `${pythonURI}/api/authenticate`,
            callback: handleLoginResponse,
            message: "message",
            method: "POST",
            cache: "no-cache",
            body: {
                uid: document.getElementById("uid").value,
                password: document.getElementById("password").value,
            }
        };
        login(options);
    }

    // Function to handle signup
    window.signup = function() {
        const signupButton = document.querySelector(".signup-card button");

        // Disable the button and change its color
        signupButton.disabled = true;
        signupButton.style.backgroundColor = '#d3d3d3'; // Light gray to indicate disabled state

        const signupOptions = {
            URL: `${pythonURI}/api/user`,
            method: "POST",
            cache: "no-cache",
            body: {
                name: document.getElementById("name").value,
                uid: document.getElementById("signupUid").value,
                password: document.getElementById("signupPassword").value,
                interests: document.getElementById("interests").value, // Include interests
            }
        };

        fetch(signupOptions.URL, {
            method: signupOptions.method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupOptions.body)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Signup failed: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("signupMessage").textContent = "Signup successful!";
            // Optionally redirect to login page or handle as needed
            // window.location.href = '{{site.baseurl}}/profile';
        })
        .catch(error => {
            console.error("Signup Error:", error);
            document.getElementById("signupMessage").textContent = `Signup Error: ${error.message}`;
            // Re-enable the button if there is an error
            signupButton.disabled = false;
            signupButton.style.backgroundColor = ''; // Reset to default color
        });
    };

    // Function to handle login response
    function handleLoginResponse() {
        const URL = `${pythonURI}/api/id`;

        fetch(URL, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Flask server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.role === 'admin') {
                    window.location.href = '{{site.baseurl}}/adminlog';
                } else {
                    window.location.href = '{{site.baseurl}}/userlog';
                }
            })
            .catch(error => {
                console.error("Python Database Error:", error);
                const errorMsg = `Python Database Error: ${error.message}`;
                document.getElementById("message").textContent = errorMsg;
            });
    }

    // Call relevant database functions on the page load
    window.onload = function() {
         pythonDatabase();
    };
</script>
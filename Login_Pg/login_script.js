<!-- JavaScript Enhancements -->
// home_script.js (For Homepage Navigation Smooth Scroll)
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// login_script.js (For Improved Login Handling)
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");
    
    if (!email || !password) {
        loginMessage.textContent = "Please fill out both fields.";
        loginMessage.style.color = "red";
        return;
    }
    
    loginMessage.textContent = `Welcome back, ${email.split("@")[0]}!`;
    loginMessage.style.color = "green";
    
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1500);
});
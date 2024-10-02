// login.js
const correctPassword = "FSA"; // Replace with your actual password

// Check if user is already logged in
if (localStorage.getItem("isLoggedIn")) {
  window.location.href = "index.html"; // Redirect to index.html if already logged in
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const password = document.getElementById("password").value; // Get the password input

    if (password === correctPassword) {
      // Password is correct, set login status and redirect to index.html
      localStorage.setItem("isLoggedIn", "true"); // Set login status
      window.location.href = "index.html"; // Redirect to index.html after login

      // Start the inactivity timer
      startInactivityTimer();
    } else {
      // Show error message if password is incorrect
      document.getElementById("errorMessage").innerText =
        "Incorrect password. Please try again.";
    }
  });

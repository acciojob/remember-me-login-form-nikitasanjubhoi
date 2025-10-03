//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("login-form");

// ✅ Show existing user button if credentials exist
window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  }
});

// ✅ Form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;
  const remember = checkbox.checked;

  alert(`Logged in as ${username}`);

  if (remember) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "inline-block";
  } else {
    // Remove credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

// ✅ Existing user login
existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});


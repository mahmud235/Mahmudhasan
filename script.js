function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password) {
    // Allow any input for now
    window.location.href = "home.html";  // Redirect to real site
  } else {
    alert("Please enter both email and password.");
  }
}

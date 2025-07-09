function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Note: This is NOT secure; for real login, use backend verification
  if (email !== "" && password !== "") {
    // Redirect after "login"
    window.location.href = "home.html";
  } else {
    alert("Please enter both Gmail and Password.");
  }
}

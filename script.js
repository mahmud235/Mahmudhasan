function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  // Dummy login: koi bhi gmail/password chalega
  if (email && pass) {
    window.location.href = "home.html";
  } else {
    alert("Please enter both Gmail and Password.");
  }
}

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password) {
    window.location.href = "profilehome.html";
  } else {
    alert("Please enter Gmail and Password");
  }
}

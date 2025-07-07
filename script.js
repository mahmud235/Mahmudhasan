function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const sound = document.getElementById("login-sound");

  if (email === "mahmudhasan6595@gmail.com" && password === "123456") {
    sound.play();
    setTimeout(() => {
      window.location.href = "profile.html";
    }, 500); // delay for sound
  } else {
    alert("Incorrect login credentials!");
  }
}

function togglePassword() {
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}

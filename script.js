function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    window.location.href = "home.html";
  } else {
    alert("Please enter Gmail and Password");
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function changeLang(lang) {
  const text = document.getElementById("introText");
  if (lang === "hi") {
    text.innerText = "मैं महमूद हसन हूँ";
  } else {
    text.innerText = "I am Mahmud Hasan";
  }
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Dummy login
  if (email && password) {
    window.location.href = "home.html";
  } else {
    alert("Please enter Gmail and Password");
  }
}

function setLanguage(lang) {
  const html = document.getElementById("html");
  const greeting = document.getElementById("greeting");
  const products = document.getElementById("products").getElementsByTagName("h2")[0];
  const about = document.getElementById("about").getElementsByTagName("h2")[0];
  const contact = document.getElementById("contact").getElementsByTagName("h2")[0];

  if (lang === "hi") {
    greeting.innerText = "स्वागत है, महमूद हसन";
    products.innerText = "🛒 उत्पाद";
    about.innerText = "👨‍💻 मेरे बारे में";
    contact.innerText = "📧 संपर्क करें";
  } else {
    greeting.innerText = "Welcome, Mahmud Hasan";
    products.innerText = "🛒 Products";
    about.innerText = "👨‍💻 About Me";
    contact.innerText = "📧 Contact";
  }
}

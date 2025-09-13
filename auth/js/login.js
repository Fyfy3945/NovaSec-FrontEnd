document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Identifiants codés en dur
  if (user === "YkiXkZjkLktYk" && pass === "114775273653822723") {
    window.location.href = "../auth2/portal.html";
  } else {
    alert("Accès refusé");
  }
});
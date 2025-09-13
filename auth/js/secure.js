const credentials = [
  { identifiant: "A667077165", motdepasse: "S5QxEzBrEaism6o", batiment: "A" }
]
document.getElementById("secureForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const id = document.getElementById("identifiant").value.trim();
  const pass = document.getElementById("motdepasse").value.trim();
  const bat = document.getElementById("batiment").value;

  const found = credentials.find(u => 
    u.identifiant.toLowerCase() === id.toLowerCase() &&
    u.motdepasse === pass &&
    u.batiment.toUpperCase() === bat.toUpperCase()
  );

  if (found) {
    window.location.href = "../../fondation/success.html";
  } else {
    alert("Accès refusé");
  }
});
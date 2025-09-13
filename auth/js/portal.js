// On stocke directement les utilisateurs ici
const users = [
  { nom: "HUEBER", prenom: "Abel", id: "A667077165" }
];

document.getElementById("idForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const id = document.getElementById("agentId").value.trim();

  const found = users.find(u => 
    u.nom.toLowerCase() === nom.toLowerCase() &&
    u.prenom.toLowerCase() === prenom.toLowerCase() &&
    u.id.toUpperCase() === id.toUpperCase()
  );

  if (found) {
    window.location.href = "../auth3/secure.html";
  } else {
    alert("Informations incorrectes");
  }
});
document.getElementById("idForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const pass = document.getElementById("acceskey").value;

  // Identifiants codés en dur
  if (pass === "XSSH&KSu9GA31T*5Seres8jtM") {
    window.location.href = "../building_a/building_a.html";
  } else if (pass === "zc@_7X6r%pmV*mWWdPFL9Pk7S") {
    window.location.href = "../building_b/building_b.html";
  } else if (pass === "@!vid*CLE-16HbFuf1QL_6U_N") {
    window.location.href = "../building_c/building_c.html"
  } else if (pass === "k0SNZ1Q16J6kj#8xlRHsfGiwo") {
    window.location.href = "../building_d/building_d.html"
  } else if (pass === "o0DS$prVRo=MKqgfu9s*XMxPp") {
    window.location.href = "../building_e/building_e.html"
  } else if (pass === "AJKNHWf4asE6=VtIYIqB3IJqN") {
    window.location.href = "../building_f/building_f.html"
  } else if (pass === "i=CWP*PcR1e3%BY_-P&I7LRFP") {
    window.location.href = "../building_g/building_g.html"
  } else if (pass === "cFY@rUt1bB7jJhTdGS$dqLi7E") {
    window.location.href = "../building_h/building_h.html"
  } else {
    alert("Accès refusé")
  }
});
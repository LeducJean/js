MaDiv = document.getElementById("button");

MaDiv.addEventListener("click", monclick);

function monclick(evenement) {
    var long = window.prompt("Saisir une longueur : ");
    var larg = window.prompt("Saisir une largeur : ");
    var air = long * larg;
    var perimetre = long * 2 + larg * 2;
    alert("air : " + air + " perimètre : " + perimetre);
}
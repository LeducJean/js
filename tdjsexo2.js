MaDiv = document.getElementById("button");

MaDiv.addEventListener("click", monclick);

function monclick(evenement) {
    var dia = window.prompt("Saisir un diametre : ");
    var perimetre = dia * Math. PI;
    var air = dia / 2;
    var air2 = Math. PI * air * air;
    alert("perimètre : " + perimetre + " air : " + air2);
}
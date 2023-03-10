MaDiv = document.getElementById("button");

MaDiv.addEventListener("click", monclick);

function monclick(evenement) {
    var dia = window.prompt("Saisir un diametre : ");
    var perimetre = dia * 3.14;
    var air = dia / 2;
    var air2 = 3.14 * air * air;
    alert("perimètre : " + perimetre + " air : " + air2);
}
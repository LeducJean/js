/*

var MavariableString = "toto";
var MavariableNumerique = 100;
var MavariableTableau = ['Apple', 'Banana'];
var MavariableObjet = window;
alert(toto + MavariableString + MavariableNumerique +
    MavariableTableau[0] + MavariableObjet.location.pathname);



var MavariableString = "toto" ;
var MavariableNumerique = prompt("entrez un nombre", 100);

if (MavariableString == "toto" && MavariableNumerique !=200 || MavariableNumerique <= 100){
    alert("je suis le cas 1");
}else{
    alert("je suis le cas 2");
}



if (window.outerWidth < 1250){
    alert("La fenetre est de largeur de moins de 1250px");
}else{
   alert("La fenetre est de largeur de plus de 1250px");
}



var k = prompt("ecrivez un nombre");
var i = 1;
for(var u=1; u<=k; u++){
    i = i*u;   
/  
}
alert("le résultat est = " +i);



function myfunction()
{
    alert("Modification de la div");
    var modification = document.getElementById ("MaDivNum1");
    modification.innerHTML = "◘ ┤ î ╝ ▒ ┬ ‗ Í Ì ¨ £ ▼";
}



function myfunction()
{

    var modif = document.getElementByName("MaDivNum1");
    modif.forEach(function(div)
    {
        duv.innerHTML = "◘ ┤ î ╝ ▒ ┬ ‗ Í Ì ¨ £ ▼";
    });

}



function myfunction()
{

    var modif = document.getElementByName("Div");
    let i;
    for(i = 0; i < modif.leaght; i++){
        if(modif[i] instanceof HTMLElement){
            modif[i].innerHTML = "◘ ┤ î ╝ ▒ ┬ ‗ Í Ì ¨ £ ▼";
        }
    }

}



function myfunction()
{

    var modif = document.getElementByName("MaDivNum1");
    let i;
    for(i = 0; i < modif.leaght; i++){
        if(modif[i] instanceof HTMLElement){
            modif[i].innerHTML = "◘ ┤ î ╝ ▒ ┬ ‗ Í Ì ¨ £ ▼";
        }
    }

}

*/

var MaDiv = document.getElementById("MaDivNum1");

MaDiv.addEventListener("click", changement);

function changement(evenement) {
    evenement.target.innerHTML = "On m'a cliqué dessus !";
}

// EventListener

var compteur = 0;
var compteur2 = 0;

var MaDiv2 = document.getElementById("Methode1");
MaDiv2.addEventListener("click", changementEcriture);

var MaDiv2 = document.getElementById("Methode2");
MaDiv2.addEventListener("mouseover", survole);

var MaDiv2 = document.getElementById("Methode3");
MaDiv2.addEventListener("keydown", ecriture);



function ecriture(evenement) {
    evenement.target.innerHTML = "On a cliqué sur : "+evenement.key+" !";
}

function changementEcriture(evenement) {
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus "+compteur+" fois !";
}

function survole(evenement) {
    compteur2++;
    evenement.target.innerHTML = "On m'a survolé "+compteur2+" fois !";
}



// Exercices


var MaDiv4 = document.getElementById("Methode4");
MaDiv4.addEventListener("click", changementDiv);

var MaDiv5 = document.getElementById("Methode5");
MaDiv5.addEventListener("mouseover", visibilite);


function changementDiv(evenement) {
    if (evenement.target.className === "class1") {
        evenement.target.className = "class2";
    } else {
        evenement.target.className = "class1";
    }
}

function visibilite(evenement) {
    MaDiv5.style.backgroundColor = 'rgba(255, 255, 255, .4)';
    MaDiv5.innerHTML = '';
}
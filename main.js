//var MavariableString = "toto";
//var MavariableNumerique = 100;
//var MavariableTableau = ['Apple', 'Banana'];
//var MavariableObjet = window;
//alert(toto + MavariableString + MavariableNumerique +
//    MavariableTableau[0] + MavariableObjet.location.pathname);



//var MavariableString = "toto" ;
//var MavariableNumerique = prompt("entrez un nombre", 100);
//
//if (MavariableString == "toto" && MavariableNumerique !=200 || MavariableNumerique <= 100){
//    alert("je suis le cas 1");
//}else{
//    alert("je suis le cas 2");
//}



//if (window.outerWidth < 1250){
//    alert("La fenetre est de largeur de moins de 1250px");
//}else{
//    alert("La fenetre est de largeur de plus de 1250px");
//}



var MavariableNumerique = prompt("entrez un nombre");
var MavariableCompteur = 1;
var MavariableCalcul = 2;
var i = 1;

while(MavariableNumerique == i){
    MavariableCompteur = MavariableCompteur + MavariableCalcul;
    MavariableCalcul = MavariableCalcul + 1;
    i++;
}

alert("Le resultat du calcul est" + MavariableCompteur);
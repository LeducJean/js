var num = 3;

function mafunction() {
    alert("APPEL API");

    fetch('http://192.168.64.57/js/DonneMoiLePhp.php').then((resp) => resp.json()).then(function (data) {
        // data est la réponse http de notre API.
        console.log(data);
        //UpdateDiv("arenne",data[0]);
        var modification = document.getElementById("arenne");
        modification.innerHTML = num;
    })
        .catch(function (error) {
            // This is where you run code if the server returns any errors
            console.log(error);
        });
}
/* function UpdateDiv(id,text){
   var e = document.getElementById(id).innerHTML = text;
  }
 */

var bouton = document.querySelector("#lebouton");
bouton.addEventListener("click", mafunction); 
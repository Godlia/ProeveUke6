/* Planen var å ha en bildekarussel, men jeg hadde ikke nok tid pga. CSS :)*/

var myIndex = 0;
carousel();

function carousel() {
    // henter alle objektene med klassen "Item"
    var x = document.getElementsByClassName("Item");
    // Karusell tid :)
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "flex";
    }
}
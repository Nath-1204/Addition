/*    
    Écrire un programme qui :
    Affiche la liste de fruits disponibles;
    Demande au client quel fruit il désire acheter :
    •s’il est présent dans le tableau fruits: le retirer du tableau, et afficher ‘ok!’,
    •sinon, afficher ‘indisponible…’.
    Affiche à nouveau la liste de fruits disponibles
*/

var fruits = ["mangue", "raisin", "figue", "kiwi"];

var liste = document.getElementById('fruit').innerHTML = fruits.join(",");
var h2 = document.querySelector('h2');
var reste = document.createElement('ul');

h2.appendChild(reste);

var demandeClient = prompt("Entrer un fruit que vous desirez ?");
var transforamtionMin = demandeClient.toLowerCase();
console.log("tranformation en miniscule " +transforamtionMin);
var siOui = fruits.indexOf(transforamtionMin);
console.log("Le fruit entré est au index " +siOui);


if(siOui != -1 ){
    delete fruits[siOui];
    fruits.splice(siOui,1);
    alert("Ok, " +demandeClient + " est disponible");
    reste.innerText = fruits;
}else{
    alert(demandeClient + " est indisponible");
    reste.innerText = fruits;
}


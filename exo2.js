/*
    Ecrire un programme qui demande à l’utilisateur de saisir 5 nombres entiers comprises entre 9 
    et 99, puis une fois la saisie terminée, les affiche.
    ▪Le programme doit redemander la saisie en cas d’erreur sans compter cette étape
    •Le programme affiche les nombres des entiers pairs, le nombre des entiers impairs saisis et le 
    nombre des itérations fausses
    •Le programme affiche le tableau des nombres pairs et le tableau des nombres impairs saisis
*/

var numbers = [];


function Envoyer(){

    var ajout_nombre = document.getElementById('input');
    var afficheNombre = document.getElementById('nombreEntrer');
    var affichage = document.createElement('li');  
    var insertionTableau = numbers.push(ajout_nombre.value);


    var afficheTableau = document.getElementById('ligne');
    var tr = document.createElement('tr');
    var nombrePairs = document.createElement('td');
    var nombreImpairs = document.createElement('td');
    
    if((insertionTableau < 9 ) && (insertionTableau > 99)){
        alert("Entrer des nombres entiers entre 9 et 99 !!");
    }
    
    const bloque = numbers.filter((max) => {
        return max.length = 5;
        //alert("Vous devez saisir 5 nombres !!");
    })
    

    afficheNombre.appendChild(affichage);
    affichage.innerText = insertionTableau;
    afficheTableau.appendChild(tr);
    tr.appendChild(nombrePairs);
    tr.appendChild(nombreImpairs);


    numbers.forEach(insertionTableau => {

        affichage.innerText = insertionTableau;
        if(insertionTableau % 2 == 0){
            nombrePairs.innerText = insertionTableau;
            nombrePairs.value = ' ';
        }else{
            nombreImpairs.innerText = insertionTableau;
            nombreImpairs.value = ' ';
        }        
    })
 
    ajout_nombre.value = " ";

}



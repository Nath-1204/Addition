
var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var message = document.querySelector('.message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('section');
var compteur = 0;

//nombres aléatoire début de jeu

random1 = Math.random()*11 << 0; //Pour génerer des nombres entre 0 et 11
random2 = Math.random()*11 << 0; //Pour génerer des nombres entre 0 et 11
console.log(random1)
console.log(random2)

//Inserer les nombres au hasard dans les variables nb1 et nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;

//fonction de verification

function verifier() {
    //Recuperer le resultat entré par le joueur
    var res = document.querySelector('.res').value ;
    if(random1 + random2 == res){
        message.style.background = 'green';
        message.innerHTML = "Correcte.";

            //Creer d'autres nombres aléatoirs
            random1 = Math.random()*11 << 0; 
            random2 = Math.random()*11 << 0; 
            console.log(random1)
            console.log(random2)

            //Inserer les nombres au hasard dans les variables nb1 et nb2
            nb1.innerHTML = random1;
            nb2.innerHTML = random2;
            compteur = compteur + 1;
      
    }else{
        message.style.background = 'red';
        message.innerHTML = "Vous avez perdu.";
        section.innerHTML = "";
        score.innerHTML = `<p> ${compteur} </p><br/> Score`; 
        link.style.display = 'block';
    }
}
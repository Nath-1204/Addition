const contentChoixOrdi = document.getElementById('choix-ordinateur');
const contentChoixUser= document.getElementById('choix-utilisateur');
const contentResult = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');

let choixUser;
let resultat;
let choixOrdinateur;

//Evenement 'Click sur les buttons'
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e) => {
    //recuperation de l'ID du boutton clique
    //alert(e.target.id);
    choixUser = e.target.id ;
    //On ajoute l'image qui correspond au clique
    contentChoixUser.innerHTML = `<img src='${choixUser}.png'>`;
    generer_choix_ordi();
    verification();
}))

//Fonction pour générer le choix de l'ordinateur
function generer_choix_ordi() {
    random = Math.floor(Math.random() * 3) +1;
    //alert(random);
    if(random === 1){
        choixOrdinateur = 'pierre'
    }
    if(random === 2){
        choixOrdinateur = 'papier'
    }
    if(random === 3){
        choixOrdinateur = 'ciseaux'
    }
    
    //On ajoute l'image qui correspond au clique
    contentChoixOrdi.innerHTML = `<img src='${choixOrdinateur}.png'>`; 
 
}

//Fonction pour verifier si le joueur a gagné ou pas
function verification(){
    if(choixUser == choixOrdinateur){
        resultat = "Egalité";
    }

    //Les cas où le joueur perd
    if((choixUser == "pierre") && (choixOrdinateur == "papier")){
        resultat = "Perdu !";
    }
    if((choixUser == "papier") && (choixOrdinateur == "ciseaux")){
        resultat = "Perdu !";
    }
    if((choixUser == "ciseaux") && (choixOrdinateur == "pierre")){
        resultat = "Perdu !";
    }

    //Les cas où le joueur gagne
    if((choixUser == "pierre") && (choixOrdinateur == "ciseaux")){
        resultat = "Gagné !";
    }
    if((choixUser == "ciseaux") && (choixOrdinateur == "papier")){
        resultat = "Gagné !";
    }
    if((choixUser == "papier") && (choixOrdinateur == "pierre")){
        resultat = "Gagné !";
    }

    contentResult.innerHTML = resultat;
}



var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function() {
    //verifier si l'input n'est pas vide
    if(inputField.value != ""){
        //Si l'input n'est pas vide, créer un paragraphe
        var paragraph = document.createElement('p');
    }

    //valorisé ce paragraphe avec le contenu de l'input
    paragraph.innerHTML = inputField.value;

    //stylisé le paragraphe
    paragraph.classList.add('paragraph_style');

    //Insérer le paragraphe dans l'élément toDoContainer
    toDoContainer.appendChild(paragraph);

    //Vidé l'input quand le paragraphe est ajouté
    inputField.value = "";

    //barre le paragraphe quand on clique dessus
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph_click')
    })

    //Supprimer la tâche quand on double click sur le tâche
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.remove(paragraph);
    })
}
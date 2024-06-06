
function search(){
    let word = document.getElementById('text').value;
    let resultat = document.getElementById('resultat').value;

    if(word.lenght != 0){
        let url = "https://api.dictionnaryapi.dev/api/v2/entries/fr/" + word;
        fetch(url).then(response => 
            response.json().then(data => {
                try{
                    for( let words of data) {
                        let definition = words.meanings[0].definitions[0].definition
                        resultat.innerHTML = "<p class='res'><span>Définition</span><br/>"+ definition +"</p>"
                    }
                }catch (err) {
                    resultat.innerHTML = "<p class='res'>Aucune définition trouvé !</p>"
                }
            })
        )
    }else{
        resultat.innerHTML = "<p class='res'>Veuillez remplir ce champ !</p>"
    }
} 

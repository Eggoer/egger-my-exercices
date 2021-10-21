// Créer un fichier  ˜/mylastname-my-exercices/day-2/exercice-4.js 
// Elle devra être prototypée de la manière suivante : my_display_comb()
export const my_display_comb = () => {

    // Faite en sorte que : 
    // console.log(my_display_comb()); 
    // ["0 1", "0 2", "0 3", …, "1 99", "2 1", "2 2, "2 3", …, "2 99"]
    var array = [];

    for (var i = 0; i < 100; i++) {
        for (var y = 0; y < 100; y++) {
            array[i * 100 + y] = i + ' ' + y;
        }
    }
    
    // #Indices
    // Retour attendu : Array
    return array;
}
// #Warning
// Les push, concat ... et toutes les autres méthodes pour insérer un élément dans un tableau sont interdites

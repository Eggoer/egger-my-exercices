// Créer un fichier  ˜/mylastname-my-exercices/day-2/exercice-5.js 
// Elle devra être prototypée de la manière suivante : my_display_combv2()
export const my_display_combv2 = () => {
    
    // Écrire une fonction qui donne dans un ordre croissant  les différentes combinaisons de trois chiffres tous différents.  Toutes les valeurs seront stockées dans un tableau
    // Faite en sorte que : 
    // console.log(my_display_combv2()); 
    // ["0 1 2", "0 1 3", "0 1 4", "0 1 5", "0 1 6", "0 1 7", "0 1 8", "0 1 9", "0 2 3", "0 2 4", "0 2 5", "0 2 6", …, "7 8 9"]
    var array = [];
    var number = 0;

    for (var i = 0; i < 10; i++) {
        for (var y = 0; y < 10; y++) {
            for (var z = 0; z < 10; z++) {
                if (i < y && y < z) {
                    array[number] = i + " " + y + " " + z;
                    number++;
                }
            }
        }
    }

    // #Indices
    // Retour attendu : Array
    return array;
}
// #Warning
// Les push, concat ... et toutes les autres méthodes pour insérer un élément dans un tableau sont interdites

console.log(my_display_combv2());
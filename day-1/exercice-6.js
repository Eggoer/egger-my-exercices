// Créer un fichier ˜/mylastname-my-exercices/day-1/exercice-6.js
// Elle devra être prototypée de la manière suivante : my_length_array(arr)
export const my_length_array = (arr) => { 

    // Écrire une fonction qui compte le nombre d’élement contenu un dans un tableau passé en paramètre.
    var nbr = 0;
    
    while (arr[nbr] !== undefined)
        nbr++;

    // #Indices
    // Retour attendu : Number
    return nbr;
}
// #Warning
// Les push, concat, length ... et toutes les autres méthodes natives pour manipuler un tableau sont interdites.
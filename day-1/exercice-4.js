// Créer un fichier ˜/mylastname-my-exercices/day-1/exercice-4.js
// Elle devra être prototypée de la manière suivante : my_size_alpha(str)
export const my_size_alpha = (str) => { 

    // Si tout autre chose qu'une String est passé en argument renvoyer 0.
    if (typeof(str) !== "string")
        return 0;

    // Écrire une fonction qui compte le nombre de lettres passées en argument.  
    var nbr = 0;
    
    while (str[nbr] !== undefined)
        nbr++;

    // #Indices
    // Il est possible de faire appel à des fonctions que vous avez déjà réalisé dans vos exercices précédent
    // Retour attendu : Number
    return nbr;
}
// #Warning
// split, reverse, charAt, length ... et toutes les autres méthodes dans l'objet String natif sont interdites.  Les push, concat, length ... et toutes les autres méthodes natives pour manipuler un tableau sont interdites.
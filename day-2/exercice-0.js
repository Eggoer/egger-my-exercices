// Créer un fichier  ˜/mylastname-my-exercices/day-2/exercice-0.js 
// Elle devra être prototypée de la manière suivante : my_display_forever_42(nbr)
export const my_display_forever_42 = (nbr) => {
    
    // Si aucun argument n’est passé en paramètre renvoyer 42.
    // Si tout autre chose hormis un nombre est passé en paramètre renvoyer 42
    var number = 42;

    // Si un nombre est passé en argument renvoyer le nombre passé en paramètre. 
    if (typeof(nbr) === "number")
        return nbr;
    
    // #Indices
    // Retour attendu : Number
    return number;
}

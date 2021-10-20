// Créer un fichier ˜/mylastname-my-exercices/day-1/exercice-7.js
// Elle devra être prototypée de la manière suivante :  my_is_posi_neg(nbr)
export const my_array_alpha = (nbr) => { 

    // Écrire une fonction qui affiche POSITIF ou NEGATIF en fonction de l'entier passé en argument.  
    // Si nbr est positif ou null ou undefined alors afficher POSITIF.
    var string = "POSITIF";
    
    // Si nbr est négatif alors afficher NEGATIF. 
    if (nbr < 0)
        string = "NEGATIF";
    
    // Si nbr est égal à 0 alors il sera NEUTRAL
    if (nbr === 0)
        string = "NEUTRAL";

    // #Indices
    // Retour attendu : String
    return string;
}

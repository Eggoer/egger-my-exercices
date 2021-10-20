// Créer un fichier  ˜/mylastname-my-exercices/day-2/exercice-2.js 
// Elle devra être prototypée de la manière suivante : my_display_multi_42(multi, int)
export const my_display_multi_42 = (multi, int) => {
    
    // Si tout autre chose comme produit renvoyez false
    var bool = false;

    // Faite en sorte de retourner true si le multiplicateur (multi) et l’entier (int) passer en paramètre forme le produit de 42
    if (multi * int === 42)
        return true;

    // #Indices
    // Retour attendu : Boolean
    return bool;
}

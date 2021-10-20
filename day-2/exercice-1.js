// Créer un fichier  ˜/mylastname-my-exercices/day-2/exercice-1.js 
// Elle devra être prototypée de la manière suivante : my_alpha_reverse(str)
import { my_size_alpha } from "../day-1/exercice-4";

export const my_alpha_reverse = (str) => {
    
    // Faite en sorte d’inverser les chaines de caractères passé en argument
    var nbr = my_size_alpha(str);
    var string = "";

    for (var i = nbr - 1; i > 0; i--)
        string + str[i];

    // #Indices
    // Retour attendu : String
    return string;
}
// #Warning
// Les push, concat, join, reverse ... et toutes les autres méthodes pour manipuler les tableaux et les string sont interdites

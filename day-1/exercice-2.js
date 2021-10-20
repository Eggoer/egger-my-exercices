// Créer un fichier ˜/mylastname-my-exercices/day-1/exercice-2.js
// Vous devez utiliser la méthode my_display_alpha() de l’exercice 1.
import { my_display_alpha } from "./exercice-1";

// Elle devra être prototypée de la manière suivante :  my_display_alpha_reverse()
export const my_display_alpha_reverse = () => {

    // Écrire une fonction qui retourne toutes les lettres de l’alphabet en minuscule sur une seule ligne, dans l’ordre croissant à partir de la lettre ’z’ jusqu'à 'a'.
    var alpha = my_display_alpha();
    var string = "";

    for (var i = 0; i < 26; i++) {
        string += alpha[25 - i];
    }

    // #Indices
    // Retour attendu : String
    return string;
}
// #Warning
// Les push, concat, length ... et toutes les autres méthodes natives pour manipuler un tableau sont interdites.

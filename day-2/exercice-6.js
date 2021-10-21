// Créer un fichier  ˜/mylastname-my-exercices/day-2/exercice-6.js 
// Elle devra être prototypée de la manière suivante : my_display_unicode(arr)
import { my_length_array } from "../day-1/exercice-6.js";

export const my_display_unicode = (arr) => {
    
    // Écrire une fonction qui retourne une phrase à partir d'un tableau contenant des décimales unicode en latin de 'a' à 'Z' et les chiffres de '0' à '9'.  
    // Tous les autres caractères ne devront pas figurer dans le résultat sauf les espaces
    // Les valeurs passées dans le tableau doivent être des décimales
    var string = "";
    var letter = "";
    
    for (var i = 0; i < my_length_array(arr); i++) {
        if (47 < arr[i] && arr[i] < 58 || 96 < arr[i] && arr[i] < 123) {
            letter = arr[i];
            string += letter;
        }
    }

    // #Indices
    // Retour attendu : String
    return string;
}
// #Warning
// Les push, concat ... et toutes les autres méthodes pour insérer un élément dans un tableau sont interdites.
// Les méthodes native utilisant l’unicode sont interdites.

console.log(my_display_unicode([47, 48, 57, 58, 96, 97, 122, 123]));
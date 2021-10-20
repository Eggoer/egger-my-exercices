// Créer un fichier ˜/mylastname-my-exercices/day-1/exercice-1.js

// Elle devra être prototypée de la manière suivante :  my_display_alpha()
export const my_display_alpha = () => {

    // Écrire une fonction qui retourne toutes les lettres de l’alphabet en minuscule sur une seule ligne, dans l’ordre croissant à partir de la lettre ’a’ jusqu'à 'z'.
    var string = "";

    for (var i = 97; i <= 122; i++) {
        string += String.fromCharCode(i);
    }

    // #Indices
    // Retour attendu : String
    return string;
}

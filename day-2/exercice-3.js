// Créer un fichier  ˜/mylastname-my-exercices/day-2/exercice-3.js 
// Elle devra être prototypée de la manière suivante : my_string_is_number(str)
export const my_string_is_number = (str) => {
    
    // Si tout autre chose comme résultat renvoyez false
    var bool = false;
    var i = 0;

    // Faite en sorte de retourner true si la chaine passé en paramètre contient un nombre
    while (str[i]) {
        if (parseInt(str[i]))
            bool = true;
        i++;
    }
    
    // #Indices
    // Retour attendu : Boolean
    return bool;
}

console.log(my_string_is_number("Test"))

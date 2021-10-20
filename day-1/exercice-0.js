// Faite en sorte pour chaque fonction node.js des exercices que :
// export const myFunction = () => ()
export const my_sum = (a, b) => {

    // Si aucune valeur n’est passée en a ou en b renvoyé 0.
    if (a === undefined || b === undefined)
        return 0;

    // Les arguments doivent être des number.
    if (typeof a === "number" && typeof b === "number")
        return a + b;

    // Tout autre type passé en argument doit renvoyer 0.
    return 0;
}
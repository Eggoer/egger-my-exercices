import { open } from 'fs/promises';

// Read positions we want to take in a csv file
export const parsing = async (file) => {
    let filehandle;
    let listOfItems = [];

    try {
        filehandle = await open(file, 'r');
        let something = await filehandle.readFile({
           encoding:"utf-8" 
        });

        let rows = something.split('\n');
        rows.forEach((row) => {
            let element = row.split(',');
            listOfItems.push({
                siren: element[0],
                nic: element[1],
                siret: element[2],
                dateCreationEtablissement: element[4],
                dateDernierTraitementEtablissement: element[8],
                typeVoieEtablissement: element[14],
                libelleVoieEtablissement: element[15],
                codePostalEtablissement: element[16],
                libelleCommuneEtablissement: element[17],
                codeCommuneEtablissement: element[20],
                dateDebut: element[39],
                etatAdministratifEtablissement: element[40]
            });
        });

    } finally {
        await filehandle?.close();
    }
    return listOfItems;
}

// Answer connexion and send Process ID
const isRunning = () => {
    process.send({
        type: 'process:msg', 
        data: {
            hello: 'hello',
            pm_id: process.env.pm_id,
        }
    });
}

isRunning();

// Create a listener in child process
process.on('message', async function(packet) {
    let filename = packet.data.name;
    
    // Receive the name of a small csv file
    // Parse data and send back an answer
    try {
        let result = await parsing(filename);
        process.send({
            type: 'process:msg', 
            data: {
                hi: result, 
                pm_id: process.env.pm_id,
                fileDone: true,
            }
        });

    // Send error during parsing
    } catch (e) {
        process.send({
            type: 'process:msg', 
            data: {
                error: e, 
                pm_id: process.env.pm_id
            }
        });
    }
});

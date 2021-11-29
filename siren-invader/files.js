import { fstat } from 'fs';
import { open, writeFile } from 'fs/promises';
import pm2 from 'pm2';

const PATH = 'StockEtablissement_utf8.csv';

const splitter = async () => {
    const splitSize = 30;
    const chunk = 1024 * 1024 * splitSize;
    const buffer = Buffer.alloc(chunk);

    let bytesRead = 0;
    let position = 0;
    let id = 0;


    let fileHandle = await open(PATH, 'r');

    let fileNames = [];

    while(bytesRead = (await fileHandle.read(buffer, 0, chunk, position)).bytesRead) {

        let lastLineOffset = buffer.lastIndexOf('\n');
        let firstLineOffset = 0;
        
        if (!position) {
            firstLineOffset = buffer.indexOf('\n') + 1;
        }
        
        await writeFile('csvFiles/csv' + id + '.csv', buffer.slice(firstLineOffset, lastLineOffset));
        fileNames.push('csvFiles/csv' + id + '.csv');
        position += lastLineOffset + 1;
        ++id;
    }
    return fileNames;
}

// Start a process executing the script
const workerStarter = () => {
    for (let i = 0; i < 4; i++) {
        console.log('called worker starter');
        pm2.start({
            script    : 'siren.js',
            name      : 'worker' + i,
            autorestart: false
        }, function(err) {
            if (err) {
                return pm2.disconnect()
            }
        });
    }
}

export const filer = async () => {
    let filehandle;
    let remainingFiles;

    try {
        let filenames = await splitter();

        remainingFiles = filenames.length;
        let createdCount = 0;
        // Create a connexion with local pm2
        pm2.connect(function(err) {
            if (err) {
              process.exit(2)
            }

            // Listen to actif process and waits responses
            // Receive packets averytime the process send information
            pm2.launchBus(function(err, pm2_bus) {
                pm2_bus.on('process:msg', function(packet) {
                    let pid = packet.data.pm_id;

                    // if the process finished parsing a file, decrement the number of files to parse
                    if (packet.data.fileDone)
                        remainingFiles--;
                    else if (packet.data.error) {
                        remainingFiles--;
                    } else {
                        console.log(packet);
                        remainingFiles--;
                        if (packet.data.hello) {
                            createdCount++;
                            if (createdCount > 4) {
                                console.log('killing and disconnecting');
                                //pm2.killDaemon();
                                pm2.disconnect();
                                console.log('killed and disconnected');
                                return;
                            }
                        }
                    }

                    console.log(remainingFiles);
                    
                    // Send data to the process to read each file 
                    if (remainingFiles > 0) {
                        let filename = filenames[0];
                        filenames = filenames.slice(1);
                        pm2.sendDataToProcessId(pid, {
                            type: 'process:msg',
                            data: {
                                name: filename
                            },
                            topic: 'SIREN-INVADER'
                        });
                    }

                    // When there is no more file to parse
                    // Wait the answer of the process to terminate pm2 instance
                    else if (remainingFiles == 0) {
                        pm2.disconnect();
                        return;
                    }
                });
            });

            // Start a worker
            workerStarter();
        });

    } finally {
        // Close read file
        await filehandle?.close();
    }
}

filer();
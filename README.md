# egger-my-exercices

This repository is used to apprehend the node.js.

It contains different exercices done during lessons to apprehend the language. It also includes the final project of those lessons.

## Siren Invader

This project aims to index great amount of data from a csv file to a mangoDB database using multi threading and asynchronous functionalities.

Getting started:
- Download data inside "*siren-invader*"
- Install dependencies

> npm install

- Execute program

> cd siren-invader
> 
> node ./files.js

How the code works:
- It looks for the file "*StockEtablissement_utf8.csv*"
- When the file is found, it splits it in several files in a folder named "csvFiles"
- Read every file asynchronously

### *Issues*

There is no bdd parametered and no push in database.
After reading the multiple child files, the execution stops.

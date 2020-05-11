# poe-fakeserver
Un serveur JSON Fake basé sur json-server

## Installation

Après avoir récupéré le projet via la commande `git clone` (voir bouton en haut à droite), les dépendances s'intallent via la commande standard :

`npm install`

et le serveur se lance via le script start invoqué par la commande :

`npm start`

Le serveur sera alors lancé sur `http://localhost:3000/` et peut être interrogé via votre navigateur web (par exemple sur `http://localhost:3000/users`) ou via un outil REST tel que [Postman](https://www.postman.com).

## Génération de nouvelles données via [faker](https://github.com/marak/Faker.js/) (optionnel)

`npm run generate`


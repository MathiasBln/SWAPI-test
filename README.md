#Star Wars Rebels Alliance Search System (RASS)

Ce projet propose un système de recherche pour l'Alliance Rebelle, permettant d'explorer les données de l'Empire à partir de l'API SWAPI. Il s'agit d'une interface complète avec un back-end en Node.js et un front-end en React pour rechercher et afficher les informations cruciales pour la Rébellion.

###Fonctionnalités Réalisées

- [x] Création d'un back-end en Node permettant de récupérer les données de SWAPI
- [x] Endpoint de recherche dans la base de données impériale.
- [ ] Système d'authentification avec des identifiants spécifiques.
- [x] Front-end en ReactJS avec un champ de recherche, une liste de résultats et une fiche détaillé.
- [x] Afficher des fiches differentes en fonction du type de donnée.
- [ ] Implémentation d'un router pour accéder directement à une fiche ou aux résultats de recherche.
- [x] Filtrage par type de données (personnage, vaisseau, etc.).
- [ ] Utilisation de Redux
- [x] Utilisation du fonctionnel et de l'immutabilité
- [ ] Un debounce pour la recherche
- [ ] Mise en place de CSS modules
- [ ] Permettre d'afficher les résultats en Wookiee

###Commandes pour Lancer le Projet
Back-End

```
cd server
npm i
node app.js
```

Front-End
Lancez l’application React avec la commande suivante :

```
cd rass
npm i
npm start
```

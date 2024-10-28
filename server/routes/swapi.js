const express = require('express');
const axios = require('axios');

const router = express.Router();
const SWAPI_BASE_URL = 'https://swapi.dev/api/';

router.get('/peoples', async (req, res) => {
    try {
        let results = [];
        let url = `${SWAPI_BASE_URL}people/`;

        while (url) {
            const response = await axios.get(url);
            results = results.concat(response.data.results);
            url = response.data.next;
        }
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des peoples', error });
    }
});


router.get('/planets', async (req, res) => {
    try {
        let results = [];
        let url = `${SWAPI_BASE_URL}planets/`;

        while (url) {
            const response = await axios.get(url);
            results = results.concat(response.data.results);
            url = response.data.next;
        }

        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des planets', error });
    }
});

router.get('/starships', async (req, res) => {
    try {
        let results = [];
        let url = `${SWAPI_BASE_URL}starships/`;

        while (url) {
            const response = await axios.get(url);
            results = results.concat(response.data.results);
            url = response.data.next;
        }

        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des starships', error });
    }
});

router.get('/films', async (req, res) => {
    try {
        let results = [];
        let url = `${SWAPI_BASE_URL}films/`;

        while (url) {
            const response = await axios.get(url);
            results = results.concat(response.data.results);
            url = response.data.next;
        }
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des films', error });
    }
});

module.exports = router;

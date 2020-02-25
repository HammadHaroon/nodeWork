const router = require('express').Router();
const fetch = require('node-fetch');

const title = 'The Phantom Menace';

router.get("/getAll", function(req, response){
    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(data => {
        response.send(data);
    }).catch(error => console.error(error));
});

router.get("/get-by-title", function(req, response){
    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(data => {
        const records = data.results;
        const res = records.filter((e) => e.title === title);
        response.send(res);
    }).catch(error => console.error(error));
});

module.exports =  router;
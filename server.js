'use strict';

const server = require('express')();
const { default: axios } = require('axios');
const fetch = require('axios');

server.get('/', async (req, res) => {
    const result = await axios.get('http://localhost:4000/dbc');

    res.send(result.data);
});

server.get('/route2', (req, res) => {
    res.send('still working');
});

server.listen(3000, () => {
    console.log('Listening on port: 3000');
});
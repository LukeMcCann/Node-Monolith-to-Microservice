'use strict';

const app = require('express')();
const { databaseFunction } = require('./datastore');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    databaseFunction();
    res.status(200).send(databaseFunction());
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
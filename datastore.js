'use strict'; 

const server = require('express')();

server.get('/dbc', (req, res) => {
    const data = [
        {
            title: 'Post One',
            content: 'This is my first post!'
        },
        {
            title: 'Post Two',
            content: 'This is my Second post!'
        },
        {
            title: 'Post Three',
            content: 'This is my third post!'
        },
        {
            title: 'Post Four',
            content: 'This is my fourth post!'
        }
    ];
    res.send(data);
});

server.listen(4000, () => {
    console.log(`Database connector running on port: 4000`);
});

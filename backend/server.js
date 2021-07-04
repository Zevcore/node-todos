const express = require('express');
const app = express();
const { port } = require('./config');

app.get('/', (req, res) => {
    res.send('Serwer działa');
});

app.listen(port, () => {
    console.log("Serwer wystartował!");
});